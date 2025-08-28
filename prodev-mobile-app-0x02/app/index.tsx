import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View>
              <View style={styles.companyLogo}>
                <Image source={require("@/assets/images/background-image.png")} style={styles.logo} />
              </View>

              <View style={styles.textGroup}>
                <Text style={styles.textLarge}>Find your favorite place here</Text>
                <Text style={styles.textSmall}>The best prices for over 2 </Text>
                <Text style={styles.textSmall}>million properties worldwide</Text>
              </View>
            </View>

            <View style={styles.footer}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.transparentButton}>
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footerTextContainer}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const baseButton = {
  flex: 1,
  borderWidth: 2,
  borderColor: "white",
  borderRadius: 40,
  paddingVertical: 15,
  paddingHorizontal: 5,
  alignItems: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  background: {
    flex: 1,
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    ...baseButton,
  },
  button: {
    ...baseButton,
    backgroundColor: "white",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
  footer: {
    paddingBottom: 20,
  },
  footerTextContainer: {
    alignItems: "center",
    paddingTop: 20,
  },
});
