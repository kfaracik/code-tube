import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Modal, Portal, RadioButton } from "react-native-paper";
import { Button } from "@shared/components";
import { useTranslation } from "react-i18next";
import { getSortOptions, SortOptions } from "../../utils/sortVideos";

type SortModalProps = {
  visible: boolean;
  onDismiss: () => void;
  sortOption: SortOptions | null;
  onSortConfirm: (option: SortOptions) => void;
};

export const SortModal = ({
  visible,
  onDismiss,
  sortOption,
  onSortConfirm,
}: SortModalProps) => {
  const { t } = useTranslation();
  const sortOptions = getSortOptions();

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modalContainer}
      >
        <Text style={styles.modalTitle}>{t("search.title")}</Text>
        {sortOptions.map((option) => (
          <View style={styles.radioContainer} key={option.key}>
            <RadioButton
              value={option.key}
              status={sortOption === option.key ? "checked" : "unchecked"}
              onPress={() => onSortConfirm(option.key)}
              color="#2B2D42"
              uncheckedColor="#fff"
            />
            <Text style={styles.optionText}>{t(option.label)}</Text>
          </View>
        ))}
        <Button
          style={styles.confirmButton}
          title={t("search.confirm")}
          onPress={onDismiss}
        />
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#8D99AE",
    padding: 24,
    borderRadius: 24,
    width: "80%",
    alignSelf: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    color: "#fff",
    fontSize: 14,
  },
  confirmButton: {
    paddingHorizontal: 8,
    alignItems: "center",
    marginTop: 16,
  },
});
