export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-10">
        <h1 className="text-4xl font-bold mb-8 text-white">About Empowering The Nation</h1>
        
        <div className="prose prose-lg max-w-none text-[var(--description)]">
          <p className="text-lg mb-6">
            Empowering The Nation was established in 2022 by Precious Radebe as a response to a critical need in our community. After witnessing how her parents and elderly relatives were never given the opportunity to upskill themselves or pursue formal educational qualifications, Precious created this training initiative to support similarly affected members from her community.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Our Mission</h2>
          <p className="mb-6">
            We provide comprehensive skills training for domestic workers and gardeners, making them more marketable when seeking employment and enabling them to be paid at higher rates because of these additional skills. Our graduates can also become entrepreneurs and set up their own small businesses utilizing their newly obtained skills.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Our Impact</h2>
          <p className="mb-6">
            Since our establishment, hundreds of domestic workers and gardeners have been trained through both our six-month Learnerships and six-week Short Skills Training Programmes. These individuals have been empowered with marketable skills that have transformed their career prospects and earning potential.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Our Training Approach</h2>
          <p className="mb-4">
            We believe in practical, hands-on learning with a zero PowerPoint policy. Our training methodology includes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Learn-by-doing approach to skill development</li>
            <li>Personal instruction from experienced trainers</li>
            <li>Real-world application of skills learned</li>
            <li>Professional development and career guidance</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Course Structure</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[var(--foreground)] border border-[var(--border)] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-white">Six-Month Learnerships</h3>
              <p className="mb-2">Duration: 12 weeks</p>
              <p>Comprehensive training programs designed for deep skill development and professional certification.</p>
            </div>
            <div className="bg-[var(--foreground)] border border-[var(--border)] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-white">Short Skills Training</h3>
              <p className="mb-2">Duration: 6 weeks</p>
              <p>Focused skill-building programs for quick implementation and immediate workplace application.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Our Location</h2>
          <p className="mb-6">
            Based in Johannesburg, South Africa, we serve the local community and surrounding areas. Our training facilities are designed to provide a professional learning environment that reflects the high standards we maintain for our students.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Why Choose Us</h2>
          <p className="mb-4">
            Many employers actively seek our training services to upskill their employees, enabling them to offer more skilled services to their households. Our reputation for quality training and practical skill development makes us the preferred choice for both individual learners and employers.
          </p>

          <div className="bg-[var(--foreground)] border border-[var(--border)] p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-3 text-white">Get Started Today</h3>
            <p className="mb-4">
              Join hundreds of successful graduates who have transformed their careers through our training programs.
            </p>
            <p className="font-semibold text-white">
              Empowering The Nation - Where Skills Meet Opportunity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
