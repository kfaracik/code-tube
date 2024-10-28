import React, { type ReactNode } from "react";
import { Platform, StyleSheet } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";

type LinkProps = {
  children?: ReactNode;
  onPress: VoidFunction;
};

export const Link = ({ children, onPress }: LinkProps) => {
  return (
    <TouchableRipple onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#2B2D42",
    textDecorationLine: "underline",
    fontSize: 13,
    textAlign: "center",
    marginBottom: Platform.select({
      android: -4,
      ios: -2,
    }),
  },
});
