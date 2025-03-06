import { PortfolioService } from "@/services/portfolioService";
import { Profile } from "@/features/portfolio/components/Profile";
import { Timeline } from "@/features/portfolio/components/Timeline";
import { SkillsSection } from "@/features/portfolio/components/SkillsSection";
import { LanguagesAndEducation } from "@/features/portfolio/components/LanguagesAndEducation";
import { fadeIn } from "@/features/portfolio/animations";
import { motion } from "motion/react";

/**
 * Main portfolio component that composes all the sections
 */
export function Portfolio() {
  const profile = PortfolioService.getProfile();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <header className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
        />
        <div className="container mx-auto px-6 py-20 relative z-[100]">
          <Profile />
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Work Experience
          </motion.h2>
          <Timeline />
        </div>
      </section>

      <SkillsSection />
      <LanguagesAndEducation />

      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
