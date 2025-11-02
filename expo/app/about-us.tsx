import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Stack } from 'expo-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Navbar />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>About Empowering The Nation</Text>
          
          <Text style={styles.paragraph}>
            Empowering The Nation was established in 2022 by Precious Radebe as a response to a critical need in our community. After witnessing how her parents and elderly relatives were never given the opportunity to upskill themselves or pursue formal educational qualifications, Precious created this training initiative to support similarly affected members from her community.
          </Text>

          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.paragraph}>
            We provide comprehensive skills training for domestic workers and gardeners, making them more marketable when seeking employment and enabling them to be paid at higher rates because of these additional skills. Our graduates can also become entrepreneurs and set up their own small businesses utilizing their newly obtained skills.
          </Text>

          <Text style={styles.sectionTitle}>Our Impact</Text>
          <Text style={styles.paragraph}>
            Since our establishment, hundreds of domestic workers and gardeners have been trained through both our six-month Learnerships and six-week Short Skills Training Programmes. These individuals have been empowered with marketable skills that have transformed their career prospects and earning potential.
          </Text>

          <Text style={styles.sectionTitle}>Our Training Approach</Text>
          <Text style={styles.paragraph}>
            We believe in practical, hands-on learning with a zero PowerPoint policy. Our training methodology includes:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Learn-by-doing approach to skill development</Text>
            <Text style={styles.listItem}>• Personal instruction from experienced trainers</Text>
            <Text style={styles.listItem}>• Real-world application of skills learned</Text>
            <Text style={styles.listItem}>• Professional development and career guidance</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Six-Month Learnerships</Text>
            <Text style={styles.cardText}>Duration: 12 weeks</Text>
            <Text style={styles.cardDescription}>
              Comprehensive training programs designed for deep skill development and professional certification.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Short Skills Training</Text>
            <Text style={styles.cardText}>Duration: 6 weeks</Text>
            <Text style={styles.cardDescription}>
              Focused skill-building programs for quick implementation and immediate workplace application.
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Our Location</Text>
          <Text style={styles.paragraph}>
            Based in Johannesburg, South Africa, we serve the local community and surrounding areas. Our training facilities are designed to provide a professional learning environment that reflects the high standards we maintain for our students.
          </Text>

          <View style={styles.finalCard}>
            <Text style={styles.cardTitle}>Get Started Today</Text>
            <Text style={styles.paragraph}>
              Join hundreds of successful graduates who have transformed their careers through our training programs.
            </Text>
            <Text style={styles.finalText}>
              Empowering The Nation - Where Skills Meet Opportunity
            </Text>
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
    maxWidth: 800,
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
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 14,
    color: '#a5a5a5',
    lineHeight: 20,
  },
  finalCard: {
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    borderRadius: 12,
    padding: 24,
    marginTop: 32,
  },
  finalText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginTop: 16,
  },
})

