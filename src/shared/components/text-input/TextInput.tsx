import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { TextInput as TextInputRNP, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

type TextInputProps = {
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
  resultCount?: number;
  style?: ViewStyle;
};

export const TextInput = ({
  placeholder,
  value,
  onChangeText,
  resultCount,
  style,
}: TextInputProps) => {
  const { t } = useTranslation();

  return (
    <>
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
        style={[styles.input, style]}
        editable={!!onChangeText}
        outlineColor="#2B2D42"
        outlineStyle={styles.outlineStyle}
      />
      {!!resultCount && value && (
        <Text style={styles.resultText}>
          {t("common.resultCount", { count: resultCount })}
          <Text style={styles.resultTextBold}>{`"${value}"`}</Text>
        </Text>
      )}
    </>
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
  resultText: {
    marginLeft: 24,
    fontSize: 10,
    color: "#2B2D42",
    marginBottom: 4,
  },
  resultTextBold: {
    marginLeft: 24,
    fontSize: 10,
    color: "#2B2D42",
    fontWeight: "bold",
    marginBottom: 4,
  },
});
