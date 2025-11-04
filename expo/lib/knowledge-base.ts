import { getAllCourses } from "./data"

export function getWebsiteKnowledgeBase(): string {
    const courses = getAllCourses()
    const longCourses = courses.filter(c => c.type === 'long')
    const shortCourses = courses.filter(c => c.type === 'short')

    const coursesList = courses.map(c => 
        `- ${c.name} (${c.type === 'long' ? 'Long Course' : 'Short Course'}): ${c.description}. Price: R${c.price}`
    ).join('\n')

    const longCoursesList = longCourses.map(c => 
        `- ${c.name}: ${c.description}. Price: R${c.price}`
    ).join('\n')

    const shortCoursesList = shortCourses.map(c => 
        `- ${c.name}: ${c.description}. Price: R${c.price}`
    ).join('\n')

    return `EMPOWERING THE NATION - COMPREHENSIVE KNOWLEDGE BASE

ABOUT EMPOWERING THE NATION:
- Established in 2022 by Precious Radebe
- Founded to address the critical need for upskilling opportunities in the community
- Based in Johannesburg, South Africa
- Website: empoweringthenation.com

MISSION:
Empowering The Nation provides comprehensive skills training for domestic workers and gardeners, making them more marketable when seeking employment and enabling them to be paid at higher rates because of these additional skills. Graduates can also become entrepreneurs and set up their own small businesses utilizing their newly obtained skills.

IMPACT:
Since establishment, hundreds of domestic workers and gardeners have been trained through both six-month Learnerships and six-week Short Skills Training Programmes. These individuals have been empowered with marketable skills that have transformed their career prospects and earning potential.

TRAINING APPROACH:
- Practical, hands-on learning with a zero PowerPoint policy
- Learn-by-doing approach to skill development
- Personal instruction from experienced trainers
- Real-world application of skills learned
- Professional development and career guidance

PROGRAMS OFFERED:

1. Six-Month Learnerships:
   - Duration: 12 weeks
   - Comprehensive training programs designed for deep skill development and professional certification
   - Long courses available: ${longCourses.length}

2. Short Skills Training Programmes:
   - Duration: 6 weeks
   - Focused skill-building programs for quick implementation and immediate workplace application
   - Short courses available: ${shortCourses.length}

ALL COURSES:
${coursesList}

LONG COURSES (12 weeks, Learnerships):
${longCoursesList}

SHORT COURSES (6 weeks):
${shortCoursesList}

PRICING & DISCOUNTS:
Multi-Course Discount Structure:
- One course – no discount
- Two courses – 5% discount
- Three courses – 10% discount
- More than three courses – 15% discount

All fees are quoted in South African Rand (ZAR). Payment is required in advance of course commencement.

CONTACT INFORMATION:
- Email: info@empoweringthenation.com
- Location: Johannesburg, South Africa
- Business Hours:
  * Monday - Friday: 8:00 AM - 5:00 PM
  * Saturday: 9:00 AM - 1:00 PM
  * Sunday: Closed

SERVICES:
- Six-month Learnerships (12 weeks duration)
- Six-week Short Skills Training Programmes
- Professional development and career guidance
- Entrepreneurship training for business development

WHY CHOOSE EMPOWERING THE NATION:
Many employers actively seek our training services to upskill their employees, enabling them to offer more skilled services to their households. Our reputation for quality training and practical skill development makes us the preferred choice for both individual learners and employers.

ADDITIONAL INFORMATION:
- All course materials are intellectual property of Empowering The Nation
- Students receive professional certification upon successful graduation
- Training facilities are designed to provide a professional learning environment
- The organization focuses on transforming communities through quality skills training`
}

