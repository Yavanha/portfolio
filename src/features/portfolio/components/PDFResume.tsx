import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import portfolioData from "@/data/portfolio.json";
import inter from "./InterVariable.ttf";

// Register the Inter font for a modern look
Font.register({
  family: "Inter",
  fonts: [{ src: inter }, { src: inter, fontWeight: "bold" }],
});

// Create styles for the one-page, two-column layout
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Inter",
    backgroundColor: "#FFFFFF",
    fontSize: 10,
    lineHeight: 1.3,
  },
  container: {
    flexDirection: "row",
  },
  // Sidebar styles
  sidebar: {
    width: "30%",
    backgroundColor: "#F9FAFB",
    padding: 10,
    paddingRight: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf: "center",
  },
  sidebarName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2563EB",
    textAlign: "center",
    marginBottom: 4,
  },
  sidebarTitle: {
    fontSize: 10,
    textAlign: "center",
    color: "#4B5563",
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1F2937",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    marginVertical: 6,
    paddingBottom: 4,
  },
  contactItem: {
    fontSize: 9,
    marginBottom: 4,
    color: "#1F2937",
  },
  skillGroup: {
    marginBottom: 8,
  },
  skillGroupTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#2563EB",
    marginBottom: 4,
  },
  skillsList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillItem: {
    fontSize: 8,
    color: "#1F2937",
    backgroundColor: "#EFF6FF",
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 6,
    marginRight: 2,
    marginBottom: 2,
  },
  // Main content styles
  main: {
    width: "70%",
    paddingLeft: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2563EB",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    marginVertical: 6,
    paddingBottom: 4,
  },
  experienceItem: {
    marginBottom: 8,
    padding: 6,
    backgroundColor: "#F9FAFB",
    borderRadius: 4,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  companyName: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1F2937",
  },
  position: {
    fontSize: 9,
    color: "#2563EB",
  },
  period: {
    fontSize: 8,
    color: "#6B7280",
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  description: {
    fontSize: 8,
    color: "#4B5563",
    marginBottom: 4,
  },
  highlightsList: {
    paddingLeft: 8,
  },
  highlight: {
    fontSize: 8,
    color: "#4B5563",
    marginBottom: 2,
  },
  educationItem: {
    marginBottom: 6,
  },
  footer: {
    fontSize: 8,
    color: "#9CA3AF",
    textAlign: "center",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingTop: 5,
    marginTop: 10,
  },
});

export function PDFResume() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Container for two columns: Sidebar + Main Content */}
        <View style={styles.container}>
          {/* LEFT SIDEBAR */}
          <View style={styles.sidebar}>
            {/* Profile Picture */}
            <Image style={styles.avatar} src={portfolioData.profile.avatar} />
            <Text style={styles.sidebarName}>{portfolioData.profile.name}</Text>
            <Text style={styles.sidebarTitle}>
              {portfolioData.profile.title}
            </Text>

            {/* Contact Information */}
            <Text style={styles.sectionHeader}>Contact</Text>
            <Text style={styles.contactItem}>
              {portfolioData.profile.location.city},{" "}
              {portfolioData.profile.location.countryCode}
            </Text>
            <Text style={styles.contactItem}>
              {portfolioData.profile.email}
            </Text>
            <Text style={styles.contactItem}>
              github.com/
              {portfolioData.profile.socialLinks.github.split("/").pop()}
            </Text>

            {/* Skills */}
            <Text style={styles.sectionHeader}>Skills</Text>
            {portfolioData.skills.map((group, index) => (
              <View key={index} style={styles.skillGroup}>
                <Text style={styles.skillGroupTitle}>{group.name}</Text>
                <View style={styles.skillsList}>
                  {group.items.map((skill, sIndex) => (
                    <Text key={sIndex} style={styles.skillItem}>
                      {skill}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {/* RIGHT MAIN CONTENT */}
          <View style={styles.main}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {portfolioData.experience.map((exp, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <View>
                    <Text style={styles.companyName}>{exp.company}</Text>
                    <Text style={styles.position}>{exp.position}</Text>
                  </View>
                  <Text style={styles.period}>{exp.period}</Text>
                </View>
                <Text style={styles.description}>{exp.description}</Text>
                <View style={styles.highlightsList}>
                  {exp.highlights.map((hl, hlIndex) => (
                    <Text key={hlIndex} style={styles.highlight}>
                      - {hl}
                    </Text>
                  ))}
                </View>
              </View>
            ))}

            <Text style={styles.sectionTitle}>Education</Text>
            {portfolioData.education.map((edu, index) => (
              <View key={index} style={styles.educationItem}>
                <Text style={styles.companyName}>{edu.institution}</Text>
                <Text style={styles.position}>
                  {edu.degree} in {edu.field}
                </Text>
                <Text style={styles.period}>{edu.period}</Text>
              </View>
            ))}

            <Text style={styles.sectionTitle}>Languages</Text>
            {portfolioData.languages.map((lang, index) => (
              <View key={index} style={{ marginBottom: 4 }}>
                <Text style={styles.contactItem}>
                  {lang.language}: {lang.fluency}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Generated on {new Date().toLocaleDateString()} •{" "}
          {portfolioData.profile.name} • {portfolioData.profile.email}
        </Text>
      </Page>
    </Document>
  );
}
