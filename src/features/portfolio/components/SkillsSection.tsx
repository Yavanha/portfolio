import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, TestTube, Wrench } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';
import { fadeIn, staggerChildren } from '@/features/portfolio/animations';

const iconComponents = {
  Code,
  Server,
  TestTube,
  Tool: Wrench
};

export function SkillsSection() {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Skills & Expertise
        </motion.h2>
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {portfolioData.skills.map((skillGroup, index) => {
            const Icon = iconComponents[skillGroup.icon as keyof typeof iconComponents];
            return (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">{skillGroup.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}