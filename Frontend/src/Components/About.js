import React from "react";
import akash from '../Images/akash.jpg'
import FootAbout from "./FootAbout";
function About() {
  // let a=useContext(NoteContext)
 
  
  return (
  <>
     <div className="about" style={{minHeight:'100vh'}}>
      <h1 className="" style={{fontFamily:"var(--font3)",textUnderlineOffset:"5px",textDecorationThickness:'1.5px',fontWeight:"lighter"}}>- About Us -</h1>
      <div className="aboutContainer">
        <div className="aboutLeft">
          <img src={akash} alt="" />
          <h2 style={{fontFamily:"var(--font3)",padding:"5px 0"}}>Developer <i className="fa-solid fa-code"></i></h2>
          <p>Our application myNotebook offers a sleek and intuitive interface for effortlessly capturing and managing your thoughts, ideas, and to-dos. Stay organized and inspired with the convenience of a digital notebook that adapts to your needs. <br />Made with <i className="fa-regular fa-heart"></i> by <span style={{textDecoration:"underline",textUnderlineOffset:"3px",}}>Akash Mahendrakar</span></p>
        </div>
        <div className="aboutRight">
          <h2 style={{fontFamily:"var(--font3)"}}>Contact me on</h2> 
          <div className="aboutMedia">
              
              <h1>
              <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/akash-mahendrakar-59b8a1220/" style={{color:"#0a66c2"  }}><i className="fa-brands zoom fa-linkedin"></i></a> 

              </h1>
              <h1>
    
              <a target='_blank' rel="noreferrer" href="https://www.instagram.com/akash__mahendrakar/"><i className="fa-brands zoom fa-instagram" style={{color:"#e1306c"  }}></i></a> 

              </h1>
              <h1>
           <a target='_blank' rel="noreferrer" href="https://github.com/Akash-6073"><i className="fa-brands zoom fa-github" style={{color:"#111"}}></i></a> 

              </h1>
          </div>
        </div>
      </div>
     </div>
     
    <FootAbout/>
     {/* <Foot/> */}
  </>
  )
}
export default About;