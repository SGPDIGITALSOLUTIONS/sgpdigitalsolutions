'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import AnimatedHero from "@/components/AnimatedHero"
import AnimatedFeatures from "@/components/AnimatedFeatures"
import MainHeader from "@/components/MainHeader"
import Header from "@/components/Header"
import Hero from "@/components/Hero"

const services = [
  {
    title: "WEB DEVELOPMENT",
    description: "Modern, responsive websites built with cutting-edge technology that convert visitors into customers",
    icon: "⚡",
    color: "card-green"
  },
  {
    title: "SYSTEM AUTOMATION", 
    description: "Custom software and workflow automation to eliminate manual tasks and boost efficiency",
    icon: "🤖",
    color: "card-cyan"
  },
  {
    title: "E-COMMERCE PLATFORMS",
    description: "High-performance online stores that scale with your business and maximize revenue",
    icon: "💻", 
    color: "card-purple"
  },
  {
    title: "24/7 MAINTENANCE",
    description: "Round-the-clock monitoring, updates, and support to keep your systems running optimally",
    icon: "🛡️",
    color: "card-pink"
  }
]

const testimonials = [
  {
    name: "TONY WING",
    company: "VISION CARE FOR HOMELESS PEOPLE",
    text: "Collaborating with Steve has been transformative for our charity. His expertise in technology and automation has not only streamlined our workflows but also uncovered opportunities for efficiencies in our operation not previously considered. From implementing online booking to automating numerous repetitive tasks, Steve has consistently delivered high quality solutions with clear communication and quick turnaround times. Steve possesses a natural aptitude for problem-solving and diligently seeks appropriate solutions to any challenges he encounters. Beyond his technical proficiency, Steve demonstrates proactive, reliable, people-centric, and a profound understanding of how technology aligns with our objectives. His approach has resulted in significant time savings and a marked improvement in the engagement of our volunteers. I wholeheartedly recommend Steve to those seeking to incorporate intelligent automation solutions and innovation into their business.",
    color: "bg-terminal-black border-terminal-green"
  },
  {
    name: "NATASHA HUDSON", 
    company: "HUDSON DIGITAL BUSINESS SOLUTIONS",
    text: "Working with Steve at SGP Digital Solution was a dream. He took my old website as inspiration and completely transformed it into a modern, sleek, and professional site that truly reflects my brand. He was patient, collaborative, and full of creative ideas I hadn’t even considered. I felt heard and supported throughout the process, and I’m absolutely thrilled with the result.",
    color: "bg-terminal-black border-terminal-cyan"
  },
  {
    name: "LANA",
    text: "I had all my childrens baby photos saved on a laptop which had been broken for years, I also had lost the password for it as it had been so long. Steve managed to get my photos back aswell as fix my laptop and reinstall windows, I now have a working laptop again!",
    color: "bg-terminal-black border-terminal-purple"
  }
]

export default function Home() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleEnterSite = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push('/home');
    }, 500); // Match this with the CSS transition duration
  };

  return (
    <div className="min-h-screen bg-terminal-black">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-terminal-dark terminal-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              CORE SERVICES
            </h2>
            <p className="section-subtitle">
              We specialize in building digital solutions that actually work for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`${service.color} hover:scale-105 transition-transform duration-300`}>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4 filter drop-shadow-lg">{service.icon}</div>
                  <CardTitle className="font-terminal-mono uppercase text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-terminal-white">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-terminal-black terminal-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              WHY CHOOSE SGP.DIGITAL?
            </h2>
            <p className="section-subtitle">
              We're not just another web agency. We're your digital growth partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-terminal-dark border-3 border-terminal-green rounded-neo neo-terminal-element">
              <div className="w-20 h-20 bg-terminal-green border-3 border-terminal-black rounded-terminal mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-terminal-black">
                ⚡
              </div>
              <h3 className="text-2xl font-bold mb-4 font-terminal-mono uppercase text-terminal-white">LIGHTNING FAST</h3>
              <p className="text-lg text-terminal-white">We deliver projects on time, every time. No endless delays or excuses.</p>
            </div>
            
            <div className="text-center p-8 bg-terminal-dark border-3 border-terminal-cyan rounded-neo neo-terminal-element">
              <div className="w-20 h-20 bg-terminal-cyan border-3 border-terminal-black rounded-terminal mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-terminal-black">
                💰
              </div>
              <h3 className="text-2xl font-bold mb-4 font-terminal-mono uppercase text-terminal-white">FAIR PRICING</h3>
              <p className="text-lg text-terminal-white">No hidden fees, no surprise costs. Just honest, transparent pricing.</p>
            </div>
            
            <div className="text-center p-8 bg-terminal-dark border-3 border-terminal-purple rounded-neo neo-terminal-element">
              <div className="w-20 h-20 bg-terminal-purple border-3 border-terminal-black rounded-terminal mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-terminal-black">
                🎯
              </div>
              <h3 className="text-2xl font-bold mb-4 font-terminal-mono uppercase text-terminal-white">RESULTS FOCUSED</h3>
              <p className="text-lg text-terminal-white">We build solutions that actually grow your business, not just look pretty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-terminal-grey terminal-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              CLIENT TESTIMONIALS
            </h2>
            <p className="section-subtitle">
              Don't just take our word for it - hear from businesses we've helped grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`${testimonial.color} border-3 rounded-neo p-8 shadow-neo hover:shadow-neo-hover hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 h-80 hover:h-auto overflow-hidden hover:overflow-visible group flex flex-col`}
              >
                <p className="text-lg mb-6 font-medium text-terminal-white font-terminal-sans testimonial-text">"{testimonial.text}"</p>
                <div className="border-t-3 border-terminal-white pt-4 mt-auto">
                  <p className="font-bold text-lg text-terminal-white font-terminal-mono">{testimonial.name}</p>
                  <p className="text-terminal-green font-terminal-mono text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-terminal-dark terminal-section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-terminal-black border-terminal-white">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4 font-terminal-mono uppercase text-terminal-green">READY TO DEPLOY?</CardTitle>
                <CardDescription className="text-lg text-terminal-white">
                  Send us a message and we'll get back to you within 24 hours with a custom proposal for your project.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="YOUR NAME" className="bg-terminal-black text-terminal-white placeholder:text-terminal-white/60 font-terminal-mono" />
                  <Input type="email" placeholder="EMAIL ADDRESS" className="bg-terminal-black text-terminal-white placeholder:text-terminal-white/60 font-terminal-mono" />
                </div>
                <Input placeholder="COMPANY NAME (OPTIONAL)" className="bg-terminal-black text-terminal-white placeholder:text-terminal-white/60 font-terminal-mono" />
                <textarea 
                  className="input w-full min-h-[120px] resize-none bg-terminal-black text-terminal-white placeholder:text-terminal-white/60 font-terminal-mono"
                  placeholder="TELL US ABOUT YOUR PROJECT..."
                />
                <Button variant="accent" size="lg" className="w-full text-lg py-4 font-terminal-mono">
                  SEND MESSAGE &gt;&gt;
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Options */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-terminal-white font-terminal-mono uppercase">OR CONNECT DIRECTLY:</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="terminal-glow font-terminal-mono">
                📧 HELLO@SGPDIGITALSOLUTIONS.CO.UK
              </Button>
              <Button variant="outline" size="lg" className="terminal-glow font-terminal-mono">
                📱 07516735792
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-terminal-black text-terminal-white py-16 border-t-3 border-terminal-green terminal-section">
        <div className="container">
          <div className="text-center">
            <h3 className="text-3xl font-black mb-4 font-terminal-mono uppercase terminal-glow" style={{ textShadow: '2px 2px 0px #000000, 0 0 10px rgba(0, 255, 136, 0.8)' }}>
              SGP.DIGITAL
            </h3>
            <p className="text-lg mb-8 font-terminal-sans">Making digital simple for people who need it.</p>
            <div className="flex justify-center space-x-8">
              <a href="/about" className="text-terminal-white hover:text-terminal-green transition-colors duration-200 font-terminal-mono uppercase tracking-wide">ABOUT</a>
              <a href="/services" className="text-terminal-white hover:text-terminal-cyan transition-colors duration-200 font-terminal-mono uppercase tracking-wide">SERVICES</a>
              <a href="/portfolio" className="text-terminal-white hover:text-terminal-purple transition-colors duration-200 font-terminal-mono uppercase tracking-wide">PORTFOLIO</a>
              <a href="/contact" className="text-terminal-white hover:text-terminal-pink transition-colors duration-200 font-terminal-mono uppercase tracking-wide">CONTACT</a>
            </div>
            <div className="mt-8 pt-8 border-t-2 border-terminal-green">
              <p className="text-terminal-white/80 font-terminal-mono text-sm">© 2024 SGP DIGITAL SOLUTIONS. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
