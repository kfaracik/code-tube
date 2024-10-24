import React, { ReactNode } from "react";
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={style}>{children}</ScrollView>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={(styles.container, style)}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
