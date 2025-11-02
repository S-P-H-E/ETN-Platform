import dbData from '../db.json'

export interface Course {
  id: string
  createdAt: string
  name: string
  description: string
  coverImage: string
  price: number
  type: 'long' | 'short'
}

const courses: Course[] = (dbData as { courses: Course[] }).courses

export function getAllCourses(): Course[] {
  return courses
}

export function getRandomCourse(): Course | null {
  if (courses.length === 0) return null
  
  const totalCourses = courses.length
  // Pick random number between 1 and totalCourses (inclusive)
  const randomNumber = Math.floor(Math.random() * totalCourses) + 1
  // Convert to 0-based index
  const randomIndex = randomNumber - 1
  return courses[randomIndex]
}

export function getCoursesByType(type: 'long' | 'short'): Course[] {
  return courses.filter(course => course.type === type)
}

export function getCourseById(id: string): Course | null {
  return courses.find(course => course.id === id) || null
}

export function getCoursesByIds(ids: string[]): Course[] {
  return courses.filter(course => ids.includes(course.id))
}

