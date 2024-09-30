import React ,{useState} from "react";
import NoteContext from "./NoteContext";
const NoteState = (props)=>{
  const host ="https://inotebook-2ghd.onrender.com"
    const notesInitial=[];
    const [notes, setnotes] = useState(notesInitial)


    // add a note
    const addNote =async (title,description)=>{
      // API CALL
      const response = await fetch(`${host}/api/notes/addNote`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "token":localStorage.getItem('token')
        },
        body: JSON.stringify({title,description}), // body data type must match "Content-Type" header
      });
      //  ADD notes in client
      const note= await response.json();
      setnotes(notes.concat(note))    // concat returns an arrray

    }



    // Fetch all notes
    const fetchNote =async ()=>{
      // API CALL
      const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
          "token":localStorage.getItem('token')
        },
      });
      const json= await response.json();
      console.log(json)
      setnotes(json)
    }



    // delete a note
    const deleteNote =async(id)=>{
      // API CALL
      const response = await fetch(`${host}/api/notes/deleteNotes/${id}`, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
          "token":localStorage.getItem('token')
        },
      });
      const json= response.json();
      console.log(json)
      // delete in Client
      const newNotes = notes.filter((note)=>{
          return  note._id!==id;
      })
      setnotes(newNotes)
      console.log("deleting nte with id : "+id)
      
    }

    
    // edit a note
    const editNote =async (id,title,description)=>{
      // API Call 
      const response = await fetch(`${host}/api/notes/updateNotes/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
          "token":localStorage.getItem('token')
        },
        body: JSON.stringify({title,description}), // body data type must match "Content-Type" header
      });
      const json= await response.json();
      console.log(json)
      
      // Edit in client 
      // for (let index = 0; index < notes.length; index++) {
      //   const element = notes[index];
      //   if(element._id===id)
      //   {
      //      notes[index].title=title;
      //      notes[index].description=description;
      //     break;
      //   }
      // }
      // setnotes(notes);
      fetchNote();
    }
    
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,fetchNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState