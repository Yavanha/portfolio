import { motion } from "framer-motion";
import { pdf } from "@react-pdf/renderer";
import { Github, Linkedin, Mail, MapPin, FileDown } from "lucide-react";
import portfolioData from "@/data/portfolio.json";
import { Timeline } from "@/features/portfolio/components/Timeline";
import { SkillsSection } from "@/features/portfolio/components/SkillsSection";
import { LanguagesAndEducation } from "@/features/portfolio/components/LanguagesAndEducation";
import { fadeIn, staggerChildren } from "@/features/portfolio/animations";
import { PDFResume } from "./PDFResume";
import { saveAs } from "file-saver";

export function Portfolio() {
  const dowloadResumeHandler = () => {
    console.log("Download resume");
    const asPdf = pdf();
    asPdf.updateContainer(<PDFResume />);
    asPdf
      .toBlob()
      .then((blob) => {
        saveAs(blob, `${portfolioData.profile.name} Resume.pdf`);
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
                {portfolioData.profile.name}
              </motion.h1>
              <motion.h2
                variants={fadeIn}
                className="text-xl md:text-2xl mb-6 text-gray-300"
              >
                {portfolioData.profile.title}
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-lg text-gray-400 mb-8"
              >
                {portfolioData.profile.bio}
              </motion.p>
              <motion.div
                variants={fadeIn}
                className="flex items-center space-x-4 mb-6 text-gray-300"
              >
                <MapPin className="w-5 h-5" />
                <span>
                  {portfolioData.profile.location.city},{" "}
                  {portfolioData.profile.location.countryCode}
                </span>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="flex space-x-6 items-center"
              >
                <a
                  href={portfolioData.profile.socialLinks.github}
                  className="hover:text-blue-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={portfolioData.profile.socialLinks.linkedin}
                  className="hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <button
                  onClick={dowloadResumeHandler}
                  className="hover:text-blue-400 transition-colors flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 hover:border-blue-500/50"
                >
                  <FileDown className="w-5 h-5" />
                  <span className="text-sm">Download CV</span>
                </button>
              </motion.div>
            </div>
            <motion.div variants={fadeIn} className="md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50" />
                <img
                  src={portfolioData.profile.avatar}
                  alt={portfolioData.profile.name}
                  className="relative rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-white/10"
                />
              </div>
            </motion.div>
          </motion.div>
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
            © {new Date().getFullYear()} {portfolioData.profile.name}. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
