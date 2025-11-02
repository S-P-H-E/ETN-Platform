import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroCard from '../components/HeroCard'
import CourseCard from '../components/CourseCard'
import { getRandomCourse, getCoursesByType, getAllCourses } from '../lib/data'
import { Course } from '../lib/data'

const { width } = Dimensions.get('window')

export default function Home() {
  const allCourses = getAllCourses()
  const featuredCourse = getRandomCourse()
  const pickedIndex = featuredCourse ? allCourses.findIndex(c => c.id === featuredCourse.id) : -1

  const shortCourses = getCoursesByType('short').slice(0, 3)
  const longCourses = getCoursesByType('long').slice(0, 3)

  // Removed debug console.logs for production

  const Stats = () => (
    <View style={styles.statsContainer}>
      <View style={styles.statItem}>
        <Ionicons name="flower" size={20} color="#fff" style={{ marginBottom: 8 }} />
        <Text style={styles.statNumber}>74%</Text>
        <Text style={styles.statDescription}>Landed New Jobs</Text>
      </View>
      <View style={styles.statItem}>
        <Ionicons name="briefcase" size={20} color="#fff" style={{ marginBottom: 8 }} />
        <Text style={styles.statNumber}>1.2K+</Text>
        <Text style={styles.statDescription}>Started Freelancing</Text>
      </View>
      <View style={styles.statItem}>
        <Ionicons name="people" size={20} color="#fff" style={{ marginBottom: 8 }} />
        <Text style={styles.statNumber}>84%</Text>
        <Text style={styles.statDescription}>Expanded Networks</Text>
      </View>
    </View>
  )

  const Summary = () => (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryTitle}>About Empowering The Nation</Text>
      <Text style={styles.summaryText}>
        We create transformative courses for aspiring gardeners, entrepreneurs, and professionals looking to grow their skills and careers.
      </Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {featuredCourse && (
          <View style={styles.heroContainer}>
            <HeroCard data={featuredCourse} totalCourses={allCourses.length} pickedIndex={pickedIndex} />
          </View>
        )}

        <Stats />

        <Summary />

        {shortCourses.length > 0 && (
          <View style={styles.coursesSection}>
            <View style={styles.coursesHeader}>
              <Text style={styles.sectionTitle}>Short Courses</Text>
              <Text style={styles.sectionSubtitle}>Quick learning opportunities to boost your skills</Text>
            </View>
            <View style={styles.coursesGrid}>
              {shortCourses.map((course) => (
                <CourseCard key={course.id} data={course} />
              ))}
            </View>
            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={() => router.push('/short' as any)}
            >
              <Text style={styles.viewAllText}>View All Short Courses</Text>
              <Ionicons name="arrow-forward" size={16} color="#000" />
            </TouchableOpacity>
          </View>
        )}

        {longCourses.length > 0 && (
          <View style={[styles.coursesSection, styles.coursesSectionAlt]}>
            <View style={styles.coursesHeader}>
              <Text style={styles.sectionTitle}>Long Courses</Text>
              <Text style={styles.sectionSubtitle}>Comprehensive programs for deep learning and career advancement</Text>
            </View>
            <View style={styles.coursesGrid}>
              {longCourses.map((course) => (
                <CourseCard key={course.id} data={course} />
              ))}
            </View>
            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={() => router.push('/long' as any)}
            >
              <Text style={styles.viewAllText}>View All Long Courses</Text>
              <Ionicons name="arrow-forward" size={16} color="#000" />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.certificateSection}>
          <Text style={styles.certificateTitle}>
            You'll get a certificate about successful graduation
          </Text>
          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => router.push('/long' as any)}
          >
            <Text style={styles.exploreButtonText}>Explore Courses</Text>
            <Ionicons name="arrow-forward" size={16} color="#fff" />
          </TouchableOpacity>
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
  heroContainer: {
    width: '100%',
    height: Dimensions.get('window').height / 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 24,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  statDescription: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
  summaryContainer: {
    backgroundColor: '#000',
    padding: 32,
    marginVertical: 40,
    marginHorizontal: 16,
    borderRadius: 32,
    alignItems: 'center',
  },
  summaryTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  summaryText: {
    fontSize: 14,
    color: '#a5a5a5',
    textAlign: 'center',
    maxWidth: 500,
    lineHeight: 20,
  },
  coursesSection: {
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  coursesSectionAlt: {
    backgroundColor: '#000',
  },
  coursesHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#a5a5a5',
  },
  coursesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#000',
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 32,
  },
  viewAllText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  certificateSection: {
    backgroundColor: '#000',
    padding: 32,
    marginHorizontal: 16,
    marginVertical: 40,
    borderRadius: 32,
    alignItems: 'center',
    gap: 24,
  },
  certificateTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    maxWidth: 800,
    lineHeight: 40,
  },
  exploreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  exploreButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
})
