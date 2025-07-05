'use client';

import { useState } from 'react';

const testimonials = [
  {
    quote: "SGP Digital transformed our online presence completely. Their team was professional and delivered beyond our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "/testimonials/sarah.jpg",
  },
  {
    quote: "The workflow automation solution they implemented has saved us countless hours and improved our efficiency dramatically.",
    author: "Michael Chen",
    role: "Operations Director, Global Solutions",
    image: "/testimonials/michael.jpg",
  },
  {
    quote: "Working with SGP Digital was a game-changer for our business. Their expertise in digital solutions is unmatched.",
    author: "Emily Rodriguez",
    role: "Marketing Manager, Innovate Co.",
    image: "/testimonials/emily.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Hear from our clients about their experience working with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="relative h-[400px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === activeIndex 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  }`}
                >
                  <div className="card text-center p-8 md:p-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">💬</span>
                    </div>
                    <p className="text-xl md:text-2xl text-secondary mb-8 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="text-lg font-bold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-primary">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-border hover:bg-primary/50'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 