import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FootAbout from './FootAbout';


function Signup() {
  const [credentials, setcredentials] = useState({name:"",email:"",password:"",cpassword:""})
  let navigate = useNavigate();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response = await fetch("https://inotebook-2ghd.onrender.com/api/auth/createUser",{
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },body: JSON.stringify({name:credentials.name, email:credentials.email,password:credentials.password,cpassword:credentials.cpassword}),
    });
    const json= await response.json();
    console.log(json);
      // redirect
      // if(credentials.password!==credentials.cpassword)
      // {
      //   toast.error(`Password Doesn't Matches 😔`, {
      //     position: "top-center",
      //     autoClose: 1500,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: false,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "dark",
      //     });;
      // }
      if(json.success)
      {
      localStorage.setItem('token',json.token) // this will save in the history
      navigate("/home")
      toast.success('Signed Up Succesfully  👍 !', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
        console.log(json)

      }
      else if (credentials.name==="" || credentials.email==="" || credentials.password==="")
      {
       


          toast.error('Fill all the Details', {
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
      else if(credentials.name.length<3)
      {
        toast.error(`Username should be atleast 3 characters`, {
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
      
      else if(json.error="This user already exits")
      {
        toast.error(`User Already exists `, {
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
    <div>
      <div className='loginForm'>
      <form action="" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <hr />
            <div className="frm" >
                <label htmlFor="">Username</label> 

                <div style={{display:"flex",alignItems:"center",backgroundColor:"#E8F0FE",borderRadius:"5px"}}>
                    <i style={{margin:"0 15px"}} className="fa-solid fa-user"></i>
                    <input type="name" name='name'  onChange={onChange} value={credentials.name} /> <br />

                </div> <br />


                
                <label htmlFor="">Email</label> 

                <div style={{display:"flex",alignItems:"center",backgroundColor:"#E8F0FE",borderRadius:"5px"}}>
                    <i style={{margin:"0 15px"}} className="fa-solid fa-envelope"></i>
                    <input type="email" name='email'  onChange={onChange}  value={credentials.email} />

                </div> <br />


                <label htmlFor="">Password</label>

                <div style={{display:"flex",alignItems:"center",backgroundColor:"#E8F0FE",borderRadius:"5px"}}>

                    <i style={{margin:"0 15px"}} className="fa-solid fa-lock"></i>
                <input type="password" name='password'  onChange={onChange} minLength={5} value={credentials.password}   /> <br />

                </div> <br />
                {/* <input type="password" name='cpassword'  onChange={onChange} minLength={5} value={credentials.cpassword}   /> <br />
                <label htmlFor="">Confirm Password</label> */}
                <button type='submit'className='sinup' >Sign Up <i className="fa-solid fa-user-plus"></i>  </button>
                <a>Already have an Account? <Link to="/login" style={{textDecoration:"underline",textUnderlineOffset:"3px"}}>Sign in </Link> </a>
                <Link to='/' style={{textAlign:"center",color:"#ff004f",textDecoration:"underline",textUnderlineOffset:"5px"}}>- Why Create an account ? -</Link>
                
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
    </div>
  )
}

export default Signup
