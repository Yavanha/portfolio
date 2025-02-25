import portfolioData from "@/data/portfolio.json";
import { PortfolioData } from "@/domain/models/portfolio";

/**
 * Service class for retrieving and manipulating portfolio data
 */
export class PortfolioService {
  /**
   * Get the entire portfolio data
   */
  static getPortfolioData(): PortfolioData {
    return portfolioData as PortfolioData;
  }

  /**
   * Get just the profile information
   */
  static getProfile() {
    return portfolioData.profile;
  }

  /**
   * Get the list of skills
   */
  static getSkills() {
    return portfolioData.skills;
  }

  /**
   * Get work experiences sorted by date (most recent first)
   */
  static getExperiences() {
    return [...portfolioData.experience];
  }

  /**
   * Get education information
   */
  static getEducation() {
    return portfolioData.education;
  }

  /**
   * Get languages information
   */
  static getLanguages() {
    return portfolioData.languages;
  }
}
