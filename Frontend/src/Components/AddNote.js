import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../Context/NoteContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddNote() {
    const context = useContext(NoteContext)
    const {addNote} = context;
    const [note,setnote] = useState({title:"",description:""})
    const handleclick=()=>{
            addNote(note.title,note.description);
            setnote({title:"",description:""})
            toast.success('Note Added Succesfully!', {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              });;

    }
    const onChange=(e)=>{
        setnote({...note,[e.target.name]: e.target.value})
    }
  return (
    <div>
         <div className='containerHome viewLeft'>
            <div>
              <h1 style={{fontFamily:"var(--font3)"}}>Add your Notes here</h1>
            </div>
            <div>
              <form action="">
                <input type="text"  name='title' value={note.title}  placeholder='Title' onChange={onChange} />
                <textarea id=''  type="text" name='description' value={note.description}   placeholder='Note' onChange={onChange} />
                <Link type='submit'  style={{cursor:'auto'}}><button  disabled={note.title.length===0 || note.description.length===0}  onClick={handleclick}  className='btn2 select'><i className="fa-solid fa-plus"></i> Add </button></Link>
                <ToastContainer position="bottom-right"
                        autoClose={1500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                        theme="light" />
              </form>
            </div>
          
          </div >
    </div>
  )
}

export default AddNote
