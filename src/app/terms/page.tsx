import Header from "@/components/Header";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-terminal-black">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">
              Terms of Service
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 text-lg mb-8 text-center italic">
                "The boring legal stuff, but with fewer words that make your brain hurt."
              </p>
              
              <div className="space-y-8 text-white/70">
                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">The Really Short Version</h2>
                  <p className="mb-4">
                    Play nice, pay on time, and we'll build you something awesome. Don't be a pain in the backside, 
                    and we won't be either. If something goes wrong, we'll fix it like proper adults. 
                    That's about 90% of this document right there.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Who We Are</h2>
                  <p className="mb-4">
                    We're SGP Digital Solutions, a UK-based company that does digital stuff for people who do real work. 
                    We're fully insured, ICO registered, and we know what we're doing (most of the time).
                  </p>
                  <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                    <p><strong>Business Name:</strong> SGP Digital Solutions</p>
                    <p><strong>Contact:</strong> hello@sgpdigitalsolutions.co.uk</p>
                    <p><strong>WhatsApp:</strong> <a href="https://wa.me/447516735792" className="text-sgp-green hover:underline">whatsapp me</a></p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Our Services</h2>
                  <p className="mb-4">We do the following things (and we're quite good at them):</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Website design and development</li>
                    <li>Business automation tools</li>
                    <li>Bespoke web applications</li>
                    <li>Tech support and maintenance</li>
                    <li>General digital problem-solving</li>
                    <li>Making computers do what you want them to do</li>
                  </ul>
                  <p className="mt-4 text-sm text-white/50">
                    We don't fix printers. Nobody fixes printers. They're cursed.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">How We Work Together</h2>
                  <div className="space-y-4">
                    <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">📝 Project Agreement</h3>
                      <p>Before we start any work, we'll agree on what we're doing, how much it costs, and when it'll be done. 
                      This might be a formal contract or just a detailed email - whatever works for the size of your project.</p>
                    </div>
                    
                    <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">💰 Payment Terms</h3>
                      <p>We like to be paid. Shocking, we know. For bigger projects, we'll usually ask for 50% upfront and 50% on completion. 
                      For smaller jobs, we might just invoice you when we're done. Payment is due within 30 days, or we'll send increasingly passive-aggressive reminders.</p>
                    </div>
                    
                    <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">⏰ Timelines</h3>
                      <p>We'll give you realistic timelines and stick to them. If something's going to be late, we'll let you know ASAP. 
                      We're not miracle workers - good work takes time, and rushing usually makes things worse.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Your Responsibilities</h2>
                  <p className="mb-4">We need you to:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Give us accurate information about what you want</li>
                    <li>Respond to our questions in a reasonable timeframe</li>
                    <li>Provide content, images, and other materials when needed</li>
                    <li>Pay your invoices on time</li>
                    <li>Not ask us to build anything illegal or dodgy</li>
                    <li>Be patient when we're trying to explain technical stuff</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Intellectual Property</h2>
                  <p className="mb-4">
                    Once you've paid in full, the website/application we build for you is yours. You own it, you can do what you want with it. 
                    We might keep some of the underlying code we've written for our own use in future projects, but your specific content and design is all yours.
                  </p>
                  <p className="text-sm text-white/50">
                    If you try to claim you invented our code, we'll be very disappointed in you.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Warranties and Guarantees</h2>
                  <p className="mb-4">
                    We guarantee that whatever we build will work as described. If it doesn't, we'll fix it for free. 
                    We can't guarantee that your website will make you a millionaire, that your automation will solve all your problems, 
                    or that your competitors won't copy your brilliant ideas.
                  </p>
                  <p className="mb-4">
                    We also can't guarantee that technology won't occasionally be weird and do unexpected things. 
                    When that happens, we'll help you sort it out.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Support and Maintenance</h2>
                  <p className="mb-4">
                    We provide support for the things we build. The level of support depends on what we've agreed:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Bug fixes:</strong> If something breaks because of our code, we'll fix it</li>
                    <li><strong>Minor updates:</strong> Small changes and tweaks as needed</li>
                    <li><strong>Major updates:</strong> Big changes or new features will be quoted separately</li>
                    <li><strong>Third-party issues:</strong> If WordPress breaks itself again, we'll help you sort it out</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">When Things Go Wrong</h2>
                  <p className="mb-4">
                    Sometimes things don't go to plan. When that happens:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>We'll be honest about what went wrong</li>
                    <li>We'll fix it as quickly as possible</li>
                    <li>We won't charge you extra for fixing our mistakes</li>
                    <li>We'll learn from it so it doesn't happen again</li>
                  </ul>
                  <p className="mt-4">
                    If you're not happy with our work, talk to us first. We're reasonable people and we want you to be happy. 
                    If we can't sort it out between us, we can try mediation before anyone gets lawyers involved.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Limitation of Liability</h2>
                  <p className="mb-4">
                    We're fully insured, which is nice. But we can't be responsible for every possible thing that might go wrong. 
                    Our liability is limited to the amount you've paid us for the specific project. We're not responsible for:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Lost profits or business opportunities</li>
                    <li>Problems caused by third-party services</li>
                    <li>Issues arising from your use of our work</li>
                    <li>The inevitable heat death of the universe</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Cancellation Policy</h2>
                  <p className="mb-4">
                    Either of us can cancel a project with reasonable notice. If you cancel:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>You pay for work completed up to the cancellation date</li>
                    <li>We'll hand over any work we've done so far</li>
                    <li>We might keep a small cancellation fee to cover our admin costs</li>
                  </ul>
                  <p className="mt-4">
                    If we cancel (which we'd only do if you're being unreasonable), we'll refund any money you've paid for work not yet completed.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Privacy and Confidentiality</h2>
                  <p className="mb-4">
                    We won't share your business information with anyone else. We won't use your project as a case study without asking first. 
                    We won't gossip about your business at the pub. We're professionals, not reality TV stars.
                  </p>
                  <p className="text-sm text-white/50">
                    (Though if you do something really cool, we might ask if we can show it off on our portfolio.)
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Changes to These Terms</h2>
                  <p className="mb-4">
                    We might update these terms occasionally. If we do, we'll update the date below and let you know if anything major changes. 
                    We're not going to sneak in any "you now owe us your firstborn" clauses.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Governing Law</h2>
                  <p className="mb-4">
                    These terms are governed by UK law. If we end up in court (which we really hope we don't), 
                    it'll be in the UK courts. We'd much rather sort things out over a cup of tea, though.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-sgp-green mb-4">Contact Us</h2>
                  <p className="mb-4">
                    Questions about these terms? Want to negotiate something different? Just want to chat? Get in touch:
                  </p>
                  <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                    <p><strong>Email:</strong> hello@sgpdigitalsolutions.co.uk</p>
                    <p><strong>WhatsApp:</strong> <a href="https://wa.me/447516735792" className="text-sgp-green hover:underline">whatsapp me</a></p>
                    <p><strong>Response time:</strong> Within 24 hours (unless it's a weekend and we're pretending to have a life)</p>
                  </div>
                </section>

                <div className="border-t border-white/10 pt-8 mt-8 text-center">
                  <p className="text-white/50">
                    <strong>Last updated:</strong> January 2025
                  </p>
                  <p className="text-white/50 mt-2">
                    These terms were written by humans, for humans. We tried to make them as painless as possible.
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