import React from 'react';
import './myGrievance.css';
import Nav from '../components/nav';
import { Button, FormControl } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
 import { GRIEVANCE_URL } from '../API/config';
import { RadioGroup,Radio,FormControlLabel,FormLabel} from '@mui/material';
import { fetchAddgrievances } from '../API/calls';
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import {MenuItem,InputLabel,Select} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import axios from "axios";
import Header from '../components/header';

const theme = createTheme({
  palette: {
    primary: {
      main: "#8DD3BB",
    },
  },
});


function MyGrievance() {
   const [isShown, setIsShown] = useState(false);
  const [userId,setUserId] = useState("");
  const [category,setCategory] = useState("");
  const [body,setBody]=useState("");
  const [title,setTitle]=useState("");
  const [hosteldet, setHostel] = useState(false);
  const [floor, setFloor]=useState("");
  const [block, setBlock]=useState("");
  const [year, setYear]=useState("");
  const [dept, setDept]=useState("");
  const [gender, setGender] = useState("");
  const [deptdet, setDepart]=useState(false);
  
  const handleSubmit = ()=>{
    axios.post(GRIEVANCE_URL,{userId:userId,category:category,title:title,body:body,department:{dept:dept,year:year},hostel:{floor:floor,block:block,gender:gender}});
  }

  const handleName = event => {
    setIsShown(true);
  };
  const handleAnon = event => {
    setIsShown(false);
  };

  const hostelShow = event => {
    setHostel(true);
    setDepart(false);
  };

  const showNone = event => {
    setDepart(false);
    setHostel(false);
  }

  const deptShow = event =>{
    setDepart(true);
    setHostel(false);
  }


  // const [content, setContent] = useState("");

  // useEffect(() => {
  //   axios.get(GRIEVANCE_URL).then((res) => {
  //     setContent(res.data[0].content);
  //   });
  // }, []);

  // const handleUpdate = async () => {
  //     const postBody = {
  //       content: content,
  //     };
  //     toast.promise(fetchAddgrievances(postBody), {
  //       loading: "Adding...",
  //       success: "Added Successfully",
  //       error: (err) => `Error: ${err.response.data.error}`,
  //     });
  //     window.location.reload();
  // };

  return (
<div className="gen">
  <Header />
  <Nav></Nav>
  <div className='whole'>
    <div className="check">
      <div className='heading'>
      <h3 className='text1'>Post Your Queries Here</h3>
      </div>
      <div className="check1">
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group" style={{ fontSize:"20px",fontWeight:"500"}}>UserName</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            // value={value}
            // onChange={handleChange}
            row
          >
            <FormControlLabel value="username" control={<Radio />} onChange={handleName} label="Username" />
            <FormControlLabel value="anonymous" control={<Radio />} onChange={handleAnon}label="Anonymous" />
          </RadioGroup>
        </FormControl>
            {isShown && (
                    <div>
                      <TextField inputProps={{ sx: {width: '300px'} }}  id="outlined-basic" label="Name" variant="outlined"  onChange={(event)=>{
                        setUserId(event.target.value);
                      }} />
                    </div>
                  )}
      </div>
    </div>
    <br></br>
  <div style={{width:"330px"}}>
    <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
  
                                label="Category"
                                onChange={(event)=>{
                                  setCategory(event.target.value);
                                }}
                            >
                                <MenuItem value={"hostel"} onClick={hostelShow}>Hostel</MenuItem>
                                <MenuItem value={"general"} onClick={showNone}>General</MenuItem>
                                <MenuItem value={"department"} onClick={deptShow}>Department</MenuItem>
                                <MenuItem value={"canteen"} onClick={showNone}>Canteen</MenuItem>
                            </Select>
                        </FormControl>
                        <p></p>
                        {hosteldet && (
                          <div style={{display:"flex"}}>
                            <table>
                              <tr>
                              <td>
                            <FormControl fullWidth style={{width:"150px"}}>
                            <InputLabel id="demo-simple-select-label">Floor</InputLabel>
                            <Select 
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
  
                                label="Floor"
                                onChange={(event)=>{
                                  setFloor(event.target.value);
                                }}>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        </td>
                        <td>
                        <FormControl fullWidth style={{width:"150px"}}>
                            <InputLabel id="demo-simple-select-label">Block</InputLabel>
                            <Select 
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
  
                                label="Block"
                                onChange={(event)=>{
                                  setBlock(event.target.value);
                                }}>
                                <MenuItem value={"Q"}>Q</MenuItem>
                                <MenuItem value={"L"}>L</MenuItem>
                                <MenuItem value={"M"}>M</MenuItem>
                                <MenuItem value={"N"}>N</MenuItem>
                                <MenuItem value={"K"}>K</MenuItem>
                            </Select>
                        </FormControl>
                        </td>
                        <td>
                        <FormControl fullWidth style={{width:"150px"}}>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select 
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
  
                                label="Hostel"
                                onChange={(event)=>{
                                  setGender(event.target.value);
                                }}>
                                <MenuItem value={"Boys"}>Boys Hostel</MenuItem>
                                <MenuItem value={"Girls"}>Girls Hostel</MenuItem>
                            </Select>
                        </FormControl>
                        </td>
                        </tr>
                        </table>
                      
                          </div>
                          )}

                        {deptdet && (
                          <div >
                            <table>
                              <tr>
                                <td>
                            <FormControl fullWidth style={{width:"200px"}}>
                            <InputLabel id="demo-simple-select-label">Year</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
  
                                label="Year"
                                onChange={(event)=>{
                                  setYear(event.target.value);
                                }}>
                                <MenuItem value={"1"}>1</MenuItem>
                                <MenuItem value={"2"}>2</MenuItem>
                                <MenuItem value={"3"}>3</MenuItem>
                                <MenuItem value={"4"}>4</MenuItem>
                                <MenuItem value={"5"}>5</MenuItem>
                            </Select>

                        </FormControl>
                        </td>
                        <td>
                        <FormControl fullWidth style={{width:"200px"}}>
                            <InputLabel id="demo-simple-select-label">Department</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
  
                                label="Department"
                                onChange={(event)=>{
                                  setDept(event.target.value);
                                }}>
                                <MenuItem value={"CSE"}>CSE</MenuItem>
                                <MenuItem value={"IT"}>IT</MenuItem>
                                <MenuItem value={"ECE"}>ECE</MenuItem>
                                <MenuItem value={"EEE"}>EEE</MenuItem>
                                <MenuItem value={"Production"}>Production</MenuItem>
                                <MenuItem value={"Mechanical"}>Mechanical</MenuItem>
                                <MenuItem value={"Biomed"}>Biomed</MenuItem>
                                <MenuItem value={"AMCS"}>AMCS</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>
                            </Select>
                        </FormControl>
                        </td>
                        </tr>
                        </table>
                          </div>
                          )}



                        </div>
                        <br></br>
                        <div>
                            <label style={{ fontSize:"22px",fontWeight:"400"}}>Query Title : </label>
                            <br></br>
                            <textarea
                            
                            onChange={(event)=>{
                              setTitle(event.target.value);
                            }}
                            cols={70}
                            fontSize={16}
                            />
                        </div>
                        <br></br>
                        <div>
                            <label style={{ fontSize:"22px",fontWeight:"400"}}>Query Body : </label>
                            <br></br>
                            <textarea
                            onChange={(event)=>{
                              setBody(event.target.value);
                            }}
                            rows={5}
                            fontSize={16}
                            cols={70}
                            />
                        </div>
                
        <div className='box1' style={{padding:"12px 430px"}}>
          <table>
            <tr>
              
              <td><ThemeProvider theme={theme}>
                        <Button  style={{width: '100px',fontSize:"14px",padding:'8px'}} variant="contained" onClick={handleSubmit}>Post</Button>
                        </ThemeProvider></td>
            </tr>
          </table>
        </div>
  </div>  
</div>
  )
}

export default MyGrievance;
/* 
Dummy data:

{

"userId":"20z337-Sach",
"title":"Need cashless payment",
"body":"It will be very convenient if we could have cashless transaction in canteen.",
"category":"general"

}
*/