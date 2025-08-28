import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Entry Screen - Awesome</Text>
        <Text style={styles.largeText}>Typescript is great if you practice more</Text>
        <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
        <Text style={styles.smallText}>ALX is awesome</Text>
        <Text style={[styles.baseText, styles.newText]}>Expo Router simplifies navigation!</Text>
        <Text style={[styles.baseText, styles.extraText1]}>Expo Go is a great tool for development.</Text>
        <Text style={[styles.baseText, styles.extraText2]}>EAS makes building and submitting apps easy.</Text>
        <Text style={[styles.baseText, styles.extraText3]}>React Native is a powerful framework.</Text>
        <Text style={[styles.baseText, styles.finalText, styles.finalText1]}>Keep learning and building.</Text>
        <Text style={[styles.baseText, styles.finalText, styles.finalText2]}>Practice makes perfect.</Text>
        <Text style={[styles.baseText, styles.finalText, styles.finalText3]}>Enjoy the journey!</Text>
    
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#90caf9",
    padding: 16,
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e88e5",
    marginBottom: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  baseText: {
    textAlign: "center",
    marginBottom: 12,
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 12,
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 12,
  },
  newText: {
    fontSize: 18,
    color: "#4caf50",
    fontStyle: "italic",
  },
  extraText1: {
    fontSize: 16,
    color: "#ff9800",
    fontWeight: "600",
  },
  extraText2: {
    fontSize: 14,
    color: "#795548",
  },
  extraText3: {
    fontSize: 12,
    color: "#607d8b",
    marginBottom: 0,
  },
  finalText: {
    marginTop: 10,
    marginBottom: 0,
  },
  finalText1: {
    fontSize: 16,
    color: "#e91e63",
    marginTop: 20,
    fontWeight: "bold",
  },
  finalText2: {
    fontSize: 14,
    color: "#00bcd4",
    fontStyle: "italic",
  },
  finalText3: {
    fontSize: 18,
    color: "#ffc107",
  },
});
