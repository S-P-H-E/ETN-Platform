export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-10">
        <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none text-[var(--description)]">
          <p className="text-lg mb-6">
            Welcome to Empowering The Nation. These Terms of Service govern your use of our website and training services. By accessing our services, you agree to be bound by these terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Our Services</h2>
          <p className="mb-6">
            Empowering The Nation provides skills training for domestic workers and gardeners through:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Six-month Learnerships (12 weeks duration)</li>
            <li>Six-week Short Skills Training Programmes</li>
            <li>Professional development courses</li>
            <li>Entrepreneurship training</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Course Registration and Payment</h2>
          <p className="mb-4">
            When you register for our courses:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Payment is required in advance of course commencement</li>
            <li>All fees are quoted in South African Rand (ZAR)</li>
            <li>Discounts apply based on the number of courses selected</li>
            <li>Refunds are subject to our cancellation policy</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Discount Policy</h2>
          <div className="bg-[var(--foreground)] border border-[var(--border)] p-6 rounded-lg mb-6">
            <ul className="space-y-2">
              <li>• One course – no discount</li>
              <li>• Two courses – 5% discount</li>
              <li>• Three courses – 10% discount</li>
              <li>• More than three courses – 15% discount</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Student Responsibilities</h2>
          <p className="mb-4">
            As a student, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Attend all scheduled classes and complete assignments</li>
            <li>Respect instructors and fellow students</li>
            <li>Maintain professional conduct during training</li>
            <li>Follow all safety guidelines and procedures</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Intellectual Property</h2>
          <p className="mb-6">
            All course materials, including handouts, presentations, and training content, are the intellectual property of Empowering The Nation. Students may not distribute or reproduce these materials without written permission.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Limitation of Liability</h2>
          <p className="mb-6">
            Empowering The Nation provides training services to the best of our ability. While we strive for excellence, we cannot guarantee specific employment outcomes or salary increases for our graduates.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Contact Information</h2>
          <div className="bg-[var(--foreground)] border border-[var(--border)] p-6 rounded-lg">
            <p className="font-semibold text-white">Empowering The Nation</p>
            <p>Johannesburg, South Africa</p>
            <p>Email: info@empoweringthenation.com</p>
          </div>

          <p className="text-sm mt-8 text-[var(--description)]">
            Last updated: November 2025
          </p>
        </div>
      </div>
    </div>
  );
}
