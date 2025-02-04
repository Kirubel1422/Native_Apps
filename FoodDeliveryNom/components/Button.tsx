import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type ButtonPropType = {
  label: string;
  onPress: () => void;
  variant?: string;
};

const Button = ({ label, onPress, variant }: ButtonPropType) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.button_text}>{label}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#0D5EF9",
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 57,
    alignItems: "center",
  },
  button_text: {
    color: "white",
    fontWeight: 600,
    fontSize: 16,
    textTransform: "uppercase",
  },
});
