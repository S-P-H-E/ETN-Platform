import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Cart from './Cart'

export default function Navbar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/' as any)}>
        <Text style={styles.logo}>ETN</Text>
      </TouchableOpacity>
      
      <View style={styles.rightSection}>
        <Cart />
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => router.push('/long' as any)}
        >
          <Text style={styles.exploreText}>Explore Courses</Text>
          <Ionicons name="arrow-forward" size={16} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  exploreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  exploreText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
})

