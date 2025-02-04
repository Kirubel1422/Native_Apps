import { logo } from "@/assets/images";
import { Image } from "expo-image";
import { ScrollView, Text, View, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthInput } from "@/components/InputFields";
import Button from "@/components/Button";
import { useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

type FormPropType = {
  email: string;
  password: string;
};

export default function SignUp() {
  const [form, setForm] = useState<FormPropType>({
    email: "",
    password: "",
  });

  const handleChangeText = (text: string, type: keyof FormPropType) =>
    setForm((prev) => ({ ...prev!, [type]: text }));

  return (
    <SafeAreaView>
      <ScrollView style={styles.scroll_view_container}>
        <View style={styles.logo_container}>
          <Image style={styles.logo_style} source={logo} />
          <Text style={styles.title_text_style}>
            Sign up to create an account
          </Text>
        </View>

        <View style={styles.form_container}>
          <AuthInput
            placeholder="Enter your email"
            handleChangeText={(text) => handleChangeText(text, "email")}
            label="Email"
            value={form.email}
          />

          <AuthInput
            placeholder="Enter password"
            handleChangeText={(text) => handleChangeText(text, "password")}
            label="Password"
            value={form.password}
          />

          <AuthInput
            placeholder="Repeat password"
            label="Repeat password"
            value={form.password}
          />

          <Button label="Sign up" onPress={() => Alert.alert("Hello World")} />
        </View>

        <View>
          <View style={styles.auth_p}>
            <AntDesign name="facebook-square" size={24} color="blue" />{" "}
            <Text>Facebook</Text>
          </View>

          <View style={styles.auth_p}>
            <FontAwesome name="google" size={24} color="green" />
            <Text>Google</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo_style: {
    width: 121,
    height: 121,
  },
  logo_container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginTop: 32,
  },
  scroll_view_container: {
    minHeight: "100%",
  },
  title_text_style: {
    marginTop: 12,
    color: "#181E22",
    fontWeight: 700,
    fontSize: 18,
  },
  form_container: {
    marginTop: 24,
    gap: 24,
  },
  auth_p_container: {
    display: "flex",
    justifyContent: "space-between",
  },
  auth_p: {
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: "center",
    display: "flex",
    gap: 12,
    color: "#181E22",
    fontSize: 16,
    borderColor: "#181E2210",
    borderRadius: 16,
  },
});
