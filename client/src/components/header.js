import React from 'react'
import './nav.css';
import {Link,Navigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../UserContext.js";

const Header = () => {
   
  const {setUserInfo,userInfo} = useContext(UserContext);
  const [redirect,setRedirect] = useState(false);
    
    useEffect(() => {
      fetch('http://localhost:3001/api/profile', {
        credentials: 'include',
      }).then(response => {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
        });
      });
    }, []);

    function logout() {
        fetch('http://localhost:3001/api/logout', {
          credentials: 'include',
          method: 'POST',
        });
        setUserInfo(null);
        setRedirect(true);
      }
      const name = userInfo?.name;

      if (redirect)  {
        return <Navigate to={'/'} />
      }
  return (
    <div className="bar" >
        <h className='logo'>Grievance</h>
        {name && (
    <>
      <a onClick={logout} style={{paddingLeft:"350px"}}>Logout ({name})</a>
    </>
  )}
  {!name && (
    <>
      <Link to="/login" style={{paddingLeft:"350px"}}><a>Login</a></Link>
        <Link to="/signup" style={{paddingLeft:"50px"}}><a>SignUp</a></Link>
    </>
  )}
    </div>
  )
}

export default Header

