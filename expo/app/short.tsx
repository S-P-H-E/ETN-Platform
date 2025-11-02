import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseCard from '../components/CourseCard'
import { getCoursesByType } from '../lib/data'

export default function ShortCourses() {
  const shortCourses = getCoursesByType('short')

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.headerText}>
              <Text style={styles.title}>Short Courses</Text>
              <Text style={styles.subtitle}>Quick, practical courses to upskill fast.</Text>
            </View>
            <View style={styles.headerButtons}>
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => router.push('/' as any)}
              >
                <Text style={styles.headerButtonText}>Back to Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => router.push('/long' as any)}
              >
                <Text style={styles.headerButtonText}>Long Courses</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.coursesGrid}>
            {shortCourses.map((course) => (
              <CourseCard key={course.id} data={course} />
            ))}
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
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 32,
  },
  headerText: {
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#a5a5a5',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  headerButton: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  headerButtonText: {
    fontSize: 14,
    color: '#fff',
  },
  coursesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
})

