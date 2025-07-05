'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AnimatedHero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(45deg, var(--primary) 0%, transparent 100%)",
            opacity: 0.05,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, var(--secondary) 0%, transparent 50%)",
            opacity: 0.05,
          }}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center max-w-4xl mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            Smart Websites.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-block whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent"
          >
            Seamless Workflows.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="block bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary"
          >
            Reliable Repairs.
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="min-w-[200px] text-lg h-12 bg-primary hover:bg-primary-hover"
            onClick={() => document.getElementById('divisions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Divisions
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="min-w-[200px] text-lg h-12"
          >
            Book a Free Discovery Call
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            delay: 1,
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-muted rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 