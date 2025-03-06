import { motion } from "motion/react";
import portfolioData from "@/data/portfolio.json";
import { fadeIn } from "@/features/portfolio/animations";

export function LanguagesAndEducation() {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Languages
            </h2>
            <div className="space-y-6">
              {portfolioData.languages.map((lang, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-medium text-gray-300">
                      {lang.language}
                    </span>
                    <span className="text-blue-400">{lang.fluency}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Education
            </h2>
            {portfolioData.education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50"
              >
                <h3 className="text-xl font-semibold text-gray-300 mb-2">
                  {edu.institution}
                </h3>
                <p className="text-blue-400 mb-1">
                  {edu.degree} in {edu.field}
                </p>
                <p className="text-gray-400">{edu.period}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
