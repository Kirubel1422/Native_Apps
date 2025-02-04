import { Pressable, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ImageBackground } from "expo-image";
import { burger_intro } from "@/assets/images";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();
export default function Index() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <ImageBackground source={burger_intro} style={styles.container}>
      <View>
        <Text style={styles.header_text}>Brand</Text>
        <Text style={styles.paragraph}>
          Savor the convenience of restaurant-quality meals, delivered promptly.
        </Text>
        <Link href="/(auth)/sign-up" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.button_text}>Next</Text>
          </Pressable>
        </Link>
      </View>

      <StatusBar hidden={true} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 52,
    zIndex: -50,
  },

  header_text: {
    fontSize: 24,
    fontWeight: 600,
    color: "white",
  },

  paragraph: {
    fontSize: 14,
    color: "white",
    marginTop: 12,
    marginBottom: 32,
  },

  button_text: {
    color: "#181E22",
    fontSize: 16,
  },

  button: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 32,
  },
});
