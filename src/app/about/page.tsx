import SiteIcon from '@/components/SiteIcon';
import SitePage from '@/components/SitePage';
import Image from 'next/image';

const values = [
  {
    title: 'TRANSPARENCY',
    description: 'No hidden costs, no surprise fees, no "we\'ll figure it out later." You know exactly what you\'re paying for and why.',
    icon: '🔍',
    color: 'border-terminal-green'
  },
  {
    title: 'AFFORDABLE',
    description: 'Good work shouldn\'t cost a fortune. We price fairly so businesses that actually need help can afford it.',
    icon: '💰',
    color: 'border-terminal-green'
  },
  {
    title: 'EFFICIENT',
    description: 'We don\'t waste your time or ours. Quick turnarounds, clear communication, and solutions that work first time (or we will fix it for you).',
    icon: '⚡',
    color: 'border-terminal-purple'
  },
  {
    title: 'HONEST',
    description: 'If you don\'t need it, we won\'t build it. If there\'s a simpler solution, we\'ll tell you. No overselling, ever.',
    icon: '🤝',
    color: 'border-terminal-pink'
  },
];



export default function AboutPage() {
  return (
    <SitePage>
      {/* Header */}

      {/* Hero Section */}
      <section className="py-24 bg-terminal-black terminal-section">
        <div className="container">
          <div className="section-header">
            <p className="site-eyebrow">THE PEOPLE BEHIND THE PROCESS</p>
            <h1 className="section-title">
              ABOUT SGP DIGITAL SOLUTIONS
            </h1>
            <br></br>
            <p className="section-subtitle">
              The Vision: to find simple solutions for people who do the real work.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-terminal-dark terminal-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Founder Image */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <div className="w-80 h-96 bg-terminal-black border-4 border-terminal-green rounded-neo overflow-hidden neo-terminal-element">
                  <Image
                    src="/team/founder.jpg"
                    alt="Founder & Director"
                    width={320}
                    height={384}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Terminal Badge */}
                <div className="absolute -bottom-4 -right-4 bg-terminal-green text-terminal-black px-4 py-2 rounded-terminal border-2 border-terminal-black font-terminal-mono font-bold text-sm">
                  FOUNDER
                </div>
              </div>
            </div>

            {/* Founder Info */}
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-terminal-white font-terminal-mono uppercase">
                Meet the<br/>
                <span className="text-terminal-green">founder</span>
              </h2>
              
              <div className="team-profile mb-8">
                <p className="team-role">Managing Director & Lead Developer</p>
                <ul>
                  <li>I've worked with clunky systems - I fix them</li>
                  <li>I turn 'there must be an easier way' into an easier way</li>
                  <li>I build tools people don't swear at</li>
                  <li>I think like a customer but work like a developer</li>
                  <li>I'm not a fan of jargon</li>
                </ul>
              </div>

              <p className="text-lg text-terminal-white mb-8 font-terminal-sans leading-relaxed">
                With a background in cutting-edge technology and a passion for solving complex business challenges, 
                I founded SGP Digital to bridge the gap between innovative technology and practical business solutions. 
                My mission is to empower businesses with digital tools that actually work and drive real results.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-terminal-black border-2 border-terminal-green rounded-terminal px-4 py-2">
                  <span className="text-terminal-green font-terminal-mono font-bold text-sm">FULL-STACK DEVELOPMENT</span>
                </div>
                <div className="bg-terminal-black border-2 border-terminal-green rounded-terminal px-4 py-2">
                  <span className="text-terminal-cyan font-terminal-mono font-bold text-sm">SYSTEM ARCHITECTURE</span>
                </div>
                <div className="bg-terminal-black border-2 border-terminal-purple rounded-terminal px-4 py-2">
                  <span className="text-terminal-purple font-terminal-mono font-bold text-sm">BUSINESS STRATEGY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-terminal-black terminal-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              MEET THE TEAM
            </h2>
            <p className="section-subtitle">
              The people behind the solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Natasha Image */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <div className="w-80 h-96 bg-terminal-black border-4 border-terminal-green rounded-neo overflow-hidden neo-terminal-element">
                  <Image
                    src="/team/Natasha.jpg"
                    alt="Natasha - Director of Operations and Engagement"
                    width={320}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Terminal Badge */}
                <div className="absolute -bottom-4 -right-4 bg-terminal-green text-terminal-black px-4 py-2 rounded-terminal border-2 border-terminal-black font-terminal-mono font-bold text-sm">
                  DIRECTOR
                </div>
              </div>
            </div>

            {/* Natasha Info */}
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-6 text-terminal-white font-terminal-mono uppercase">
                <span className="text-terminal-cyan">Natasha</span>
              </h3>
              
              <div className="team-profile mb-8">
                <p className="team-role">Director of Operations and Engagement</p>
                <ul>
                  <li>I ensure seamless project delivery</li>
                  <li>I bridge client needs with technical solutions</li>
                  <li>I keep the team running like clockwork</li>
                  <li>I turn chaos into organized success</li>
                </ul>
              </div>

              <p className="text-lg text-terminal-white mb-8 font-terminal-sans leading-relaxed">
                With extensive experience in operations management and client engagement, Natasha ensures that every project 
                runs smoothly from conception to completion. She's the driving force behind our efficient workflows and 
                exceptional client relationships.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-terminal-black border-2 border-terminal-green rounded-terminal px-4 py-2">
                  <span className="text-terminal-cyan font-terminal-mono font-bold text-sm">OPERATIONS MANAGEMENT</span>
                </div>
                <div className="bg-terminal-black border-2 border-terminal-purple rounded-terminal px-4 py-2">
                  <span className="text-terminal-purple font-terminal-mono font-bold text-sm">CLIENT ENGAGEMENT</span>
                </div>
                <div className="bg-terminal-black border-2 border-terminal-pink rounded-terminal px-4 py-2">
                  <span className="text-terminal-pink font-terminal-mono font-bold text-sm">PROJECT COORDINATION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-terminal-black terminal-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-terminal-green font-terminal-mono uppercase">
                OUR MISSION
              </h2>
              <div className="bg-terminal-dark border-3 border-terminal-green rounded-neo p-8 neo-terminal-element">
                <p className="text-lg text-terminal-white font-terminal-sans leading-relaxed">
                  To help businesses that actually need help, not just the ones with the biggest budgets. 
                  We're here to solve problems for people who are too busy doing real work to wrestle with 
                  clunky systems. No jargon, no nonsense, just tools that work so you can get back to 
                  what you're good at.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-terminal-cyan font-terminal-mono uppercase">
                OUR VISION
              </h2>
              <div className="bg-terminal-dark border-3 border-terminal-green rounded-neo p-8 neo-terminal-element">
                <p className="text-lg text-terminal-white font-terminal-sans leading-relaxed">
                  A world where "there must be an easier way" becomes "there is an easier way." 
                  We're not trying to take over the world or make millions - we just want to be 
                  the people you call when technology is being stupid and you need someone who 
                  actually cares about fixing it properly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-terminal-grey terminal-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              CORE VALUES
            </h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-terminal-black border-3 ${value.color} rounded-neo p-8 neo-terminal-element text-center`}
              >
                <div className="flex justify-center mb-6"><SiteIcon symbol={value.icon} /></div>
                <h3 className="text-xl font-bold mb-4 text-terminal-white font-terminal-mono uppercase">
                  {value.title}
                </h3>
                <p className="text-terminal-white/80 font-terminal-sans">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-24 bg-terminal-grey terminal-section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-terminal-green font-terminal-mono uppercase">
              READY TO WORK<br/>TOGETHER?
            </h2>
            <p className="text-xl text-terminal-white mb-12 max-w-2xl mx-auto font-terminal-sans">
              Let's discuss how we can help transform your business with innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="btn btn-primary px-8 py-4 text-lg terminal-glow"
              >
                GET IN TOUCH &gt;
              </a>
              <a
                href="/portfolio"
                className="btn btn-accent px-8 py-4 text-lg"
              >
                VIEW OUR WORK //
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </SitePage>
  );
} 