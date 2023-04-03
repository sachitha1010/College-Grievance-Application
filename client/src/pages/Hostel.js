import React, { useContext, useEffect, useState } from "react";
import './generalPage.css';
import styled from 'styled-components';
import Nav from '../components/nav';
import Header from "../components/header";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import { GRIEVANCE_URL } from '../API/config';
import axios from "axios";
import {
  CardMedia,
} from "@mui/material";
import {MenuItem,InputLabel,Select,FormControl} from '@mui/material';
import moment from "moment";
const Container = styled.div`
  background: #ffffff;
  margin-top:20px;
  display: flex;
  justify-content:center; // 1
  flex-flow: column wrap; // 2
  width: 80%;
  height: 100%;
  padding-left:300px;
`;
const List = styled.div`
  display: flex;
  justify-content: center; // 3
  flex-flow: row wrap; // 4
`;

const Card = styled.div`
  margin: 20px;
  background: #fff;
  height: 400px;
  width: 1000px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-flow: column; // 5 
  padding:20px;
`;


export default function Hostel(){
  const[grievance,setGrievance]=useState();

  const sendrequest = async ()=>{
    const res = await axios.get(`${GRIEVANCE_URL}/hostel`).catch((err)=>console.log(err));
    const data =await res.data;
    return data;
  }

  useEffect(()=>{
    sendrequest().then((data)=>setGrievance(data));
  },[]);

  console.log(grievance);
  const handleVotes =(id) =>{
    axios.put(`${GRIEVANCE_URL}/updatevotes`,{
      id: id,
    })
  }


  return (
    <div className="general">
      <Header />
      <div style={{paddingTop:"20px",paddingLeft:"940px"}}>
        <table>
          <tr>
          <td style={{width:"150px",paddingRight:"10px"}}><FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                //value={inputs.role}
                                label="Gender"
                                //onChange={handleChange}
                                >
                                <MenuItem value={"G"}>Girls</MenuItem>
                                <MenuItem value={"B"}>Boys</MenuItem>
                                
                            </Select>
                        </FormControl></td>
            <td style={{width:"150px",paddingRight:"10px"}}><FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Block</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                //value={inputs.role}
                                label="Block"
                                //onChange={handleChange}
                                >
                                <MenuItem value={"A"}>A</MenuItem>
                                <MenuItem value={"B"}>B</MenuItem>
                                <MenuItem value={"C"}>C</MenuItem>
                            </Select>
                        </FormControl></td>
            <td style={{width:"150px"}}><FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Floor</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                //value={inputs.role}
                                label="Floor"
                                //onChange={handleChange}
                                >
                                <MenuItem value={"1"}>1</MenuItem>
                                <MenuItem value={"2"}>2</MenuItem>
                                <MenuItem value={"3"}>3</MenuItem>
                            </Select>
                        </FormControl></td>
          </tr>
        </table>
      </div>
      <Nav />
      <Container>
      <List>
      {grievance && grievance.map((grievance,index) =>(
        <Card>
        <div style={{ position:"relative"}}>
          <table>
            <tr>
              <td><h2><i>{grievance.title}</i></h2>
              </td>
              <td style={{justifyContent:"right",paddingLeft:"20px"}}>
                <h4 style={{color:"salmon"}}>- {grievance.userId}</h4>
              </td>
              <td style={{justifyContent:"right",paddingLeft:"20px"}}>
                <h4 style={{color:"salmon"}}>{grievance.progress}</h4>
              </td>
            </tr>
          </table>
          
          <p style={{fontSize:"17px",fontWeight:"500"}}>{grievance.body}</p>
          {/* <CardMedia
        component="img"
    height={130}
    
        image="http://thewowstyle.com/wp-content/uploads/2015/01/nature-wallpaper-27.jpg"
        alt="Paella dish"
      /> */}
         
          <div style={{padding:""}}>
            <table style={{color:"salmon",fontWeight:"600",fontSize:"16.5px"}}>
              <tr>
                <td>
                   <p onClick={()=>handleVotes(grievance._id)} style={{width:"150px",display:"flex"}}><div style={{marginRight:"5px"}}><ThumbUpIcon></ThumbUpIcon></div>{grievance.votes} Votes</p>
                </td>
                <td>
                    <p style={{width:"200px",display:"flex"}}><div style={{marginRight:"5px"}}><CommentIcon></CommentIcon></div>Comments</p>
                </td>
                <td>
                <p style={{ marginLeft:"500px"}}>{moment(grievance.createdAt).fromNow()}</p>
                </td>
              </tr>
            </table>
            <hr style={{border:"0.5px solid #FA8072"}}/>
            <div style={{lineHeight:"0.5",width:"1000px"}}>
              <h5>Admin</h5>
              <p style={{fontSize:"14px",fontWeight:"500"}}>{grievance.comment}</p>
              
            </div>
          </div>
          </div>
      </Card>
        ))}
      </List>
    </Container>
    </div>
  );
}

/*
{
userId:"20z337-Sach",
title:"Need cashless payment",
body:"It will be very convenient if we could have cashless transaction in canteen.",
category:"general"
}
*/