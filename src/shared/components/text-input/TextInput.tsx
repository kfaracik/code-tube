import React from "react";
import { StyleSheet } from "react-native";
import { TextInput as TextInputRNP } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

type TextInputProps = {
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
};

export const TextInput = ({
  placeholder,
  value,
  onChangeText,
}: TextInputProps) => {
  const { t } = useTranslation();

  return (
    <TextInputRNP
      mode="outlined"
      placeholder={placeholder ?? t("common.searchHint")}
      value={value}
      onChangeText={onChangeText}
      left={
        <TextInputRNP.Icon
          icon={() => <Ionicons name="search" size={24} color="#2B2D42" />}
        />
      }
      style={styles.input}
      editable={!!onChangeText}
      outlineColor="#2B2D42"
      numberOfLines={1}
      outlineStyle={styles.outlineStyle}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 44,
    fontSize: 16,
  },
  outlineStyle: {
    borderWidth: 2,
    borderRadius: 16,
    backgroundColor: "#FFF",
  },
});
