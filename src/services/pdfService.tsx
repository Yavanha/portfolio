import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { PortfolioData } from "@/domain/models/portfolio";
import { PDFDocument } from "@/features/resume/components/PDFDocument";

/**
 * Service responsible for PDF generation and download operations
 */
export class PDFService {
  /**
   * Generate and download a PDF resume
   * @param portfolioData The data to use for the resume
   * @param filename The filename for the downloaded PDF
   */
  static async generateAndDownloadResume(
    portfolioData: PortfolioData,
    filename?: string
  ): Promise<void> {
    try {
      const blob = await PDFService.generateResumeBlob(portfolioData);
      const defaultFilename = `${portfolioData.profile.name.replace(
        /\s+/g,
        "_"
      )}_Resume.pdf`;

      saveAs(blob, filename || defaultFilename);
    } catch (error) {
      console.error("Error generating PDF:", error);
      throw new Error("Failed to generate PDF resume");
    }
  }

  /**
   * Generate a PDF blob from portfolio data
   * @param portfolioData The data to use for the resume
   */
  private static async generateResumeBlob(
    portfolioData: PortfolioData
  ): Promise<Blob> {
    const pdfDoc = pdf();
    pdfDoc.updateContainer(<PDFDocument portfolioData={portfolioData} />);
    return await pdfDoc.toBlob();
  }
}
