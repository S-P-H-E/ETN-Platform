import { NextResponse } from 'next/server'
import { getAllCourses } from '@/lib/data'

export async function GET() {
  const courses = getAllCourses().map(course => ({
    id: course.id,
    name: course.name,
    description: course.description,
    price: course.price,
    coverImage: course.coverImage,
    type: course.type
  }))

  return NextResponse.json(courses)
}

