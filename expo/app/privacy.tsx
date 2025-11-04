import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Stack } from 'expo-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Navbar />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Privacy Policy</Text>
          
          <Text style={styles.paragraph}>
            At Empowering The Nation, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
          </Text>

          <Text style={styles.sectionTitle}>Information We Collect</Text>
          <Text style={styles.paragraph}>
            We collect information that you provide directly to us, such as when you:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Register for courses or training programs</Text>
            <Text style={styles.listItem}>• Contact us for information or support</Text>
            <Text style={styles.listItem}>• Make payments for our services</Text>
            <Text style={styles.listItem}>• Subscribe to our newsletter or updates</Text>
          </View>

          <Text style={styles.sectionTitle}>How We Use Your Information</Text>
          <Text style={styles.paragraph}>
            We use the information we collect to:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Provide and improve our training services</Text>
            <Text style={styles.listItem}>• Process payments and course registrations</Text>
            <Text style={styles.listItem}>• Communicate with you about your courses and our services</Text>
            <Text style={styles.listItem}>• Send you important updates and announcements</Text>
            <Text style={styles.listItem}>• Respond to your inquiries and provide customer support</Text>
          </View>

          <Text style={styles.sectionTitle}>Data Security</Text>
          <Text style={styles.paragraph}>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and is only accessible to authorized personnel who need it to provide our services.
          </Text>

          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.paragraph}>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </Text>
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

