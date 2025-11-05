import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useLocalSearchParams, router, Stack } from 'expo-router'
import { useState, useEffect, useRef } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getAllCourses, getCoursesByIds } from '../lib/data'
import { Course } from '../lib/data'
import { useCartItems } from '../lib/cart'

export default function Checkout() {
  const params = useLocalSearchParams<{ items?: string }>()
  const cartItems = useCartItems()
  const [courses, setCourses] = useState<Course[]>([])
  const [selectedCourses, setSelectedCourses] = useState<Set<string>>(new Set())
  const [quantities, setQuantities] = useState<Map<string, number>>(new Map())
  const [feesCalculated, setFeesCalculated] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [loading, setLoading] = useState(true)
  const initializedRef = useRef(false)

  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true
    
    const allCourses = getAllCourses()
    setCourses(allCourses)

    // Get course IDs that should be pre-selected (only on initial load)
    let selectedIds: string[] = []
    const itemsParam = params.items
    if (itemsParam) {
      if (itemsParam.includes(',')) {
        selectedIds = itemsParam.split(',').filter(id => id.trim() !== '')
      } else {
        selectedIds = [itemsParam]
      }
    } else if (cartItems.length > 0) {
      // Capture initial cart items
      selectedIds = cartItems.map(item => item.id)
    }

    if (selectedIds.length > 0) {
      setSelectedCourses(new Set(selectedIds))
      // Initialize quantities from cart items, or default to 1
      const initialQuantities = new Map<string, number>()
      selectedIds.forEach(id => {
        const cartItem = cartItems.find(item => item.id === id)
        initialQuantities.set(id, cartItem?.quantity || 1)
      })
      setQuantities(initialQuantities)
    }
    setLoading(false)
  }, [params.items, cartItems])

  const handleCheckboxChange = (courseId: string) => {
    setSelectedCourses(prev => {
      const isCurrentlySelected = prev.has(courseId)
      
      // If trying to deselect a course
      if (isCurrentlySelected) {
        // Prevent deselecting if it's the last course (minimum 1 required)
        if (prev.size <= 1) {
          Alert.alert('Error', 'At least one course must be selected')
          return prev
        }
        // Create new Set without this course
        const newSet = new Set(prev)
        newSet.delete(courseId)
        // Remove quantity when unselected
        setQuantities(prevQty => {
          const newQty = new Map(prevQty)
          newQty.delete(courseId)
          return newQty
        })
        return newSet
      } else {
        // Adding a new course - create new Set with this course
        const newSet = new Set([...prev, courseId])
        // Initialize quantity to 1 when selected
        setQuantities(prevQty => {
          const newQty = new Map(prevQty)
          newQty.set(courseId, 1)
          return newQty
        })
        return newSet
      }
    })
    setFeesCalculated(false)
  }

  const handleQuantityChange = (courseId: string, change: number) => {
    setQuantities(prev => {
      const newQty = new Map(prev)
      const currentQty = newQty.get(courseId) || 1
      const newQuantity = Math.min(10, Math.max(1, currentQty + change))
      newQty.set(courseId, newQuantity)
      return newQty
    })
    setFeesCalculated(false)
  }

  const calculateDiscount = (courseCount: number) => {
    if (courseCount === 1) return 0
    if (courseCount === 2) return 0.05
    if (courseCount === 3) return 0.10
    return 0.15
  }

  const selectedCoursesList = courses.filter(c => selectedCourses.has(c.id))
  const subtotal = selectedCoursesList.reduce((sum, course) => {
    const quantity = quantities.get(course.id) || 1
    return sum + (course.price * quantity)
  }, 0)
  const courseCount = selectedCoursesList.length
  const discountRate = calculateDiscount(courseCount)
  const discount = subtotal * discountRate
  const totalBeforeVAT = subtotal - discount
  const vat = totalBeforeVAT * 0.15
  const total = totalBeforeVAT + vat

  const handleCalculateFees = () => {
    if (selectedCoursesList.length === 0) {
      Alert.alert('Error', 'Please select at least one course')
      return
    }
    setFeesCalculated(true)
    Alert.alert('Success', 'Fees calculated successfully')
  }

  const handleSubmitQuota = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      Alert.alert('Error', 'Please fill in your name, email and phone')
      return
    }

    // Store invoice data for success page
    const invoiceData = {
      customerName: formData.name,
      email: formData.email,
      phone: formData.phone,
      courses: selectedCoursesList.map(c => ({
        name: c.name,
        price: c.price,
        quantity: quantities.get(c.id) || 1,
        type: c.type
      })),
      subtotal,
      discount,
      discountRate,
      totalBeforeVAT,
      vat,
      total,
      invoiceNumber: `INV-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      date: new Date().toLocaleDateString('en-ZA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    // Store in AsyncStorage for success page
    AsyncStorage.setItem('invoiceData', JSON.stringify(invoiceData))

    // Simulate submission
    setTimeout(() => {
      Alert.alert('Success', 'Quota submitted successfully', [
        {
          text: 'OK',
          onPress: () => router.push('/success'),
        },
      ])
    }, 2000)
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Navbar />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Request Quota</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Your Information</Text>
            <View style={styles.inputRow}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput
                  style={styles.input}
                  value={formData.name}
                  onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
                  placeholder="John Doe"
                  placeholderTextColor="#a5a5a5"
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  value={formData.email}
                  onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
                  placeholder="your@email.com"
                  placeholderTextColor="#a5a5a5"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Phone</Text>
                <TextInput
                  style={styles.input}
                  value={formData.phone}
                  onChangeText={(text) => setFormData(prev => ({ ...prev, phone: text }))}
                  placeholder="+27 82 123 4567"
                  placeholderTextColor="#a5a5a5"
                  keyboardType="phone-pad"
                />
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Courses</Text>
            <View style={styles.coursesList}>
              {courses.map((course) => (
                <View
                  key={course.id}
                  style={[
                    styles.courseItem,
                    selectedCourses.has(course.id) && styles.courseItemSelected,
                  ]}
                >
                  <TouchableOpacity
                    style={styles.checkbox}
                    onPress={() => {
                      handleCheckboxChange(course.id)
                    }}
                    activeOpacity={0.7}
                  >
                    {selectedCourses.has(course.id) ? (
                      <Ionicons name="checkmark-circle" size={20} color="#fff" />
                    ) : (
                      <Ionicons name="ellipse-outline" size={20} color="#fff" />
                    )}
                  </TouchableOpacity>
                  <View style={styles.courseImageContainer}>
                    <Image source={{ uri: course.coverImage }} style={styles.courseImage} contentFit="cover" />
                  </View>
                  <View style={styles.courseInfo}>
                    <Text style={styles.courseName}>{course.name}</Text>
                    <Text style={styles.courseDescription} numberOfLines={2}>
                      {course.description}
                    </Text>
                    <Text style={styles.coursePrice}>R{course.price}</Text>
                    {selectedCourses.has(course.id) && (
                      <View style={styles.quantityContainer}>
                        <Text style={styles.quantityLabel}>Quantity:</Text>
                        <View style={styles.quantityControls}>
                          <TouchableOpacity
                            onPress={() => handleQuantityChange(course.id, -1)}
                            disabled={(quantities.get(course.id) || 1) <= 1}
                            style={[
                              styles.quantityButton,
                              (quantities.get(course.id) || 1) <= 1 && styles.disabledButton
                            ]}
                          >
                            <Ionicons name="remove" size={12} color="#fff" />
                          </TouchableOpacity>
                          <Text style={styles.quantityText}>
                            {quantities.get(course.id) || 1}
                          </Text>
                          <TouchableOpacity
                            onPress={() => handleQuantityChange(course.id, 1)}
                            disabled={(quantities.get(course.id) || 1) >= 10}
                            style={[
                              styles.quantityButton,
                              (quantities.get(course.id) || 1) >= 10 && styles.disabledButton
                            ]}
                          >
                            <Ionicons name="add" size={12} color="#fff" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </View>

          {feesCalculated && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Pricing Breakdown</Text>
              <View style={styles.pricingBreakdown}>
                {/* Items summary */}
                <View style={{ marginBottom: 8 }}>
                  <Text style={[styles.pricingLabel, { marginBottom: 4 }]}>Items</Text>
                  {selectedCoursesList.map(c => {
                    const qty = quantities.get(c.id) || 1
                    const lineTotal = c.price * qty
                    return (
                      <View key={c.id} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                        <Text style={{ color: '#fff', fontSize: 12 }}>{c.name} x {qty}</Text>
                        <Text style={{ color: '#fff', fontSize: 12 }}>R{lineTotal.toFixed(2)}</Text>
                      </View>
                    )
                  })}
                </View>
                <View style={styles.pricingRow}>
                  <Text style={styles.pricingLabel}>Subtotal</Text>
                  <Text style={styles.pricingValue}>R{subtotal.toFixed(2)}</Text>
                </View>
                {discount > 0 && (
                  <View style={styles.pricingRow}>
                    <Text style={[styles.pricingLabel, styles.discountLabel]}>
                      Discount ({Math.round(discountRate * 100)}%)
                    </Text>
                    <Text style={[styles.pricingValue, styles.discountValue]}>
                      -R{discount.toFixed(2)}
                    </Text>
                  </View>
                )}
                <View style={styles.pricingRow}>
                  <Text style={styles.pricingLabel}>Subtotal after discount</Text>
                  <Text style={styles.pricingValue}>R{totalBeforeVAT.toFixed(2)}</Text>
                </View>
                <View style={styles.pricingRow}>
                  <Text style={styles.pricingLabel}>VAT (15%)</Text>
                  <Text style={styles.pricingValue}>R{vat.toFixed(2)}</Text>
                </View>
                <View style={[styles.pricingRow, styles.pricingTotal]}>
                  <Text style={styles.pricingLabel}>Total</Text>
                  <Text style={styles.pricingValue}>R{total.toFixed(2)}</Text>
                </View>
              </View>
            </View>
          )}

          <View style={styles.actions}>
            <TouchableOpacity style={styles.calculateButton} onPress={handleCalculateFees}>
              <Text style={styles.calculateButtonText}>Calculate Fee</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.submitButton, !feesCalculated && styles.submitButtonDisabled]}
              onPress={handleSubmitQuota}
              disabled={!feesCalculated}
            >
              <Text
                style={[
                  styles.submitButtonText,
                  !feesCalculated && styles.submitButtonTextDisabled,
                ]}
              >
                Submit Quota
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#a5a5a5',
  },
  content: {
    paddingTop: 120,
    paddingHorizontal: 16,
    paddingBottom: 40,
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 24,
  },
  section: {
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 16,
  },
  inputRow: {
    gap: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#0a0a0a',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: '#fff',
  },
  coursesList: {
    gap: 16,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    borderRadius: 12,
    opacity: 0.6,
  },
  courseItemSelected: {
    backgroundColor: '#0a0a0a',
    opacity: 1,
  },
  checkbox: {
    paddingTop: 8,
  },
  courseImageContainer: {
    width: 96,
    height: 96,
    backgroundColor: '#000',
    borderRadius: 12,
    overflow: 'hidden',
  },
  courseImage: {
    width: '100%',
    height: '100%',
  },
  courseInfo: {
    flex: 1,
  },
  courseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 14,
    color: '#a5a5a5',
    marginBottom: 8,
    lineHeight: 20,
  },
  coursePrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  quantityLabel: {
    fontSize: 14,
    color: '#a5a5a5',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  quantityButton: {
    padding: 4,
  },
  quantityText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    minWidth: 24,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  pricingBreakdown: {
    gap: 12,
  },
  pricingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pricingTotal: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.35)',
    paddingTop: 12,
    marginTop: 4,
  },
  pricingLabel: {
    fontSize: 16,
    color: '#fff',
  },
  pricingValue: {
    fontSize: 16,
    color: '#fff',
  },
  discountLabel: {
    color: '#4ade80',
  },
  discountValue: {
    color: '#4ade80',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 24,
    flexWrap: 'wrap',
  },
  calculateButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 20,
  },
  calculateButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 20,
  },
  submitButtonDisabled: {
    backgroundColor: '#666',
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  submitButtonTextDisabled: {
    color: '#999',
  },
})

