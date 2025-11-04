export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-10">
        <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-[var(--description)]">
          <p className="text-lg mb-6">
            At Empowering The Nation, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us, such as when you:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Register for courses or training programs</li>
            <li>Contact us for information or support</li>
            <li>Make payments for our services</li>
            <li>Subscribe to our newsletter or updates</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide and improve our training services</li>
            <li>Process payments and course registrations</li>
            <li>Communicate with you about your courses and our services</li>
            <li>Send you important updates and announcements</li>
            <li>Respond to your inquiries and provide customer support</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Data Security</h2>
          <p className="mb-6">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and is only accessible to authorized personnel who need it to provide our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
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
