import { Pressable, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ImageBackground } from "expo-image";
import { burger_intro } from "@/assets/images";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();
export default function Index() {
  useEffect(() => {
    const loadApp = async () => {
      // Simulate loading (fetching data, auth check, etc.)
      await new Promise((resolve) => setTimeout(resolve, 6000));
      await SplashScreen.hideAsync(); // Hide splash screen when ready
    };

    loadApp();
  }, []);

  return (
    <ImageBackground source={burger_intro} style={styles.container}>
      <View>
        <Text style={styles.header_text}>Brand</Text>
        <Text style={styles.paragraph}>
          Savor the convenience of restaurant-quality meals, delivered promptly.
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.button_text}>Next</Text>
        </Pressable>
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
