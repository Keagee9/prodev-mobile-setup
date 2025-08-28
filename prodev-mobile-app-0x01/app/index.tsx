import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
              ["<Text style={styles.largeText}>Typescript is great if you practice more</Text>\r\n  <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>\r\n  <Text style={styles.smallText}>ALX is awesome</Text>"]
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
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
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
