import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Button as ButtonRNP, Text } from "react-native-paper";

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export const Button = ({ title, onPress, style }: ButtonProps) => {
  return (
    <ButtonRNP onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </ButtonRNP>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    minHeight: 48,
    borderRadius: 12,
    backgroundColor: "#2B2D42",
  },
  text: {
    fontSize: 16,
    color: "#FFF",
  },
});
