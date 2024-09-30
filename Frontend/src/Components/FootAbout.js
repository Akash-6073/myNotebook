import React from 'react'

function FootAbout() {
  return (
    <>
    <div className="foot">
        <div className="footBook">
            <h1><i className="fa-solid fa-book-open" style={{color:"#ff004f"}}></i></h1>
        </div>
        <div>
            <ul className="ul">
                <li  className="footHeading">Features</li>
                <li>Cool stuff</li>
                <li>Random feature</li>
                <li>Team feature</li>
                <li>Stuff for developers</li>
                <li>Another one</li>
                <li>Last time</li>
            </ul>
        </div>
        <div>
            <ul className="ul">
                <li  className="footHeading">Resources</li>
                <li>Resource</li>
                <li>Resource name</li>
                <li>Another Resource</li>
                <li>Final resource</li>
            </ul>
        </div>
        <div>
            <ul className="ul">
                <li className="footHeading" >About</li>
                <li>Team</li>
                <li> Locations</li>
                <li>Privacy</li>
                <li>Terms</li>
            </ul>
        </div>
    </div>
        <div style={{backgroundColor:"#303846",fontWeight:"lighter",color:"white",textAlign:"center",padding:'15px 0'}}>
            <p style={{opacity:"0.6"}}> Copyright&copy; 2023 myNotebook All rights Reserved</p>
        </div>
    </>
  )
}

export default FootAbout
