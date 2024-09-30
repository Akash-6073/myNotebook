import React  from "react";
import 'react-toastify/dist/ReactToastify.css';
function Noteitem(props) {
  const { note , updateNote ,delNote,viewNote } = props;
    
    // var dt = new Date(note.date);
  return (
    <>
      <div className="cards">
        <div className="card"  >
          <div className="noteEdit" style={{textAlign:"left"}}>
            <div style={{display:"flex",alignItems:"center",flexWrap:"wrap-reverse"}}>

                    <h1 className="heading headOver" style={{textAlign:"left"}}>{note.title}  &nbsp;
                    {/* <i className="fa-solid fa-pen-to-square para editPen" onClick={()=>{updateNote(note)}} style={{ cursor:"pointer"}} ></i> */}
                    </h1>
            </div>
          </div>
         <p className="paraOver">{note.description}</p>   
          <div className="edits" style={{textAlign:"left"}}>
          <div className="editBtns">
                  {/* <i onClick={()=>{deleted();deleteNote(note._id)}}  className="fa-solid fa-trash-can" ></i> */}
                  <button className="editBtn" onClick={()=>{viewNote(note)}} style={{ cursor:"pointer"}} >View Note &nbsp;
                  <i style={{paddingRight:'10px'}}  onClick={()=>{viewNote(note)}} className="fa-solid fa-eye"></i>
                  </button>
                  <div>

                  <i onClick={()=>{updateNote(note)}} className="fa-solid fa-pen-to-square deli" ></i>
                  <i onClick={()=>{delNote(note)}}  className="fa-solid fa-trash-can deli" ></i>
                  </div>
            </div>
           
         
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Noteitem;
