import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { router, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { generateInvoicePDF, InvoiceData } from '../lib/invoice'

export default function Success() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null)
  const [hasGenerated, setHasGenerated] = useState(false)

  useEffect(() => {
    const loadInvoiceData = async () => {
      const stored = await AsyncStorage.getItem('invoiceData')
      if (stored) {
        const data = JSON.parse(stored) as InvoiceData
        setInvoiceData(data)
      }
    }
    loadInvoiceData()
  }, [])

  const handleGeneratePDF = async () => {
    if (invoiceData) {
      await generateInvoicePDF(invoiceData)
      setHasGenerated(true)
    }
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Navbar />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.successCard}>
            <View style={styles.iconContainer}>
              <Ionicons name="checkmark-circle" size={64} color="#22c55e" />
            </View>
            <Text style={styles.title}>Quota Received!</Text>
            <Text style={styles.description}>
              We've received your quota request and will get back to you shortly. Our team will review your request and contact you soon.
            </Text>
            {invoiceData && (
              <View style={styles.invoiceInfo}>
                <Text style={styles.invoiceLabel}>Invoice Number: <Text style={styles.invoiceValue}>{invoiceData.invoiceNumber}</Text></Text>
                <Text style={styles.invoiceLabel}>Total: <Text style={styles.invoiceValue}>R{invoiceData.total.toFixed(2)}</Text></Text>
                <Text style={styles.invoiceLabel}>Date: <Text style={styles.invoiceValue}>{invoiceData.date}</Text></Text>
              </View>
            )}
            <View style={styles.actions}>
              {invoiceData && (
                <TouchableOpacity
                  style={styles.pdfButton}
                  onPress={handleGeneratePDF}
                >
                  <Text style={styles.pdfButtonText}>
                    {hasGenerated ? "Download Invoice Again" : "Download Invoice PDF"}
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => router.push('/' as any)}
              >
                <Text style={styles.primaryButtonText}>Explore More Courses</Text>
              </TouchableOpacity>
            </View>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    paddingTop: 120,
    minHeight: 600,
  },
  successCard: {
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    borderRadius: 12,
    padding: 32,
    maxWidth: 600,
    width: '100%',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#a5a5a5',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  actions: {
    width: '100%',
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  invoiceInfo: {
    backgroundColor: '#0a0a0a',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    marginBottom: 16,
    width: '100%',
  },
  invoiceLabel: {
    fontSize: 14,
    color: '#a5a5a5',
    marginBottom: 8,
  },
  invoiceValue: {
    color: '#fff',
    fontWeight: '600',
  },
  pdfButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 12,
  },
  pdfButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
})

