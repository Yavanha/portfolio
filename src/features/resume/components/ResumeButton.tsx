import { useState } from "react";
import { FileDown } from "lucide-react";
import { PDFService } from "@/services/pdfService";
import { PortfolioService } from "@/services/portfolioService";

interface ResumeButtonProps {
  className?: string;
}

/**
 * Button component that downloads the user's resume as PDF
 */
export function ResumeButton({ className = "" }: ResumeButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadResume = async () => {
    try {
      setIsGenerating(true);
      const portfolioData = PortfolioService.getPortfolioData();
      await PDFService.generateAndDownloadResume(portfolioData);
    } catch (error) {
      console.error("Failed to download resume:", error);
      // Here you could show a toast notification or other error feedback
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownloadResume}
      disabled={isGenerating}
      className={`hover:text-blue-400 transition-colors flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 hover:border-blue-500/50 ${
        isGenerating ? "opacity-75 cursor-wait" : ""
      } ${className}`}
    >
      <FileDown className="w-5 h-5" />
      <span className="text-sm">
        {isGenerating ? "Generating..." : "Download CV"}
      </span>
    </button>
  );
}
