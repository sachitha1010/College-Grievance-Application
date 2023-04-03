import React from 'react';
import TextField from '@mui/material/TextField';
import './login.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext,useState } from 'react';
import axios from 'axios';
import { API_URL } from '../API/config';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {UserContext} from "../UserContext.js";

import { Navigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: "#8DD3BB",
    },
  },
});

function Login() {
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const [isadmin,setIsadmin]= useState(false);
  const {setUserInfo} = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      body: JSON.stringify({name, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        if(userInfo.role =="admin"){
          setIsadmin(true);
        }
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect && !isadmin) {
    return <Navigate to={'/general'} />
  }
  if (isadmin) {
    return <Navigate to={'/giveapproval'} />
  }

  return (

    <div className="main">
        <div className="box" style={{ padding:"150px"}}>
                        <h1>Login</h1>
                        <p></p>
                        <TextField inputProps={{ sx: {width: '300px'} }}  id="outlined-basic" label="Name" variant="outlined" onChange={ev => setName(ev.target.value)}/>
                        <p></p>
                        <div style={{display:"flex"}}>
                        <TextField inputProps={{ sx: {width: '260px'} }} type={showPassword ? "text" : "password"} id="outlined-basic" label="Password" variant="outlined"   onChange={ev => setPassword(ev.target.value)}/>
                        <button onClick={() => setShowPassword(s => !s)}><VisibilityIcon></VisibilityIcon></button>
                        </div>
                        <p></p>
                        <ThemeProvider theme={theme}>
                          
                          <Button  style={{width: '329px',fontSize:"14px",fontWeight:'600',padding:'12px'}}variant="contained" onClick={login}>Login</Button>
                          
                        </ThemeProvider> 
                         
                        <Link to="/signup"><div  style={{width:"225px",justifyContent:"center"}}><h4>If already not a user, SignUp.</h4></div></Link>
            </div>
    </div>
  )
}

export default Login