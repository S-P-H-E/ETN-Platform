import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native'
import { Stack } from 'expo-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactUs() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Navbar />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Contact Empowering The Nation</Text>
          
          <Text style={styles.paragraph}>
            Get in touch with us to learn more about our training programs, discuss your specific needs, or request a quote for our services. We're here to help you and your employees develop the skills needed for success.
          </Text>

          <Text style={styles.sectionTitle}>Our Services</Text>
          <Text style={styles.paragraph}>
            We provide comprehensive skills training for domestic workers and gardeners through:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Six-month Learnerships (12 weeks duration)</Text>
            <Text style={styles.listItem}>• Six-week Short Skills Training Programmes</Text>
            <Text style={styles.listItem}>• Professional development and career guidance</Text>
            <Text style={styles.listItem}>• Entrepreneurship training for business development</Text>
          </View>

          <Text style={styles.sectionTitle}>Course Pricing and Discounts</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Multi-Course Discount Structure:</Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>• One course – no discount</Text>
              <Text style={styles.listItem}>• Two courses – 5% discount</Text>
              <Text style={styles.listItem}>• Three courses – 10% discount</Text>
              <Text style={styles.listItem}>• More than three courses – 15% discount</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Contact Information</Text>
          <View style={styles.card}>
            <View style={styles.contactGrid}>
              <View>
                <Text style={styles.cardTitle}>Empowering The Nation</Text>
                <Text style={styles.contactItem}>Johannesburg, South Africa</Text>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:info@empoweringthenation.com')}>
                  <Text style={styles.contactLink}>Email: info@empoweringthenation.com</Text>
                </TouchableOpacity>
                <Text style={styles.contactItem}>Phone: +27 (0) 81 255 4567</Text>
              </View>
              <View>
                <Text style={styles.cardTitle}>Business Hours</Text>
                <Text style={styles.contactItem}>Monday - Friday: 8:00 AM - 5:00 PM</Text>
                <Text style={styles.contactItem}>Saturday: 9:00 AM - 1:00 PM</Text>
                <Text style={styles.contactItem}>Sunday: Closed</Text>
              </View>
            </View>
          </View>

          <View style={styles.ctaCard}>
            <Text style={styles.cardTitle}>Ready to Get Started?</Text>
            <Text style={styles.paragraph}>
              Contact us today to discuss your training needs, request a quote, or learn more about how our programs can benefit you or your employees. We're committed to empowering individuals and transforming communities through quality skills training.
            </Text>
            <View style={styles.ctaButtons}>
              <TouchableOpacity
                style={styles.ctaButton}
                onPress={() => Linking.openURL('mailto:info@empoweringthenation.com')}
              >
                <Text style={styles.ctaButtonText}>Send Email</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ctaButton}
                onPress={() => Linking.openURL('tel:+27812554567')}
              >
                <Text style={styles.ctaButtonText}>Call Now</Text>
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
    paddingTop: 120,
    paddingHorizontal: 24,
    paddingBottom: 40,
    maxWidth: 960,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
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
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 16,
  },
  contactItem: {
    fontSize: 16,
    color: '#a5a5a5',
    marginBottom: 8,
  },
  contactLink: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
    textDecorationLine: 'underline',
  },
  ctaCard: {
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    borderRadius: 12,
    padding: 32,
    marginTop: 32,
  },
  ctaButtons: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 24,
    flexWrap: 'wrap',
  },
  ctaButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  contactGrid: {
    gap: 24,
  },
})

