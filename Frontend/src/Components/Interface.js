import React from 'react'
import { Link } from 'react-router-dom'
import inf from '../Images/add.png'
import edt from '../Images/edit.png'
import del from '../Images/del.png'
import main from '../Images/MAIN.png'
import Quotegen from './Quotegen'
import FootAbout from './FootAbout'

function Interface() {
 
  return (
    <>
    <div style={{minHeight:"100vh"}}>
        <div className="containerInterface mw1 mauto">
            <div className="topInter">
             <h1 className='heading'>A better online <span className='special blink'>myNotebook</span> app for work</h1>

            </div>
            <div className="bottomInter">
             <p className='para'>myNotebook makes easier to save their notes.</p>
            </div>
            <div className="buttonInterface">
                <Link to={localStorage.getItem('token')?"/home":"/login"}><button className=' para btn btn1'>Get Started <i className="fa-solid fa-arrow-right-long"></i></button></Link>
            </div>
        </div>
        
        {/* <hr className='quoteHr'/> */}
        <div className='interfaceSign'>
                <div className="isLeft">
                  <div>

                        <h2>" Start managing your notes today "</h2> 
          <p style={{opacity:"0.7"}}>- Say hello to your myNotebook work app - </p>
          <i className="fa-solid fa-arrow-down"></i>
                  </div>
          <Link style={{cursor:"auto"}} to={localStorage.getItem('token')?"/home":"/login"}><button className='btn btn1' style={{cursor:"pointer"}}>{localStorage.getItem('token')?"Start making notes":"Try for free"}</button></Link>
                </div>
                <div className="isRight">
                   <img className='zoom' src={main}alt="" />
                </div>
        </div>
       
        <div className="interfaceOptions">
          {/* <p style={{textAlign:"center",opacity:"0.7"}}>- Features -</p> */}
          <h1 style={{textAlign:"center"}}>Customize your <span style={{color:"#ff004f"}}>"myNotebook"</span>  with different views</h1>
          <div className="ifcards">
                <div className="ifcard zoom" style={{width:"18rem"}}>
                  {/* <h1 style={{textAlign:"center"}}>Add Note</h1> */}
                      <img  src={inf} alt="" />
                      <div className="descBtn">

                      <p style={{textAlign:'center',paddingBottom:'10px'}}>By selecting the "Add" option, users can input text content to generate a fresh note.This allows users to store various types of information The newly added notes are promptly available for viewing and further editing.</p>
                      <div style={{textAlign:"center"}}>
                      <Link to={localStorage.getItem('token')?"/home":"/login"}>    
                      <button className='btn btn1' style={{textAlign:"center"}}>Add Note</button>
                      </Link>
                      </div>
                      </div>
                </div>
                <div className="ifcard zoom" style={{width:"18rem"}}>
                {/* <h1 style={{textAlign:"center"}}>Edit Note</h1> */}

                      <img  src={edt} alt="" />
                      <div className="descBtn">

                      <p style={{textAlign:'center',paddingBottom:'10px'}}>By clicking on the "Edit" option, users can effortlessly update the content of their notes, ensuring that the platform remains dynamic and adaptable to their evolving needs. Updated changes are preserved</p>
                      <div style={{textAlign:"center"}}>
                      <Link to={localStorage.getItem('token')?"/home":"/login"}>    
                      <button className='btn btn1' style={{textAlign:"center"}}>Edit Note</button>
                      </Link>
                      </div>
                      </div>
                </div>
                <div className="ifcard zoom" style={{width:"18rem"}}>
                {/* <h1 style={{textAlign:"center"}}>Delete Note</h1> */}

                      <img  src={del} alt="" />
                      <div className="descBtn">

                      <p style={{textAlign:'center',paddingBottom:'10px'}}>By selecting a note and choosing the "Delete" option, users can initiate the removal process. To prevent accidental deletions and ensure data integrity, consider implementing a confirmation prompt.</p>
                      <div style={{textAlign:"center"}}>
                      <Link to={localStorage.getItem('token')?"/home":"/login"}>    
                      <button className='btn btn1' style={{textAlign:"center"}}>Delete Note</button>
                      </Link>
                      </div>
                      </div>
                </div>
                 
            
                
          </div>
        </div>
        <hr className='quoteHr' style={{marginTop:"65px"}}/>
        <div className="interfaceInfo" style={{textAlign:"center"}}>
            <Quotegen/>
        </div>
        </div>
        {/* <Foot/> */}
        <FootAbout/>
    </>
  )
}

export default Interface
