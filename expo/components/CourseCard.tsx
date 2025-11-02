import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { addItemToCart } from '../lib/cart'
import { router } from 'expo-router'
import { Course } from '../lib/data'

interface CourseCardProps {
  data: Course
}

export default function CourseCard({ data }: CourseCardProps) {
  const item = {
    id: data.id,
    quantity: 1,
    name: data.name,
    price: data.price,
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/long/${data.id}` as any)}
      activeOpacity={0.9}
    >
      <Image source={{ uri: data.coverImage }} style={styles.imageBackground} contentFit="cover" />
      <View style={styles.overlay}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={styles.gradient}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={(e) => {
            e.stopPropagation()
            addItemToCart(item)
          }}
        >
          <Ionicons name="add" size={20} color="#000" />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {data.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 384,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    position: 'relative',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
  },
  addButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#fff',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  content: {
    padding: 24,
    zIndex: 10,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 20,
  },
})

