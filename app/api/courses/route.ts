import { NextRequest, NextResponse } from 'next/server'
import { getCoursesByIds } from '@/lib/data'

export async function POST(request: NextRequest) {
  const { ids } = await request.json()
  
  if (!ids || !Array.isArray(ids)) {
    return NextResponse.json({ error: 'Invalid course IDs' }, { status: 400 })
  }

  const courses = getCoursesByIds(ids).map(course => ({
    id: course.id,
    name: course.name,
    price: course.price,
    coverImage: course.coverImage
  }))

  return NextResponse.json(courses)
}
