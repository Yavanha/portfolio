import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import { PortfolioData } from "@/domain/models/portfolio";
import interFont from "@/features/resume/fonts/Inter-Regular.ttf";
import interFontBold from "@/features/resume/fonts/Inter-Bold.ttf";
// Register the Inter font for the PDF
Font.register({
  family: "Inter",
  fonts: [
    { src: interFont, fontStyle: "normal" },
    { src: interFontBold, fontWeight: "bold" },
  ],
});

const colors = {
  primary: "#b7bf96",
  primaryLight: "#ecede8",
  secondary: "#011b10",
  secondaryLight: "#253528",
  icon: "#964950",
  black: "#000000",
};

const fromRemToPT = (rem: number) => rem * 12;

interface PDFDocumentProps {
  portfolioData: PortfolioData;
}

export function PDFDocument({ portfolioData }: PDFDocumentProps) {
  const { profile, skills, experience, languages, education } = portfolioData;

  const firstName = profile.firstName || profile.name?.split(" ")[0] || "";
  const lastName =
    profile.lastName || profile.name?.split(" ").slice(1).join(" ") || "";

  const styles = StyleSheet.create({
    page: {
      position: "relative",
      fontFamily: "Inter",
      paddingTop: fromRemToPT(1.5),
      fontSize: fromRemToPT(1),
      color: colors.secondary,
    },
    left: {
      zIndex: -2,
      width: "50%",
      position: "absolute",
      bottom: 0,
      top: 0,
      left: 0,
      right: "50%",
      backgroundColor: colors.primaryLight,
    },
    right: {
      zIndex: -2,
      position: "absolute",
      bottom: 0,
      top: 0,
      right: 0,
      left: "50%",
      backgroundColor: colors.secondary,
    },

    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      paddingHorizontal: fromRemToPT(2),
      minHeight: fromRemToPT(21),
      position: "relative",
    },

    personalInfoLeft: {
      flexBasis: "50%",
      paddingTop: fromRemToPT(1.25),
      paddingLeft: fromRemToPT(1.5),
    },
    personalInfoRight: {
      flexBasis: "50%",
      flexDirection: "row",
      justifyContent: "center",
      position: "relative",
    },

    lastName: {
      fontSize: fromRemToPT(3.5),
      lineHeight: 1,
      fontWeight: "bold",
      textTransform: "uppercase",
    },

    firstName: {
      fontSize: fromRemToPT(3.5),
      letterSpacing: -2,
    },

    title: {
      fontSize: fromRemToPT(1.5),
    },

    avatarContainer: {
      width: fromRemToPT(16),
      height: fromRemToPT(16),
      borderRadius: 9999999,
      backgroundColor: colors.primaryLight,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    avatar: {
      objectFit: "cover",
      width: fromRemToPT(15),
      height: fromRemToPT(15),
      borderRadius: 9999999,
    },

    aboutMe: {
      padding: fromRemToPT(2),
      position: "absolute",
      bottom: 0,
      left: fromRemToPT(2),
      right: fromRemToPT(2),
      backgroundColor: colors.primary,
      borderRadius: 20,
      zIndex: -2,
    },

    inline: {
      display: "flex",
      flexDirection: "row",
    },
    badge: {
      fontFamily: "Inter",
      fontWeight: "bold",
      borderRadius: fromRemToPT(1),
      padding: fromRemToPT(0.5),
      marginBottom: fromRemToPT(1),
      textTransform: "capitalize",
      textAlign: "center",
    },

    asideNav: {
      flexBasis: "50%",
      padding: fromRemToPT(0.5),
    },
    asideItemContent: {
      paddingLeft: fromRemToPT(1),
      marginBottom: fromRemToPT(1),
    },

    experiences: {
      flexBasis: "50%",
      padding: fromRemToPT(0.5),
    },
  });

  return (
    <Document
      title={`${firstName} ${lastName} - Resume`}
      author={profile.name}
      language="English"
      subject="Resume"
      keywords="resume, CV, portfolio, frontend developer, software engineer"
      creator={profile.name}
      pageLayout="singlePage"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.left}></View>
        <View style={styles.right}></View>
        <View style={{ ...styles.container, marginBottom: fromRemToPT(0.5) }}>
          <View style={styles.personalInfoLeft}>
            <Text style={styles.lastName}>{lastName}</Text>
            <Text style={styles.firstName}>{firstName}</Text>
            <Text style={styles.title}>{profile.title}</Text>
          </View>
          <View style={styles.personalInfoRight}>
            <View style={styles.avatarContainer}>
              <Image src={profile.avatar} style={styles.avatar} />
            </View>
          </View>
          <View style={styles.aboutMe}>
            <View style={styles.inline}>
              <Text
                style={{
                  ...styles.badge,
                  backgroundColor: colors.secondary,
                  color: colors.primaryLight,
                }}
              >
                About me
              </Text>
            </View>
            <Text>{profile.bio}</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.asideNav}>
            <View>
              <Text
                style={{
                  ...styles.badge,
                  backgroundColor: colors.secondary,
                  color: colors.primaryLight,
                }}
              >
                Skills
              </Text>
              <View style={styles.asideItemContent}>
                {skills.map((skill, index) => (
                  <View key={`${skill.name}-${index}`}>
                    <Text
                      style={{
                        marginBottom: fromRemToPT(0.25),
                      }}
                    >
                      {skill.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: fromRemToPT(1),
                        fontWeight: "bold",

                        marginBottom: fromRemToPT(0.25),
                        paddingLeft: fromRemToPT(0.5),
                      }}
                    >
                      {skill.items.slice(0, 3).join(", ")}...
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            <View>
              <Text
                style={{
                  ...styles.badge,
                  backgroundColor: colors.secondary,
                  color: colors.primaryLight,
                }}
              >
                education
              </Text>
              <View style={styles.asideItemContent}>
                {education.map((edu, index) => (
                  <View key={`${edu.degree}-${index}`}>
                    <Text
                      style={{
                        marginBottom: fromRemToPT(0.25),
                        fontWeight: "bold",
                      }}
                    >
                      {edu.degree} of {edu.field}
                    </Text>
                    <Text>{edu.institution}</Text>
                    <Text>{edu.period}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View>
              <Text
                style={{
                  ...styles.badge,
                  backgroundColor: colors.secondary,
                  color: colors.primaryLight,
                }}
              >
                languages
              </Text>

              <View
                style={{
                  ...styles.asideItemContent,
                  paddingHorizontal: fromRemToPT(1),
                }}
              >
                {languages.map(({ language, level }, index) => (
                  <View key={`${language}-${index}`}>
                    <View
                      style={{
                        width: "100%",
                        borderStyle: "solid",
                        borderWidth: fromRemToPT(0.2),
                        position: "relative",
                        marginBottom: fromRemToPT(0.5),
                        borderRadius: 75,
                        borderColor: colors.secondary,
                        padding: fromRemToPT(0.2),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: fromRemToPT(0.9),
                          color: colors.secondary,
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        {language}
                      </Text>
                      <View
                        style={{
                          width: `${level}%`,
                          borderRadius: 75,
                          backgroundColor: colors.primary,
                          padding: fromRemToPT(0.25),
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          zIndex: -1,
                        }}
                      ></View>
                    </View>
                  </View>
                ))}
              </View>
            </View>
            <View>
              <Text
                style={{
                  ...styles.badge,
                  backgroundColor: colors.secondary,
                  color: colors.primaryLight,
                }}
              >
                contact
              </Text>
              <View style={styles.asideItemContent}>
                <Text
                  style={{
                    marginBottom: fromRemToPT(0.5),
                    textDecoration: "underline",
                  }}
                >
                  {profile.website}
                </Text>
                <Text
                  style={{
                    marginBottom: fromRemToPT(0.5),
                    textDecoration: "underline",
                  }}
                >
                  {profile.email}
                </Text>
                <Text>{profile.location.address},</Text>
                <Text>
                  {profile.location.city} - {profile.location.country}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.asideNav}>
            <View>
              <Text
                style={{
                  ...styles.badge,
                  backgroundColor: colors.primary,
                  color: colors.secondaryLight,
                }}
              >
                Experience
              </Text>
              <View
                style={{
                  ...styles.asideItemContent,
                  marginBottom: fromRemToPT(0.5),

                  color: colors.primaryLight,
                }}
              >
                {experience.map((exp, index) => (
                  <View
                    key={`${exp.position}-${index}`}
                    style={{
                      marginBottom: fromRemToPT(1),
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: fromRemToPT(0.875),
                      }}
                    >
                      {exp.period}
                    </Text>
                    <Text
                      style={{
                        marginBottom: fromRemToPT(0.25),
                        fontWeight: "bold",
                      }}
                    >
                      {exp.position} |{" "}
                      <Text
                        style={{
                          fontSize: fromRemToPT(0.875),
                        }}
                      >
                        {exp.company}
                      </Text>
                    </Text>
                    <Text
                      style={{
                        fontSize: fromRemToPT(0.875),
                        paddingLeft: fromRemToPT(0.5),
                        borderLeftWidth: fromRemToPT(0.2),
                        borderLeftColor: colors.primary,
                      }}
                    >
                      {exp.summary}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
