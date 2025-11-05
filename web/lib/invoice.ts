import { jsPDF } from 'jspdf'

export interface InvoiceData {
  customerName: string
  email: string
  phone: string
  courses: Array<{
    name: string
    price: number
    quantity: number
    type: 'long' | 'short'
  }>
  subtotal: number
  discount: number
  discountRate: number
  totalBeforeVAT: number
  vat: number
  total: number
  invoiceNumber: string
  date: string
}

export function generateInvoicePDF(data: InvoiceData) {
  const doc = new jsPDF()
  
  // Company info
  doc.setFontSize(20)
  doc.setFont('helvetica', 'bold')
  doc.text('Empowering The Nation', 20, 20)
  
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.text('Johannesburg, South Africa', 20, 28)
  doc.text('Email: info@empoweringthenation.com', 20, 34)
  
  // Invoice header
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.text('INVOICE', 135, 20)
  
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.text(`Invoice #: ${data.invoiceNumber}`, 135, 28)
  doc.text(`Date: ${data.date}`, 135, 34)
  
  // Customer info
  let yPos = 50
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('Bill To:', 20, yPos)
  
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  yPos += 8
  doc.text(data.customerName, 20, yPos)
  yPos += 6
  doc.text(data.email, 20, yPos)
  yPos += 6
  doc.text(data.phone, 20, yPos)
  
  // Items table
  yPos += 15
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text('Item', 20, yPos)
  doc.text('Type', 85, yPos)
  doc.text('Qty', 125, yPos)
  doc.text('Price', 145, yPos)
  doc.text('Total', 170, yPos)
  
  // Draw line
  yPos += 3
  doc.line(20, yPos, 190, yPos)
  
  // Course items
  yPos += 8
  doc.setFont('helvetica', 'normal')
  data.courses.forEach((course) => {
    const quantity = course.quantity || 1
    const lineTotal = course.price * quantity
    // Truncate course name if too long
    const courseName = course.name.length > 30 ? course.name.substring(0, 27) + '...' : course.name
    doc.text(courseName, 20, yPos)
    doc.text(course.type === 'long' ? 'Long' : 'Short', 85, yPos)
    doc.text(quantity.toString(), 125, yPos)
    doc.text(`R${course.price.toFixed(2)}`, 145, yPos)
    doc.text(`R${lineTotal.toFixed(2)}`, 170, yPos)
    yPos += 7
  })
  
  // Totals
  yPos += 5
  doc.line(120, yPos, 190, yPos)
  yPos += 8
  
  doc.setFont('helvetica', 'normal')
  doc.text('Subtotal:', 120, yPos)
  doc.text(`R${data.subtotal.toFixed(2)}`, 170, yPos)
  
  if (data.discount > 0) {
    yPos += 7
    doc.setFont('helvetica', 'normal')
    doc.text(`Discount (${Math.round(data.discountRate * 100)}%):`, 120, yPos)
    doc.setTextColor(0, 128, 0)
    doc.text(`-R${data.discount.toFixed(2)}`, 170, yPos)
    doc.setTextColor(0, 0, 0)
  }
  
  yPos += 7
  doc.text('Subtotal after discount:', 120, yPos)
  doc.text(`R${data.totalBeforeVAT.toFixed(2)}`, 170, yPos)
  
  yPos += 7
  doc.text('VAT (15%):', 120, yPos)
  doc.text(`R${data.vat.toFixed(2)}`, 170, yPos)
  
  yPos += 7
  doc.line(120, yPos, 190, yPos)
  yPos += 8
  
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('Total:', 120, yPos)
  doc.text(`R${data.total.toFixed(2)}`, 170, yPos)
  
  // Footer
  yPos += 20
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(128, 128, 128)
  doc.text('Thank you for your business!', 20, yPos)
  doc.text('This is a quotation/invoice for your selected courses.', 20, yPos + 6)
  
  // Save PDF
  doc.save(`invoice-${data.invoiceNumber}.pdf`)
}

export function generateInvoiceNumber(): string {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `INV-${year}${month}${day}-${random}`
}

