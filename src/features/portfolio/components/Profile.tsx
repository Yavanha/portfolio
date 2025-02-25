import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { ResumeButton } from "@/features/resume/components/ResumeButton";
import { PortfolioService } from "@/services/portfolioService";
import { fadeIn, staggerChildren } from "@/features/portfolio/animations";

/**
 * Profile section showing personal information and links
 */
export function Profile() {
  const profile = PortfolioService.getProfile();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="flex flex-col md:flex-row items-center justify-between"
    >
      <div className="md:w-1/2 mb-8 md:mb-0">
        <motion.h1
          variants={fadeIn}
          className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          {profile.name}
        </motion.h1>
        <motion.h2
          variants={fadeIn}
          className="text-xl md:text-2xl mb-6 text-gray-300"
        >
          {profile.title}
        </motion.h2>
        <motion.p variants={fadeIn} className="text-lg text-gray-400 mb-8">
          {profile.bio}
        </motion.p>
        <motion.div
          variants={fadeIn}
          className="flex items-center space-x-4 mb-6 text-gray-300"
        >
          <MapPin className="w-5 h-5" />
          <span>
            {profile.location.city}, {profile.location.countryCode}
          </span>
        </motion.div>
        <motion.div variants={fadeIn} className="flex space-x-6 items-center">
          <a
            href={profile.socialLinks.github}
            className="hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={profile.socialLinks.linkedin}
            className="hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-blue-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <ResumeButton />
        </motion.div>
      </div>
      <motion.div variants={fadeIn} className="md:w-1/3">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50" />
          <img
            src={profile.avatar}
            alt={profile.name}
            className="relative rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-white/10"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
