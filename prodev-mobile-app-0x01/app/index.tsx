import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Entry Screen - Awesome</Text>
        <Text style={styles.largeText}>Typescript is great if you practice more</Text>
        <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
        <Text style={styles.smallText}>ALX is awesome</Text>
        <Text style={styles.newText}>Expo Router simplifies navigation!</Text>
        <Text style={styles.extraText1}>Expo Go is a great tool for development.</Text>
        <Text style={styles.extraText2}>EAS makes building and submitting apps easy.</Text>
        <Text style={styles.extraText3}>React Native is a powerful framework.</Text>
        <Text style={styles.largeText}>Typescript is great if you practice more</Text>
        <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
        <Text style={styles.smallText}>ALX is awesome</Text>
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
    marginBottom: 12,
    fontWeight: "500",
    textAlign: "center",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    marginBottom: 12,
    fontWeight: "400",
    textAlign: "center",
  },
  newText: {
    fontSize: 18,
    color: "#4caf50",
    marginBottom: 12,
    fontStyle: "italic",
    textAlign: "center",
  },
  extraText1: {
    fontSize: 16,
    color: "#ff9800",
    marginBottom: 12,
    textAlign: "center",
    fontWeight: "600",
  },
  extraText2: {
    fontSize: 14,
    color: "#795548",
    marginBottom: 12,
    textAlign: "center",
  },
  extraText3: {
    fontSize: 12,
    color: "#607d8b",
    textAlign: "center",
  },
});
