import React, { useContext, useEffect ,useRef ,useState } from "react";
import NoteContext from "../Context/NoteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate } from "react-router-dom";

function Notes() {
  let delid;
  var ntit;
  var ndesc;
  let disable =0;
  const context = useContext(NoteContext);
  const {deleteNote}=context;
  const { notes ,addNote,fetchNote,editNote} = context;
  const [note,setnote] = useState({id:" " ,etitle:" ",edescription:" "})
  const [cNote, setcNote] = useState({tit:" ",des:" "})
  let navigate=useNavigate();
  const ref=useRef(null)
  useEffect(()=>{
    if(localStorage.getItem('token')){
    fetchNote();
    }
    else{
      navigate("/");
    }
     // eslint-disable-next-line
  },[])
  const deleted = () => toast.success('Deleted Succesfully!', {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    });;

  const updated = () => toast.success('Updated Succesfully!', {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    
    })
    ;;
  const notUpdated = () => toast.error('Please fill something to Update !', {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    
    })
    ;;

    const viewNote=(cnote)=>{
      ntit=cnote.title;
      ndesc=cnote.description;
      setcNote({
        tit:cnote.title,
        des:cnote.description
      })
      let b = document.querySelector('.viewPopup')
      let c=document.querySelector('.notesbg')
      b.classList.add("visibility")
      b.classList.remove("hide")
      c.classList.add("notesOpa")
      console.log(ntit)
    disable=1;

    }

  const updateNote =(currentNote)=>{
   let a=ref.current.click();
   let b = document.querySelector('.popup')
   let c=document.querySelector('.notesbg')
   setnote({id:currentNote._id, etitle:currentNote.title , edescription:currentNote.description})
   b.classList.add("visibility")
   b.classList.remove("hide")
   c.classList.add("notesOpa")
   disable=1;

  }
  const delNote=(cnote)=>{
    delid=cnote._id;
    let b = document.querySelector('.delPopup')
    let c=document.querySelector('.notesbg')
    b.classList.add("visibility")
    b.classList.remove("hide")
    c.classList.add("notesOpa")
    disable=1;

  }
  const deleteTheNote=()=>{
    deleteNote(delid);
  }
  const closePopup=()=>{
    // Close updatepop
   let b = document.querySelector('.popup')
    b.classList.remove("visibility")
    b.classList.add("hide")
   

  //  close delete pop
   let d = document.querySelector('.delPopup')
   d.classList.remove("visibility")
    d.classList.add("hide")

    // close View Popup
    let e = document.querySelector('.viewPopup')
    e.classList.remove("visibility")
    e.classList.add("hide")
   

   let c=document.querySelector('.notesbg')
   c.classList.remove("notesOpa")
   disable=0;

  }
  const handleclick=(e)=>{
      editNote(note.id,note.etitle,note.edescription)
      console.log("upadting note .... "+note);
      // console.log(note.id);
  }
const onChange=(e)=>{
setnote({...note,[e.target.name]: e.target.value})
}

  return (
    <>
    {/* EDIT POPUP */}
    <div className="popup" ref={ref}>
          <div className="encross">
            <h1>Edit Note</h1>
            <i onClick={closePopup} style={{cursor:"pointer",color:"#ff0051b5"}} className="fa-solid fa-xmark fa-2xl"></i>
          </div>
          <hr />
          <label htmlFor="">Title :</label>
          <input type="text"   id="etitle" value={note.etitle} name="etitle" onChange={onChange} />
          <label htmlFor="">Description :</label>
          <textarea type="text" style={{height:"55px"}} value={note.edescription} id="edescription" name="edescription" onChange={onChange}/>
          <hr />

          <div className="sd">
          <button className="close" onClick={closePopup}  style={{cursor:"pointer"}}>Cancel</button>
          <button className="changesNote" style={{cursor:"pointer"}} onClick={()=>{ note.edescription && note.etitle?updated():notUpdated();handleclick();closePopup()}}>Update Note</button>
          </div>
    </div>

    
    {/* DELETE POPUP */}
    <div className="delPopup">
      <div className="delCross" style={{textAlign:"right"}}>
         <i onClick={closePopup} style={{cursor:"pointer",color:"#ff0051b5"}} className="fa-solid fa-xmark fa-2xl"></i>
         <p style={{textAlign:"center"}}>Do you Want to delete the Note?</p>
      </div>

         <div className="del">
          <button className="close" onClick={closePopup} style={{cursor:"pointer"}}>Cancel</button>
          <button className="changesNote" style={{cursor:"pointer"}} onClick={()=>{deleted();deleteTheNote();closePopup()}}>Delete Note</button>
        </div>
    </div>

    {/* VIEW POPUP */}

    <div className="viewPopup" >
    <i onClick={closePopup} style={{cursor:"pointer",color:"#ff0051b5",textAlign:"right"}} className="fa-solid fa-xmark fa-2xl"></i>

       <h2 className="" style={{textAlign:"center",textDecoration:'underline',textUnderlineOffset:'8px',opacity:"0.8",padding:"20px 0"}}>{cNote.tit}</h2>
       <p >{cNote.des}</p>
      

    </div>

      <ToastContainer position="top-center"
                        autoClose={1500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                        theme="light" />
    <div className="notesbg" disabled={disable===1}>
    <AddNote/>

      <div className="notei">
        <h2 style={{fontFamily:"var(--font3)",padding:"25px 0"}}>Saved Notes - <i className="fa-regular fa-bookmark"></i></h2>
          { notes.length===0 && <h4 className="noNotes blink">No notes to display here</h4> }
        <div className="cards">
          {notes.map((note) => {
            return <Noteitem key={note._id} viewNote={viewNote} delNote={delNote}  updateNote={updateNote} note={note} />;
          })}
        </div>
      <hr className='quoteHr' style={{marginTop:"55px",marginBottom:"65px"}}/>
      </div>
    
      <div style={{backgroundColor:"#303846",fontWeight:"lighter",color:"white",textAlign:"center",padding:'25px 0'}}>
            <p style={{opacity:"0.6"}}> Copyright&copy; 2023 myNotebook All rights Reserved</p>
        </div>
    </div>
    </>
  );
}

export default Notes;
