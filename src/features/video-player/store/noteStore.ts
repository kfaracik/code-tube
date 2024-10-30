import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTES_KEY_PREFIX = "video_notes_";

export const saveNote = async (
  videoId: string,
  note: { text: string; timestamp: number }
) => {
  const notesKey = `${NOTES_KEY_PREFIX}${videoId}`;
  const existingNotes = await getNotes(videoId);
  existingNotes.push(note);
  await AsyncStorage.setItem(notesKey, JSON.stringify(existingNotes));
};

export const getNotes = async (videoId: string) => {
  const notesKey = `${NOTES_KEY_PREFIX}${videoId}`;
  const notes = await AsyncStorage.getItem(notesKey);
  return notes ? JSON.parse(notes) : [];
};
