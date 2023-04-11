import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './login.css';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {MenuItem,InputLabel,Select,FormControl} from '@mui/material';
import axios from "axios";
import { Link,Navigate } from 'react-router-dom';


const theme = createTheme({
  palette: {
    primary: {
      main: "#8DD3BB",
    },
  },
});


function Signup() {
  
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [redirect,setRedirect] = useState(false);
 
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:3001/api/register', {
      method: 'POST',
      body: JSON.stringify({name,email,password,role}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.ok) {
      alert('registration successful');
      setRedirect(true);
    } else {
      alert('registration failed');
    }
  }
  if(redirect){
    return <Navigate to={'/'} />
  }
  return (
    <div className="main">
        <div className="boxsignup" style={{ padding:"150px"}}>
                        <h1>Sign Up</h1>
                        <p></p>
                        <TextField inputProps={{ sx: {width: '300px'} }}  id="outlined-basic" label="Name" variant="outlined" value={name} onChange={ev => setName(ev.target.value)}  />
                        <p></p>
                        <TextField inputProps={{ sx: {width: '300px'} }}  id="outlined-basic" label="Email" variant="outlined" value={email} onChange={ev => setEmail(ev.target.value)} />
                        <p></p>
                        <TextField inputProps={{ sx: {width: '300px'} }}  id="outlined-basic" label="Password" variant="outlined" value={password}y onChange={ev => setPassword(ev.target.value)}  />
                        <p></p>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={role}
                                label="Role"
                                onChange={ev => setRole(ev.target.value)}>
                                  
                                <MenuItem value={"student"}>Student</MenuItem>
                                <MenuItem value={"faculty"}>Faculty</MenuItem>
                                <MenuItem value={"admin"}>Admin</MenuItem>
                            </Select>
                        </FormControl>
                        <p></p>
                        <ThemeProvider theme={theme}>
                        <Button  style={{width: '329px',fontSize:"14px",fontWeight:'600',padding:'12px'}}variant="contained" onClick={register}>Signup</Button>
                        </ThemeProvider>
            </div>
    </div>
  )
}

export default Signup
