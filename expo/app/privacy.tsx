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
          <Text style={styles.date}>Last updated: {new Date().toLocaleDateString()}</Text>
          
          <Text style={styles.paragraph}>
            Empowering The Nation ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services.
          </Text>

          <Text style={styles.sectionTitle}>Information We Collect</Text>
          <Text style={styles.paragraph}>
            We collect information that you provide directly to us, including your name, email address, and any other information you choose to provide when requesting a quota or contacting us.
          </Text>

          <Text style={styles.sectionTitle}>How We Use Your Information</Text>
          <Text style={styles.paragraph}>
            We use the information we collect to:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Process and respond to your quota requests</Text>
            <Text style={styles.listItem}>• Communicate with you about our courses and services</Text>
            <Text style={styles.listItem}>• Improve our services and user experience</Text>
          </View>

          <Text style={styles.sectionTitle}>Data Security</Text>
          <Text style={styles.paragraph}>
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
          </Text>

          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.paragraph}>
            If you have questions about this Privacy Policy, please contact us at info@empoweringthenation.co.za
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
  list: {
    marginBottom: 24,
  },
  listItem: {
    fontSize: 16,
    color: '#a5a5a5',
    marginBottom: 8,
    lineHeight: 24,
  },
})

