import { readFileSync } from 'fs'
import { join } from 'path'

export interface Course {
  id: string
  createdAt: string
  name: string
  description: string
  coverImage: string
  price: number
  type: 'long' | 'short'
}

let coursesCache: Course[] | null = null

function getCourses(): Course[] {
  if (coursesCache) {
    return coursesCache
  }
  
  const filePath = join(process.cwd(), 'db.json')
  const fileContents = readFileSync(filePath, 'utf8')
  const data = JSON.parse(fileContents)
  coursesCache = data.courses
  return coursesCache
}

export function getAllCourses(): Course[] {
  return getCourses()
}

export function getRandomCourse(): Course | null {
  const courses = getCourses()
  if (courses.length === 0) return null
  
  const totalCourses = courses.length
  // Pick random number between 1 and totalCourses (inclusive)
  const randomNumber = Math.floor(Math.random() * totalCourses) + 1
  // Convert to 0-based index
  const randomIndex = randomNumber - 1
  return courses[randomIndex]
}

export function getCoursesByType(type: 'long' | 'short'): Course[] {
  const courses = getCourses()
  return courses.filter(course => course.type === type)
}

export function getCourseById(id: string): Course | null {
  const courses = getCourses()
  return courses.find(course => course.id === id) || null
}

export function getCoursesByIds(ids: string[]): Course[] {
  const courses = getCourses()
  return courses.filter(course => ids.includes(course.id))
}

