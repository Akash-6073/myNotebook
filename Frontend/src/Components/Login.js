import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FootAbout from './FootAbout';

function Login() {
    const [credentials, setcredentials] = useState({email:"",password:""})
    let navigate = useNavigate();
    const handleSubmit =async(e)=>{
        e.preventDefault();
        const response = await fetch("https://inotebook-2ghd.onrender.com/api/auth/login", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },body: JSON.stringify({email:credentials.email,password:credentials.password}),
          });
          const json= await response.json();
          console.log(json);
          if(json.success)
          {
            // redirect
            localStorage.setItem('token',json.token) // this will save in the history
            setTimeout(() => {
              navigate("/home");
            }, 500);
            toast.success('Logged in Succesfully !', {
              position: "bottom-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });;
          }
          else{
            let msg;
            if(json.error==="Password Wrong")
            {
              msg="Invalid Password !!"
              document.querySelector('.passCheck').classList.add("error");
            }
            if(json.error==="User Wrong")
            {
              msg="Invalid Email !!"
              document.querySelector('.userCheck').classList.add("error");

            }
            setTimeout(()=>{
              document.querySelector('.passCheck').classList.remove("error");
              document.querySelector('.userCheck').classList.remove("error");
            },1000)
            toast.error(msg, {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });;
          }
    }
    const onChange  = (e)=>{
        e.preventDefault();
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    < >
        <div className="loginForm">
            <form action="" onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <hr />
            <div className="frm">
                <label htmlFor="">Email</label> 
                <div className="userCheck" style={{display:"flex",border:"1px solid white",alignItems:"center",backgroundColor:"#E8F0FE",borderRadius:"5px"}}>
                  <div >
                    <i style={{margin:"0 15px",color:"black"}} className="fa-solid fa-envelope"></i>
                  </div>
                    <input type="email" name='email'  onChange={onChange}  value={credentials.email} /> 
                </div> <br />
                <label htmlFor="">Password</label>
                <div className='passCheck' style={{display:"flex",border:"1px solid white",alignItems:"center",backgroundColor:"#E8F0FE",borderRadius:"5px"}}>
                    <i style={{margin:"0 15px"}} className="fa-solid fa-lock"></i>
                    <input type="password" name='password'  onChange={onChange} value={credentials.password} /> 
                </div><br />
                <button type='submit' className='sinup' style={{cursor:"pointer"}}>Sign in <i className="fa-solid fa-arrow-right-to-bracket"></i></button>
                <a >Don't have an Account? <Link to="/signup" style={{textDecoration:"underline",textUnderlineOffset:"3px"}}>Sign up</Link> </a>
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
            </form>
        </div>
        <FootAbout/>
    </>
  )
}

export default Login
