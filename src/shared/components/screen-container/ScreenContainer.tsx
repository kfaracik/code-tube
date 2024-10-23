import React, { ReactNode } from "react";
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

type ScreenContainerProps = {
  children: ReactNode;
  scrollView?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const ScreenContainer = ({
  children,
  scrollView,
  style,
}: ScreenContainerProps) => {
  return scrollView ? (
    <ScrollView style={[styles.container, style]}>{children}</ScrollView>
  ) : (
    <View style={[styles.container, style]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
