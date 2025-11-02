import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Stack } from 'expo-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Navbar />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Terms of Service</Text>
          <Text style={styles.date}>Last updated: {new Date().toLocaleDateString()}</Text>
          
          <Text style={styles.paragraph}>
            Please read these Terms of Service carefully before using the services offered by Empowering The Nation.
          </Text>

          <Text style={styles.sectionTitle}>Acceptance of Terms</Text>
          <Text style={styles.paragraph}>
            By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </Text>

          <Text style={styles.sectionTitle}>Course Enrollment</Text>
          <Text style={styles.paragraph}>
            When you request a quota for our courses, you are expressing interest in enrollment. Final enrollment is subject to availability and our approval.
          </Text>

          <Text style={styles.sectionTitle}>Pricing and Payments</Text>
          <Text style={styles.paragraph}>
            All course prices are in South African Rand (R). Pricing includes applicable discounts and VAT as displayed. Payment terms will be communicated upon acceptance of your quota request.
          </Text>

          <Text style={styles.sectionTitle}>Course Completion</Text>
          <Text style={styles.paragraph}>
            Upon successful completion of a course, students will receive a certificate of completion. Course requirements must be met to qualify for certification.
          </Text>

          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.paragraph}>
            If you have questions about these Terms of Service, please contact us at info@empoweringthenation.co.za
          </Text>
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
    paddingTop: 120,
    paddingHorizontal: 24,
    paddingBottom: 40,
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#a5a5a5',
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginTop: 32,
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    color: '#a5a5a5',
    lineHeight: 24,
    marginBottom: 24,
  },
})

