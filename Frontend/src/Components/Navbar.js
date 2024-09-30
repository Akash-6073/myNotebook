import React ,{useEffect} from 'react'
import { Link , useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Navbar() {


  //  Fetch user details  here !!

  // const [users, setusers] = useState([])  
  // const getTodos = async() => {
  //     try {
  //         const response = await fetch("http://localhost:5000/api/auth/getUser")
  //         const jsonData = await response.json();
  //         setusers(jsonData)
  //         console.log("This is error");

  //     } catch (err) {
  //         console.error("This is error"+err.message);
  //     }
  // }
  
  // useEffect (()=> {
  //     getTodos();
  // }, []);

  let navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  }, [location]);
  const handleLogout=()=>{
    localStorage.removeItem('token');
    toast.success('Logged out Succesfully!', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });;
      setTimeout(()=>{
        navigate('/login')
      },500)
      setTimeout(()=>{
        toast('🦄 Thanks For Visiting Our Site!', {
          position: "bottom-right",
autoClose: 2000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "dark",
          });
      },1000)
  }

  var navH="0";
  
  const closeNav=()=>{
    let navHt=document.querySelector('.nav-links')
    navHt.style.height="0";
    navH="0";

  
  }
  const openNav =()=>{
    let navHt=document.querySelector('.nav-links')
     if(navH==='0') 
     {
      navHt.style.height='415px'
      navH="415px"
     }
     else if(navH==='415px')
     {
      navHt.style.height="0"
      navH="0"
     }
  }

  

  return (
    <div>
       <div className="nav navbar mw1 mauto">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <Link to='/' >  <h1 className='mainHead' style={{color:"	#ff004f",cursor:"pointer"}}><i className="fa-solid fa-book-open"></i>&nbsp;myNotebook</h1>
              </Link>
        </div>
        <div className="nav-btn" onClick={openNav}>
          <label htmlFor= {navH!==0?"nav-check":""}  style={{ color:"black"}}>
            <span ></span>
            <span ></span>
            <span ></span>
          </label>
        </div>
        
        <div className="nav-links rightNav" >
        <Link onClick={closeNav}  className={`para opa rnavs  ${location.pathname==='/home' ? "active" :""}`}  to={localStorage.getItem('token')?"/home":"/login"}>  <i className={!localStorage.getItem('token') ? "fa-solid fa-house-lock" :"fa-solid fa-house" }></i> Home</Link>
               <Link onClick={closeNav} className={`para opa rnavs ${location.pathname==='/about' ? "active" :""}`} to="/about">About</Link>
               <Link onClick={closeNav} className={`para opa rnavs ${location.pathname==='/pricing' ? "active":""}`} to="/pricing"><i className="fa-solid fa-indian-rupee-sign"></i> Pricing</Link>
               <Link onClick={closeNav} className={`para opa rnavs ${location.pathname==='/features' ?"active" :""}`} to="/features">Features</Link>
               <span className= "vertical"></span>
            {!localStorage.getItem('token') ? <div className='lginSignup'>
               <Link onClick={closeNav} to="/login"><button className='para login' style={{cursor:"pointer",outline:"0",border:"0",fontWeight:"bold"}}>Sign in &nbsp;<i className="fa-solid fa-user"></i></button></Link>
               <Link onClick={closeNav} to="/signup"><button className='para btn siup'  style={{cursor:"pointer",backgroundColor:"#ff004f",color:"white"}}>Start for Free</button></Link>

               </div> :
               <div className=''>
               {/* <Link  ><button className='para login' style={{cursor:"pointer",outline:"0",border:"0",fontWeight:"bold"}}>User &nbsp;<i className="fa-solid fa-user"></i></button></Link> */}
               <button  className='para btn lout' onClick={()=>{handleLogout();closeNav()}} style={{cursor:"pointer",backgroundColor:"#ff004f",color:"white"}}>Sign Out&nbsp; <i className="fa-solid fa-right-from-bracket"></i></button>
               </div>
              }
        </div>
      </div>
         {/* <div className="navbar mw1 mauto">
            <div className="leftNav">
              <Link to='/'>  <h1 className='mainHead' style={{color:"	#ff004f",cursor:"pointer"}}><i className="fa-solid fa-book-open"></i>&nbsp;myNotebook</h1>
              </Link>
                
            </div>
            <div className="rightNav">
               <Link className={`para opa rnavs ${location.pathname==='/home' ? "active" :""}`} to="/home">Home</Link>
               <Link className={`para opa rnavs ${location.pathname==='/about' ? "active" :""}`} to="/about">About</Link>
               <Link className={`para opa rnavs ${location.pathname}`} to="/about">Pricing</Link>
               <Link className={`para opa rnavs ${location.pathname}`} to="/about">Features</Link>
               <span className= "vertical"></span>
            {!localStorage.getItem('token') ? <div>
               <Link to="/login"><button className='para login' style={{cursor:"pointer",outline:"0",border:"0",fontWeight:"bold"}}>Login &nbsp;<i className="fa-solid fa-user"></i></button></Link>
               <Link to="/signup"><button className='para btn'  style={{cursor:"pointer",backgroundColor:"#ff004f",color:"white"}}>Start for Free</button></Link>

               </div> :
               
               <button  className='para btn' onClick={handleLogout} style={{cursor:"pointer",backgroundColor:"#ff004f",color:"white",marginLeft:'25px'}}>Log Out&nbsp; <i className="fa-solid fa-right-from-bracket"></i></button>
              }
                <i className="fa-solid fa-bars checkbtn" id='check'></i>
            </div>
      </div> */}
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
    </div>
  )
}

export default Navbar
