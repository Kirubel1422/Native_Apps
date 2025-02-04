import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

type AuthInputProps = {
  isActive?: boolean;
  label: string;
  handleChangeText?: (text: string) => void;
  placeholder?: string;
  value: string;
};

export const AuthInput = ({
  isActive,
  label,
  handleChangeText,
  placeholder,
  value,
}: AuthInputProps) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={handleChangeText}
        style={styles.text_input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "#181E22",
    marginLeft: 12,
    marginBottom: 12,
    fontSize: 12,
    fontWeight: 500,
  },
  text_input: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
  },
});
