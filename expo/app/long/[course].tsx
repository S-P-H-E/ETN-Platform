import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { useLocalSearchParams, router, Stack } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { getCourseById } from '../../lib/data'
import { addItemToCart } from '../../lib/cart'

export default function CourseDetail() {
  const { course: courseId } = useLocalSearchParams<{ course: string }>()
  const course = getCourseById(courseId as string)

  if (!course) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Course Not Found' }} />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Course not found</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push('/' as any)}
          >
            <Text style={styles.backButtonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const item = {
    id: course.id,
    quantity: 1,
    name: course.name,
    price: course.price,
  }

  const handleBuyNow = () => {
    router.push(`/checkout?items=${course.id}`)
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Navbar />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.heroContainer}>
          <Image source={{ uri: course.coverImage }} style={styles.heroImage} contentFit="cover" />
          <View style={styles.heroOverlay}>
            <LinearGradient
              colors={['rgba(0,0,0,0.9)', 'transparent']}
              style={styles.gradientTop}
            />
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.95)']}
              style={styles.gradientBottom}
            />
            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>{course.name}</Text>
              <Text style={styles.heroDescription}>{course.description}</Text>
              <Text style={styles.heroDuration}>
                {course.type === 'long' ? '6 months' : '6 weeks'}
              </Text>
              <View style={styles.priceAndActions}>
                <Text style={styles.price}>R{course.price}</Text>
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
                    <Text style={styles.buyNowText}>Buy Now</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.addToCartButton}
                    onPress={() => addItemToCart(item)}
                  >
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>What you'll learn</Text>
          <Text style={styles.sectionText}>
            This comprehensive {course.type === 'long' ? '6-month' : '6-week'} program will equip you with advanced theory and practical skills. You'll master hands-on projects that build real-world expertise, developing career-ready competencies that employers value. Our curriculum covers industry best practices and real-world applications, ensuring you're prepared for immediate success in your chosen field.
          </Text>

          <Text style={styles.subsectionTitle}>Key Learning Outcomes</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Master advanced theoretical concepts and their practical applications</Text>
            <Text style={styles.listItem}>• Complete hands-on projects that mirror real-world scenarios</Text>
            <Text style={styles.listItem}>• Develop career-ready skills that employers actively seek</Text>
            <Text style={styles.listItem}>• Understand and implement industry best practices</Text>
            <Text style={styles.listItem}>• Build a professional portfolio showcasing your capabilities</Text>
          </View>

          <Text style={styles.sectionTitle}>Course Format</Text>
          <Text style={styles.sectionText}>
            Our {course.type === 'long' ? '6-month intensive' : '6-week focused'} program combines structured learning with practical application. The curriculum is designed to maximize your learning potential through a blend of theoretical knowledge and hands-on experience.
          </Text>

          <Text style={styles.subsectionTitle}>Program Structure</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• {course.type === 'long' ? '6 months' : '6 weeks'} of comprehensive training</Text>
            <Text style={styles.listItem}>• {course.type === 'long' ? 'Capstone project' : 'Final assessment'} demonstrating mastery</Text>
            <Text style={styles.listItem}>• Professional certificate upon successful completion</Text>
            <Text style={styles.listItem}>• {course.type === 'long' ? 'Expert mentorship and guidance' : 'Instructor support'}</Text>
            <Text style={styles.listItem}>• Portfolio development for career advancement</Text>
            <Text style={styles.listItem}>• {course.type === 'long' ? 'Peer collaboration and networking' : 'Interactive learning sessions'}</Text>
          </View>

          <Text style={styles.sectionTitle}>About This Course</Text>
          <Text style={styles.sectionText}>
            {course.description} This program is designed for individuals who are serious about advancing their skills and career prospects. Whether you're looking to enter a new field or enhance your existing expertise, this course provides the foundation and advanced knowledge you need to succeed.
          </Text>

          <View style={styles.navigationButtons}>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => router.push('/long' as any)}
            >
              <Text style={styles.navButtonText}>Back to Long Courses</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => router.push('/short' as any)}
            >
              <Text style={styles.navButtonText}>View Short Courses</Text>
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 24,
  },
  backButton: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  heroContainer: {
    width: '100%',
    height: 640,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  heroOverlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
  },
  gradientBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
  },
  gradientTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 160,
  },
  heroContent: {
    padding: 16,
    paddingBottom: 40,
    zIndex: 10,
    width: '100%',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  heroDescription: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
    maxWidth: '90%',
    lineHeight: 22,
  },
  heroDuration: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 12,
  },
  priceAndActions: {
    marginTop: 12,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  buyNowButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buyNowText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  addToCartButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 16,
    marginTop: 24,
  },
  sectionText: {
    fontSize: 16,
    color: '#a5a5a5',
    lineHeight: 24,
    marginBottom: 24,
  },
  subsectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
    marginTop: 16,
  },
  list: {
    marginBottom: 24,
  },
  listItem: {
    fontSize: 16,
    color: '#a5a5a5',
    marginBottom: 8,
    lineHeight: 24,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 48,
    marginBottom: 24,
    flexWrap: 'wrap',
  },
  navButton: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  navButtonText: {
    fontSize: 16,
    color: '#fff',
  },
})

