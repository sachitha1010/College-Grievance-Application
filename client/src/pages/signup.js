import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './login.css';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {MenuItem,InputLabel,Select,FormControl} from '@mui/material';
import axios from "axios";


const theme = createTheme({
  palette: {
    primary: {
      main: "#8DD3BB",
    },
  },
});


function Signup() {
  
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:3001/api/signup", {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
        role:inputs.role,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // send http request
    sendRequest().then();
  };
  return (

    <div className="main">
        <div className="boxsignup" style={{ padding:"150px"}}>
                        <h1>Sign Up</h1>
                        <p></p>
                        <TextField inputProps={{ sx: {width: '300px'} }}  id="outlined-basic" label="Name" variant="outlined" onChange={handleChange} value={inputs.name} />
                        <p></p>
                        <TextField inputProps={{ sx: {width: '300px'} }}  id="outlined-basic" label="Email" variant="outlined" onChange={handleChange} value={inputs.email}/>
                        <p></p>
                        <TextField inputProps={{ sx: {width: '300px'} }}  id="outlined-basic" label="Password" variant="outlined" onChange={handleChange} value={inputs.password} />
                        <p></p>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={inputs.role}
                                label="Role"
                                onChange={handleChange}>
                                  
                                <MenuItem value={"student"}>Student</MenuItem>
                                <MenuItem value={"faculty"}>Faculty</MenuItem>
                                <MenuItem value={"admin"}>Admin</MenuItem>
                            </Select>
                        </FormControl>
                        <p></p>
                        <ThemeProvider theme={theme}>
                        <Button  style={{width: '329px',fontSize:"14px",fontWeight:'600',padding:'12px'}}variant="contained" onSubmit={handleSubmit}>Signup</Button>
                        </ThemeProvider>
            </div>
    </div>
  )
}

export default Signup
