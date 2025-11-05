// React Native compatible invoice generation using expo-print
import { printAsync } from 'expo-print'
import * as Sharing from 'expo-sharing'

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

export function generateInvoiceHTML(data: InvoiceData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        .header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
        }
        .company-info h1 {
          margin: 0;
          font-size: 24px;
          color: #000;
        }
        .company-info p {
          margin: 4px 0;
          font-size: 12px;
          color: #666;
        }
        .invoice-header {
          text-align: right;
        }
        .invoice-header h2 {
          margin: 0;
          font-size: 20px;
          color: #000;
        }
        .invoice-header p {
          margin: 4px 0;
          font-size: 12px;
          color: #666;
        }
        .customer-info {
          margin: 30px 0;
        }
        .customer-info h3 {
          margin: 0 0 10px 0;
          font-size: 14px;
          color: #000;
        }
        .customer-info p {
          margin: 4px 0;
          font-size: 12px;
          color: #666;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }
        th {
          text-align: left;
          padding: 10px;
          border-bottom: 2px solid #000;
          font-size: 12px;
          font-weight: bold;
        }
        td {
          padding: 10px;
          border-bottom: 1px solid #ddd;
          font-size: 12px;
        }
        .totals {
          margin-top: 20px;
          text-align: right;
        }
        .totals p {
          margin: 8px 0;
          font-size: 14px;
        }
        .total-row {
          border-top: 2px solid #000;
          padding-top: 10px;
          font-weight: bold;
          font-size: 16px;
        }
        .discount {
          color: #008000;
        }
        .footer {
          margin-top: 40px;
          font-size: 10px;
          color: #888;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="company-info">
          <h1>Empowering The Nation</h1>
          <p>Johannesburg, South Africa</p>
          <p>Email: info@empoweringthenation.com</p>
        </div>
        <div class="invoice-header">
          <h2>INVOICE</h2>
          <p>Invoice #: ${data.invoiceNumber}</p>
          <p>Date: ${data.date}</p>
        </div>
      </div>

      <div class="customer-info">
        <h3>Bill To:</h3>
        <p>${data.customerName}</p>
        <p>${data.email}</p>
        <p>${data.phone}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Type</th>
            <th style="text-align: center;">Qty</th>
            <th style="text-align: right;">Price</th>
            <th style="text-align: right;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${data.courses.map(course => {
            const quantity = course.quantity || 1
            const lineTotal = course.price * quantity
            return `
            <tr>
              <td>${course.name}</td>
              <td>${course.type === 'long' ? 'Long Course' : 'Short Course'}</td>
              <td style="text-align: center;">${quantity}</td>
              <td style="text-align: right;">R${course.price.toFixed(2)}</td>
              <td style="text-align: right;">R${lineTotal.toFixed(2)}</td>
            </tr>
          `
          }).join('')}
        </tbody>
      </table>

      <div class="totals">
        <p>Subtotal: R${data.subtotal.toFixed(2)}</p>
        ${data.discount > 0 ? `<p class="discount">Discount (${Math.round(data.discountRate * 100)}%): -R${data.discount.toFixed(2)}</p>` : ''}
        <p>Subtotal after discount: R${data.totalBeforeVAT.toFixed(2)}</p>
        <p>VAT (15%): R${data.vat.toFixed(2)}</p>
        <p class="total-row">Total: R${data.total.toFixed(2)}</p>
      </div>

      <div class="footer">
        <p>Thank you for your business!</p>
        <p>This is a quotation/invoice for your selected courses.</p>
      </div>
    </body>
    </html>
  `
}

export function generateInvoiceNumber(): string {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `INV-${year}${month}${day}-${random}`
}

// For React Native PDF generation using expo-print
export async function generateInvoicePDF(data: InvoiceData) {
  const { Alert } = require('react-native')
  
  try {
    const html = generateInvoiceHTML(data)
    
    // Generate PDF
    const { uri } = await printAsync({
      html,
      base64: false,
      width: 612,
      height: 792,
    })
    
    if (!uri) {
      Alert.alert('Error', 'Failed to generate PDF. Please try again.')
      return
    }
    
    // Check if sharing is available
    const isAvailable = await Sharing.isAvailableAsync()
    
    if (isAvailable) {
      // Share the PDF
      await Sharing.shareAsync(uri, { 
        mimeType: 'application/pdf', 
        dialogTitle: `Invoice ${data.invoiceNumber}`,
        UTI: 'com.adobe.pdf'
      })
    } else {
      Alert.alert('Success', `Invoice ${data.invoiceNumber} generated successfully.`)
    }
  } catch (error) {
    Alert.alert('Error', `Failed to generate invoice: ${error instanceof Error ? error.message : 'Unknown error'}`)
    console.error('Invoice generation error:', error)
  }
}

