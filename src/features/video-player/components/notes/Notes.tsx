import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { getNotes, saveNote } from "../../store";
import { FlashList } from "@shopify/flash-list";
import { Card } from "react-native-paper";
import { Button } from "@shared/components";
import { useTranslation } from "react-i18next";

type NotesProps = {
  videoId: string;
  currentTime: number;
};

export const Notes = ({ videoId, currentTime }: NotesProps) => {
  const { t } = useTranslation();
  const [notes, setNotes] = useState<{ text: string; timestamp: number }[]>([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const savedNotes = await getNotes(videoId);
    setNotes(savedNotes);
  };

  const handleAddNote = async () => {
    if (newNote.trim() !== "") {
      const note = { text: newNote, timestamp: currentTime };
      await saveNote(videoId, note);
      setNotes((prevNotes) => [...prevNotes, note]);
      setNewNote("");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={100}>
      <View style={styles.notesContainer}>
        <FlashList
          data={notes}
          keyExtractor={(item, index) => `${index}`}
          estimatedItemSize={100}
          renderItem={({ item }) => (
            <Card style={styles.noteCard}>
              <Card.Content>
                <Text>{item.text}</Text>
                <Text style={styles.timestamp}>
                  {item.timestamp.toFixed(2)}s
                </Text>
              </Card.Content>
            </Card>
          )}
        />
      </View>
      <TextInput
        placeholder={t("notes.enterNote")}
        value={newNote}
        onChangeText={setNewNote}
        style={styles.input}
      />
      <Button
        title={t("notes.addNote")}
        onPress={handleAddNote}
        style={styles.button}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notesContainer: {
    flex: 1,
    minHeight: 100,
  },
  noteCard: {
    marginBottom: 8,
    borderRadius: 16,
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  timestamp: {
    fontSize: 12,
    color: "gray",
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginTop: 4,
  },
  input: {
    borderColor: "gray",
    marginTop: 16,
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  button: {
    marginHorizontal: 34,
    marginBottom: 24,
  },
});
