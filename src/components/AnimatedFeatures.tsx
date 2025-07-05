'use client';

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "Modern Web Design",
    description: "Beautiful, responsive websites that work on all devices",
    icon: "🎨"
  },
  {
    title: "Digital Solutions",
    description: "Custom software to streamline your business processes",
    icon: "💡"
  },
  {
    title: "E-commerce",
    description: "Online stores that drive sales and growth",
    icon: "🛍️"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance when you need it",
    icon: "🔧"
  }
];

export default function AnimatedFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
            <CardHeader>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  );
} 