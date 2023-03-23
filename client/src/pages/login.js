import React from 'react';
import TextField from '@mui/material/TextField';
import './login.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../API/config';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: "#8DD3BB",
    },
  },
});

function Login() {
  const history = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword]=useState("");
  const [showPassword, setShowPassword] = useState(false);

  // const sendRequest = async () => {
  //   const res = await axios.post(`${API_URL}/login`,{email:email,password:password,})
  //     .catch((err) => console.log(err));
  //   const data = await res.data;
  //   return data;
  // };
  // const handleSubmit = (event)=>{
  //   event.preventDefault();
  //   sendRequest().then(() => history("/"));
  // };
  const handleSubmit =()=>{
    if(email=="admin@psgtech.ac.in" || email=="admin123@psgtech.ac.in"){
       setIsAdmin(true);
      }
  }

  return (

    <div className="main">
        <div className="box" style={{ padding:"150px"}}>
                        <h1>Login</h1>
                        <p></p>
                        <TextField inputProps={{ sx: {width: '300px'} }}  id="outlined-basic" label="Email" variant="outlined" onChange={(event)=>{setEmail(event.target.value);}}/>
                        <p></p>
                        <div style={{display:"flex"}}>
                        <TextField inputProps={{ sx: {width: '260px'} }} type={showPassword ? "text" : "password"} id="outlined-basic" label="Password" variant="outlined"  onClick={handleSubmit} onChange={(event)=>{setPassword(event.target.value);}}/>
                        <button onClick={() => setShowPassword(s => !s)}><VisibilityIcon></VisibilityIcon></button>
                        </div>
                        <p></p>
                        <ThemeProvider theme={theme}>
                          {isAdmin && (
                            <Link to="/giveapproval"><Button  style={{width: '329px',fontSize:"14px",fontWeight:'600',padding:'12px'}}variant="contained">Login</Button></Link>
                          )}
                          {!isAdmin && (
                            <Link to="/"><Button  style={{width: '329px',fontSize:"14px",fontWeight:'600',padding:'12px'}}variant="contained">Login</Button></Link>
                          )}
                        </ThemeProvider> 
                         
                        <Link to="/signup"><div  style={{width:"225px",justifyContent:"center"}}><h4>If already not a user, SignUp.</h4></div></Link>
            </div>
    </div>
  )
}

export default Login