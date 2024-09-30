import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  let navigate = useNavigate();
  let location = useLocation();
  const [isSigningOut, setIsSigningOut] = useState(false); // State to manage sign-out status

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const handleLogout = () => {
    setIsSigningOut(true); // Set signing out state to true

    // Remove the token after a brief delay
    setTimeout(() => {
      localStorage.removeItem('token');
      toast.success('Logged out Successfully!', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setTimeout(() => {
        navigate('/home');
        setIsSigningOut(false); // Set signing out state to true

      }, 500);
      
    }, 1000); // Adjust delay as needed
  }

  const closeNav = () => {
    let navHt = document.querySelector('.nav-links');
    navHt.style.height = "0";
  }

  const openNav = () => {
    let navHt = document.querySelector('.nav-links');
    if (navHt.style.height === '0' || !navHt.style.height) {
      navHt.style.height = '415px';
    } else {
      navHt.style.height = "0";
    }
  }

  return (
    <div>
      <div className="nav navbar mw1 mauto">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <Link to='/'>
            <h1 className='mainHead' style={{ color: "#ff004f", cursor: "pointer" }}>
              <i className="fa-solid fa-book-open"></i>&nbsp;myNotebook
            </h1>
          </Link>
        </div>
        <div className="nav-btn" onClick={openNav}>
          <label htmlFor="nav-check" style={{ color: "black" }}>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links rightNav">
          <Link onClick={closeNav} className={`para opa rnavs ${location.pathname === '/home' ? "active" : ""}`} to={localStorage.getItem('token') ? "/home" : "/login"}>
            <i className={!localStorage.getItem('token') ? "fa-solid fa-house-lock" : "fa-solid fa-house"}></i> Home
          </Link>
          <Link onClick={closeNav} className={`para opa rnavs ${location.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
          <Link onClick={closeNav} className={`para opa rnavs ${location.pathname === '/pricing' ? "active" : ""}`} to="/pricing"><i className="fa-solid fa-indian-rupee-sign"></i> Pricing</Link>
          <Link onClick={closeNav} className={`para opa rnavs ${location.pathname === '/features' ? "active" : ""}`} to="/features">Features</Link>
          <span className="vertical"></span>
          {!localStorage.getItem('token') ? (
            <div className='lginSignup'>
              <Link onClick={closeNav} to="/login">
                <button className='para login' style={{ cursor: "pointer", outline: "0", border: "0", fontWeight: "bold" }}>
                  Sign in &nbsp;<i className="fa-solid fa-user"></i>
                </button>
              </Link>
              <Link onClick={closeNav} to="/signup">
                <button className='para btn siup' style={{ cursor: "pointer", backgroundColor: "#ff004f", color: "white" }}>
                  Start for Free
                </button>
              </Link>
            </div>
          ) : (
            <div className=''>
              <button
                className='para btn lout'
                onClick={() => { handleLogout(); closeNav(); }}
                style={{ cursor: "pointer", backgroundColor: "#ff004f", color: "white" }}>
                {isSigningOut ? 'Signing out...' : 'Sign Out'}&nbsp; 
                {isSigningOut ? "":<i className="fa-solid fa-right-from-bracket"></i>} 
              </button>
            </div>
          )}
        </div>
      </div>
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

export default Navbar;
