import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'expo-image'
import { addItemToCart } from '../lib/cart'
import { router } from 'expo-router'
import { Course } from '../lib/data'

interface HeroCardProps {
  data: Course
  totalCourses?: number
  pickedIndex?: number
}

export default function HeroCard({ data }: HeroCardProps) {
  const item = {
    id: data.id,
    quantity: 1,
    name: data.name,
    price: data.price,
  }

  const handleBuyNow = () => {
    router.push(`/checkout?items=${data.id}` as any)
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: data.coverImage }} style={styles.imageBackground} contentFit="cover" />
      <View style={styles.overlay}>
        <LinearGradient
          colors={['rgba(0,0,0,0.9)', 'transparent']}
          style={styles.gradientTop}
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.95)']}
          style={styles.gradientBottom}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.description}>{data.description}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
              <Text style={styles.buyNowText}>Order Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => addItemToCart(item)}
            >
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
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
  gradientBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
  },
  gradientTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 160,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
    zIndex: 10,
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    maxWidth: '90%',
    lineHeight: 22,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  buyNowButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buyNowText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  addToCartButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
})

