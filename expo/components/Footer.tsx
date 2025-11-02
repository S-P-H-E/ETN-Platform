import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.logoSection}>
          <Text style={styles.logoText}>ETN</Text>
          <Text style={styles.logoSubtext}>Empowering The Nation</Text>
        </View>
        <Text style={styles.description}>
          Inspiring growth, empowering lives.
        </Text>
        <Text style={styles.description}>
          Empowering domestic workers and gardeners through skills training, making them more marketable and enabling higher wages. We believe in practical, hands-on learning with zero PowerPoint policy.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>
        <TouchableOpacity onPress={() => router.push('/privacy' as any)}>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/terms' as any)}>
          <Text style={styles.link}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/contact-us' as any)}>
          <Text style={styles.link}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/about-us' as any)}>
          <Text style={styles.link}>About Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    minHeight: 350,
    gap: 24,
    flexWrap: 'wrap',
  },
  section: {
    flex: 1,
    minWidth: 200,
    backgroundColor: '#000',
    padding: 24,
    borderRadius: 16,
  },
  logoSection: {
    marginBottom: 12,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  logoSubtext: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  description: {
    fontSize: 12,
    color: '#a5a5a5',
    marginBottom: 12,
    lineHeight: 18,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 16,
  },
  link: {
    fontSize: 14,
    color: '#a5a5a5',
    marginBottom: 12,
  },
})

