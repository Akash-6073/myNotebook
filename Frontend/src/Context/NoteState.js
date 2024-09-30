import React, { useState } from "react";
import NoteContext from "./NoteContext";
import axios from "axios";

const NoteState = (props) => {
  const host =process.env.REACT_APP_NOTES_URL
  const notesInitial = [];
  const [notes, setnotes] = useState(notesInitial);

  // Add a note
  const addNote = async (title, description) => {
    try {
      const response = await axios.post(
        `${host}/api/notes/addNote`,
        { title, description },
        {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
        }
      );
      const note = response.data;
      setnotes(notes.concat(note)); // Append the new note to the state
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Fetch all notes
  const fetchNote = async () => {
    try {
      const response = await axios.get(`${host}/api/notes/fetchAllNotes`, {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      });
      setnotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Delete a note
  const deleteNote = async (id) => {
    try {
      await axios.delete(`${host}/api/notes/deleteNotes/${id}`, {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      });
      // Update the state after deletion
      const newNotes = notes.filter((note) => note._id !== id);
      setnotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Edit a note
  const editNote = async (id, title, description) => {
    try {
      await axios.put(
        `${host}/api/notes/updateNotes/${id}`,
        { title, description },
        {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
        }
      );
      // Optionally re-fetch notes to refresh the client-side data
      fetchNote();
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, fetchNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
