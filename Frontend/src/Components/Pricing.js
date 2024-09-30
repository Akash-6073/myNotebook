import React from 'react'
import FootAbout from './FootAbout'
import { NavLink as Link } from 'react-router-dom'
function Pricing() {
  return (
    <>
         <div className='pricing'>
           <div className="price">
            <h1 style={{fontFamily:"var(--font3)",fontWeight:"lighter"}}>Pricing</h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet consequatur illo? Iusto unde est reprehenderit expedita, accusantium asperiores! Est consequuntur quae enim assumenda?</p>
           </div>
            <div className="priceCards">
                  <div className="priceCard zoom">
                      <h2>Free</h2>
                      <div className="lpc">
                      <h3 style={{fontSize:"25px",fontWeight:"500",padding:"15px 0"}}>$0 <span style={{opacity:"0.5",fontWeight:"lighter"}}>/ mo</span> </h3>
                          <p>
                          10 users included </p>
                          <p>
                          1 GB of storage 
                          </p>
                          <p>
                          Email support 
                          </p>
                          <p>
                          Help center access
                          </p>
                      <Link to={localStorage.getItem('token')?'/home':'/signup'}><button className='btn btn2 pbtn1'>{localStorage.getItem('token')?"Start for free":"Sign up for free"}</button></Link>
                      </div>
                  </div>
                  <div className="priceCard zoom pcard2" style={{scale:"1.2"}}>
                      <h2>Pro</h2>
                      <div className="lpc">
                      <h3 style={{fontSize:"25px",fontWeight:"500",padding:"15px 0"}}>$15 <span style={{opacity:"0.5",fontWeight:"lighter"}}>/ mo</span> </h3>
                          <p>
                          15 users included </p>
                          <p>
                          5 GB of storage 
                          </p>
                          <p>
                          Priority email support 
                          </p>
                          <p>
                          Help center access
                          </p>
                      <Link><button className='btn btn2 pbtn2'>Get Started</button></Link>
                      </div>
                  </div>
                  <div className="priceCard zoom">
                      <h2>Enterprise</h2>
                      <div className="lpc">
                      <h3 style={{fontSize:"25px",fontWeight:"500",padding:"15px 0"}} >$29 <span style={{opacity:"0.5",fontWeight:"lighter"}}>/ mo</span> </h3>
                          <p>
                          20 users included </p>
                          <p>
                          10 GB of storage 
                          </p>
                          <p>
                          Phone and email support 
                          </p>
                          <p>
                          Help center access
                          </p>
                      <Link><button className='btn btn2 pbtn2'>Get Started</button></Link>
                      </div>
                  </div>
            </div>
        <hr className='quoteHr' style={{marginTop:"45px",marginBottom:"65px"}}/>
         </div>

   <FootAbout/>
    </>
  )
}

export default Pricing
