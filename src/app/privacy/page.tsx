import Header from "@/components/Header";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-terminal-black">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-white/70">
                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Overview</h2>
                  <p className="mb-4">
                    We collect only the information necessary to provide our services. We do not sell your data to third parties, 
                    and we do not send unsolicited marketing communications. This policy explains how we collect, use, and protect your personal information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">What We Collect (And Why)</h2>
                  <div className="space-y-4">
                    <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">💬 Contact Information</h3>
                      <p>When you email us or use our contact form, we collect your name, email address, and any information you provide. 
                      We use this information to respond to your inquiries and provide the services you request.</p>
                    </div>
                    
                    <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">🍪 Cookies</h3>
                      <p>We use cookies to remember your preferences and ensure the website functions properly. 
                      These help us remember if you've visited before and track your site usage patterns to improve user experience.</p>
                    </div>
                    
                    <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">📊 Website Analytics</h3>
                      <p>We use Google Analytics to monitor website traffic and user behavior. 
                      This data helps us understand how visitors interact with our site and allows us to make improvements 
                      to better serve our users.</p>
                    </div>
                    
                    <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">💻 Technical Data</h3>
                      <p>Our servers automatically collect IP addresses, browser types, and access times. 
                      This technical information is necessary to maintain website security and ensure optimal performance.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">How We Use Your Data</h2>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>To respond to your inquiries and communications</li>
                    <li>To provide the services you have requested</li>
                    <li>To improve our website and user experience</li>
                    <li>To send you important updates about your project</li>
                    <li>To comply with legal and regulatory requirements</li>
                    <li>To analyze website usage and performance</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Who We Share It With</h2>
                  <p className="mb-4">
                    We share your personal information only with the following parties:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Google Analytics:</strong> Anonymous usage data to help us understand website traffic and user behavior</li>
                    <li><strong>Our hosting provider:</strong> Secure storage of your data as part of our website infrastructure</li>
                    <li><strong>Legal authorities:</strong> Only when required by law or legal process</li>
                    <li><strong>Service providers:</strong> Third-party contractors who assist in delivering our services, bound by confidentiality agreements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Your Rights (Yes, You Have Them!)</h2>
                  <div className="space-y-3">
                    <p><strong>Access:</strong> You can ask to see what data we have about you</p>
                    <p><strong>Correction:</strong> If we've got something wrong, tell us and we'll fix it</p>
                    <p><strong>Deletion:</strong> Want us to forget you exist? We can do that (though we'll be sad)</p>
                    <p><strong>Portability:</strong> Want to take your data elsewhere? We'll help you pack</p>
                    <p><strong>Objection:</strong> Don't like how we're using your data? Let us know</p>
                  </div>
                  <p className="mt-4 text-sgp-green">
                    Just email us at hello@sgpdigitalsolutions.co.uk and we'll sort it out faster than you can say "GDPR compliance."
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Data Security</h2>
                  <p className="mb-4">
                    We take data security seriously. Your personal information is encrypted in transit and at rest. 
                    Our servers are secure and protected by industry-standard security measures including firewalls, 
                    access controls, and regular security monitoring.
                  </p>
                  <p className="mb-4">
                    We regularly review and update our security practices to ensure your data remains protected 
                    against unauthorized access, disclosure, alteration, and destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">International Transfers</h2>
                  <p>
                    We are based in the UK and strive to keep your data within the UK where possible. 
                    When we use third-party services that may be hosted outside the UK, we ensure they 
                    meet appropriate data protection standards and have adequate safeguards in place.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Changes to This Policy</h2>
                  <p className="mb-4">
                    We may update this privacy policy from time to time. When we do, we will update the 
                    date below and notify you of any significant changes. We recommend reviewing this policy 
                    periodically to stay informed about how we protect your information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">ICO Registration</h2>
                  <p>
                    We are registered with the Information Commissioner's Office (ICO) as required by UK data protection law. 
                    If you have any complaints about how we handle your personal data, 
                    you can contact them at <a href="https://ico.org.uk" className="text-sgp-green hover:underline">ico.org.uk</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions about this privacy policy or how we handle your personal data, 
                    please contact us using the information below:
                  </p>
                  <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                    <p><strong>Email:</strong> hello@sgpdigitalsolutions.co.uk</p>
                    <p><strong>WhatsApp:</strong> <a href="https://wa.me/447516735792" className="text-sgp-green hover:underline">whatsapp me</a></p>
                    <p><strong>Response time:</strong> Within 24 hours</p>
                  </div>
                </section>

                <div className="border-t border-white/10 pt-8 mt-8 text-center">
                  <p className="text-white/50">
                    <strong>Last updated:</strong> January 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 