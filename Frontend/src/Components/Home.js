import React, {useEffect} from 'react'
import Notes from './Notes';
import Login from './Login';
import { animateScroll } from 'react-scroll';
import { useLocation } from 'react-router-dom';
// import Login from './login';
function Home() {
  let location = useLocation();

  useEffect(() => {
    animateScroll.scrollToTop({
    });
}, [location.pathname]);
  

  return (
    <>
    <div className='viewNotes'>
       
          <div className='viewRight'>
            {!localStorage.getItem('token')&&<Login/> }
             {localStorage.getItem('token')&&<Notes/>}
          </div>
      </div>
      
    </>

  )
}

export default Home
