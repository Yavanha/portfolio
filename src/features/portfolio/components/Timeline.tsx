import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, ChevronDown, Calendar } from "lucide-react";
import dayjs from "dayjs";
import portfolioData from "@/data/portfolio.json";

export function Timeline() {
  const [visibleItems, setVisibleItems] = useState(3);
  const sortedExperience = [...portfolioData.experience].sort(
    (a, b) =>
      dayjs(b.period.split(" - ")[0]).unix() -
      dayjs(a.period.split(" - ")[0]).unix()
  );

  const timelineItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      {/* Timeline line - hidden on mobile */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50 hidden md:block" />

      {/* Mobile timeline indicator */}
      <div className="md:hidden w-1 bg-gradient-to-b from-blue-500/50 to-purple-500/50 absolute left-4 top-0 bottom-0" />

      <div className="relative space-y-8">
        {sortedExperience.slice(0, visibleItems).map((exp, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={timelineItemVariants}
            className={`
              flex items-start
              md:even:flex-row-reverse
              ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
            `}
          >
            {/* Mobile date indicator */}
            <div className="md:hidden flex items-center space-x-2 absolute -left-2 bg-gray-900 rounded-full p-2 z-10">
              <div className="w-3 h-3 bg-blue-500 rounded-full">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-20" />
              </div>
            </div>

            {/* Content container - full width on mobile */}
            <div
              className={`
              w-full md:w-5/12 
              pl-8 md:pl-0 md:pr-0
              ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}
            `}
            >
              <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
                {/* Mobile date display */}
                <div className="flex items-center text-purple-300 mb-4 md:hidden">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{exp.period}</span>
                </div>

                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  {exp.position}
                </h3>
                <div className="text-purple-300 mb-2">{exp.company}</div>

                {/* Desktop date display */}
                <div className="text-gray-400 text-sm mb-4 hidden md:block">
                  {exp.period}
                </div>

                <p className="text-gray-300 mb-4 break-words">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="flex items-start text-sm group-hover:translate-x-1 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-400">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop timeline dot */}
            <div className="w-2/12 hidden md:flex justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900 relative z-10"
              >
                <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20" />
              </motion.div>
            </div>

            <div className="w-5/12 hidden md:block" />
          </motion.div>
        ))}
      </div>

      {visibleItems < sortedExperience.length && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setVisibleItems((prev) => prev + 3)}
          className="mx-auto mt-8 px-6 py-3 bg-blue-500/10 text-blue-400 rounded-full flex items-center space-x-2 hover:bg-blue-500/20 transition-colors border border-blue-500/20 group"
        >
          <span>Load More</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </motion.button>
      )}
    </div>
  );
}
