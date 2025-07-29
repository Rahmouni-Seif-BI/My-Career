'use client'; 

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from "@/lib/i18n-client";

interface StatItemProps {
  value: string
  title: string
  symbol?: string        // optional, if you sometimes omit it
}

const StatItem: React.FC<StatItemProps> = ({ value, title, symbol }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;
    const end = parseInt(value);
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const timer = setInterval(() => {
      const timePassed = Date.now() - startTime;
      const progress = Math.min(timePassed / duration, 1);
      
      // Use easeOutQuad for smooth animation
      const eased = 1 - (1 - progress) * (1 - progress);
      
      setCount(Math.floor(eased * end));
      
      if (progress === 1) {
        clearInterval(timer);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <div ref={ref} className="text-center p-4">
      <div className="text-4xl font-bold text-blue-500">
        {count}{symbol}
      </div>
      <div className="text-lg text-gray-300 mt-2">{title}</div>
    </div>
  );
};

export default function Statistics() {
  const { locale } = useLocale()
  const { t } = useTranslations(locale)

  const stats = [
    { value: "15", title: t('statistics.projects'), symbol: "+" },
    { value: "98", title: t('statistics.clients'), symbol: "%" },
    { value: "100", title: t('statistics.experience'), symbol: "%" },
    { value: "30", title: t('statistics.skills'), symbol: "+" }
  ];

  return (
    <section id="statistics" className="py-16">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('statistics.title')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300"
            >
              <StatItem 
                value={stat.value}
                title={stat.title}
                symbol={stat.symbol}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}