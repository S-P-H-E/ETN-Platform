"use client"

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-10">
        <h1 className="text-4xl font-bold mb-8 text-white">Contact Empowering The Nation</h1>
        
        <div className="prose prose-lg max-w-none text-[var(--description)] mb-12">
          <p className="text-lg mb-6">
            Get in touch with us to learn more about our training programs, discuss your specific needs, or request a quote for our services. We're here to help you and your employees develop the skills needed for success.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Our Services</h2>
          <p className="mb-4">
            We provide comprehensive skills training for domestic workers and gardeners through:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Six-month Learnerships (12 weeks duration)</li>
            <li>Six-week Short Skills Training Programmes</li>
            <li>Professional development and career guidance</li>
            <li>Entrepreneurship training for business development</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Course Pricing and Discounts</h2>
          <div className="bg-[var(--foreground)] border border-[var(--border)] p-6 rounded-lg mb-6">
            <p className="mb-4 font-semibold text-white">Multi-Course Discount Structure:</p>
            <ul className="space-y-2">
              <li>• One course – no discount</li>
              <li>• Two courses – 5% discount</li>
              <li>• Three courses – 10% discount</li>
              <li>• More than three courses – 15% discount</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Contact Information</h2>
          <div className="bg-[var(--foreground)] border border-[var(--border)] p-6 rounded-lg mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Empowering The Nation</h3>
                <p className="mb-2">Johannesburg, South Africa</p>
                <p className="mb-2">Email: info@empoweringthenation.co.za</p>
                <p>Phone: +27 (0) 11 XXX XXXX</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Business Hours</h3>
                <p className="mb-2">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="mb-2">Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Locations */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[var(--foreground)] border border-[var(--border)] rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">Main Campus</h3>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe 
                  className="gmap_iframe" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Johannesburg&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                />
                <a href="https://embed-googlemap.com">google map embed html</a>
              </div>
              <style jsx>{`
                .mapouter{position:relative;text-align:right;width:100%;height:300px;}
                .gmap_canvas {overflow:hidden;background:none!important;width:100%;height:300px;}
                .gmap_iframe {width:100%!important;height:300px!important;}
              `}</style>
            </div>
          </div>
          
          <div className="bg-[var(--foreground)] border border-[var(--border)] rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">Training Center</h3>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe 
                  className="gmap_iframe" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Johannesburg&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                />
                <a href="https://embed-googlemap.com">google map embed html</a>
              </div>
              <style jsx>{`
                .mapouter{position:relative;text-align:right;width:100%;height:300px;}
                .gmap_canvas {overflow:hidden;background:none!important;width:100%;height:300px;}
                .gmap_iframe {width:100%!important;height:300px!important;}
              `}</style>
            </div>
          </div>
          
          <div className="bg-[var(--foreground)] border border-[var(--border)] rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">Satellite Location</h3>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe 
                  className="gmap_iframe" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Johannesburg&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                />
                <a href="https://embed-googlemap.com">google map embed html</a>
              </div>
              <style jsx>{`
                .mapouter{position:relative;text-align:right;width:100%;height:300px;}
                .gmap_canvas {overflow:hidden;background:none!important;width:100%;height:300px;}
                .gmap_iframe {width:100%!important;height:300px!important;}
              `}</style>
            </div>
          </div>
        </div>

        <div className="bg-[var(--foreground)] border border-[var(--border)] p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-white">Ready to Get Started?</h2>
          <p className="mb-6 text-[var(--description)]">
            Contact us today to discuss your training needs, request a quote, or learn more about how our programs can benefit you or your employees. We're committed to empowering individuals and transforming communities through quality skills training.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:info@empoweringthenation.co.za" className="bg-white text-black px-6 py-3 rounded-lg hover:scale-105 transition-transform">
              Send Email
            </a>
            <a href="tel:+2711XXXXXXXX" className="bg-white text-black px-6 py-3 rounded-lg hover:scale-105 transition-transform">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
