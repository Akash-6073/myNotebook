import React from 'react'
import FootAbout from './FootAbout'
import { useTypewriter ,Cursor } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
function Features() {
   const [writer] =useTypewriter({
    words: ['Start using digital "Notes" ',`Add your to-do's `,'Inkless Ideas Flow...'],
    loop:{},
    typeSpeed:30,
    deleteSpeed:10
  });
  return (
    <>
    <div className='features'> 
        <div className=" interfaceType" style={{textAlign:"center"}}>
                      <div style={{paddingTop:"85px"}}> 
                          <span>{writer}</span><Cursor/>
                      </div>
        </div>
         
        <div className="interfaceOptions featuresOption">
          <p style={{textAlign:"center",opacity:"0.7"}}>- Features -</p>
          <h1 style={{textAlign:"center"}}>Personalize notes effortlessly with <span style={{color:"#ff004f"}}>"myNotebook" </span>features</h1>
        </div>

        <div className="interests">
        <div className="interestsLeft">
        </div>
        <div className="interestsRight ">
            <div className={ " transHide designs"}>
            <span><i className="fa-solid fa-add"></i></span>
                <h3>Add Note</h3>
                <p>The Add feature is a user-friendly tool that enables individuals to create new notes effortlessly within the mynotebook platform.  </p>
            </div>
            <div className={ " transHide designs"} >
            <span><i className="fa-solid fa-edit"></i></span>
                <h3>Edit Note</h3>
                <p>The Edit feature on your mynotebook website allows users to make seamless modifications to their existing notes. </p>
            </div>
            <div className={ " transHide designs"}>
                <span> <i className="fa-solid fa-trash-can"></i></span>
                <h3>Delete Note</h3>
                <p>The Delete feature provides users with the capability to efficiently remove unwanted or obsolete notes from their mynotebook account. </p>
            </div>
            <div className={ " transHide designs"}>
                <span> <i className="fa-solid fa-eye"></i></span>
                <h3>View Note</h3>
                <p>The View feature serves as the gateway to a comprehensive display of all saved notes on the mynotebook platform. </p>
            </div>
            <div className={ " transHide designs"} style={{height:'100%'}}>
                <span> <i className={localStorage.getItem('token')?"fa-solid fa-user":"fa-solid fa-lock"}></i></span>
                <p>{localStorage.getItem('token')?"Empower logged-in users to effectively manage their notes with enhanced features for editing, adding, deleting, and viewing on the mynotebook website.":"Logged-in users can access the Edit, Add, Delete, and View features on the mynotebook website, enabling seamless note management"}</p>
                <h3>{localStorage.getItem('token')? <Link to='/home'><button className='btn featureBtn' style={{cursor:"pointer"}}>Start making notes  <i className="fa-solid fa-arrow-right"></i> </button></Link>  :<Link to={'/login'}><button className='btn featureBtn' style={{cursor:"pointer"}}>Login / Sign up</button></Link>}</h3>
            </div>
        </div>
    </div>
    </div>
        <hr className='quoteHr' style={{marginTop:"65px",marginBottom:'65px'}}/>
      <FootAbout/>

    </>
  )
}

export default Features
