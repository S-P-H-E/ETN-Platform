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
          
          <Text style={styles.paragraph}>
            Welcome to Empowering The Nation. These Terms of Service govern your use of our website and training services. By accessing our services, you agree to be bound by these terms.
          </Text>

          <Text style={styles.sectionTitle}>Our Services</Text>
          <Text style={styles.paragraph}>
            Empowering The Nation provides skills training for domestic workers and gardeners through:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Six-month Learnerships (12 weeks duration)</Text>
            <Text style={styles.listItem}>• Six-week Short Skills Training Programmes</Text>
            <Text style={styles.listItem}>• Professional development courses</Text>
            <Text style={styles.listItem}>• Entrepreneurship training</Text>
          </View>

          <Text style={styles.sectionTitle}>Course Registration and Payment</Text>
          <Text style={styles.paragraph}>
            When you register for our courses:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Payment is required in advance of course commencement</Text>
            <Text style={styles.listItem}>• All fees are quoted in South African Rand (ZAR)</Text>
            <Text style={styles.listItem}>• Discounts apply based on the number of courses selected</Text>
            <Text style={styles.listItem}>• Refunds are subject to our cancellation policy</Text>
          </View>

          <Text style={styles.sectionTitle}>Discount Policy</Text>
          <View style={styles.card}>
            <View style={styles.list}>
              <Text style={styles.listItem}>• One course – no discount</Text>
              <Text style={styles.listItem}>• Two courses – 5% discount</Text>
              <Text style={styles.listItem}>• Three courses – 10% discount</Text>
              <Text style={styles.listItem}>• More than three courses – 15% discount</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Student Responsibilities</Text>
          <Text style={styles.paragraph}>
            As a student, you agree to:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Attend all scheduled classes and complete assignments</Text>
            <Text style={styles.listItem}>• Respect instructors and fellow students</Text>
            <Text style={styles.listItem}>• Maintain professional conduct during training</Text>
            <Text style={styles.listItem}>• Follow all safety guidelines and procedures</Text>
          </View>

          <Text style={styles.sectionTitle}>Intellectual Property</Text>
          <Text style={styles.paragraph}>
            All course materials, including handouts, presentations, and training content, are the intellectual property of Empowering The Nation. Students may not distribute or reproduce these materials without written permission.
          </Text>

          <Text style={styles.sectionTitle}>Limitation of Liability</Text>
          <Text style={styles.paragraph}>
            Empowering The Nation provides training services to the best of our ability. While we strive for excellence, we cannot guarantee specific employment outcomes or salary increases for our graduates.
          </Text>

          <Text style={styles.sectionTitle}>Contact Information</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Empowering The Nation</Text>
            <Text style={styles.contactItem}>Johannesburg, South Africa</Text>
            <Text style={styles.contactItem}>Email: info@empoweringthenation.com</Text>
          </View>

          <Text style={styles.date}>Last updated: November 2025</Text>
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
  list: {
    marginBottom: 24,
  },
  listItem: {
    fontSize: 16,
    color: '#a5a5a5',
    marginBottom: 8,
    lineHeight: 24,
  },
  card: {
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  contactItem: {
    fontSize: 16,
    color: '#a5a5a5',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: '#a5a5a5',
    marginTop: 32,
  },
})

