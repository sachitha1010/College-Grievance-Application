import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import CommentIcon from '@mui/icons-material/Comment';
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SchoolIcon from '@mui/icons-material/School';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FeedIcon from '@mui/icons-material/Feed';
import CallIcon from '@mui/icons-material/Call';
import LogoutIcon from '@mui/icons-material/Logout';

function Nav(){
  return (
    <div className="sidenav">
      <table>
            <tr><a></a></tr>
            <tr><Link style={{padding:"0"}} to="/login"><a style={{display:"flex"}}><div style={{marginRight:"20px"}}><HomeIcon></HomeIcon></div>Home</a></Link></tr>
            <tr><Link style={{padding:"0"}} to="/"><a style={{display:"flex"}}><div style={{marginRight:"20px"}}><QuestionAnswerIcon></QuestionAnswerIcon></div>General</a></Link></tr>
            <tr><Link style={{padding:"0"}} to="/department"><a style={{display:"flex"}}><div style={{marginRight:"20px"}}><SchoolIcon></SchoolIcon></div>Department</a></Link></tr>
            <tr><Link style={{padding:"0"}} to="/canteen"><a style={{display:"flex"}}><div style={{marginRight:"20px"}}><FastfoodIcon></FastfoodIcon></div>Canteen</a></Link></tr>
            <tr><Link style={{padding:"0"}} to="/hostel"><a style={{display:"flex"}}><div style={{marginRight:"20px"}}><ApartmentIcon></ApartmentIcon></div>Hostel</a></Link></tr>
            <tr><Link style={{padding:"0"}} to="/mygrievance"><a style={{display:"flex"}}><div style={{marginRight:"20px"}}><FeedIcon></FeedIcon></div>My Grievance</a></Link></tr>
            <tr><Link style={{padding:"0"}} to="/"><a style={{display:"flex"}}><div style={{marginRight:"20px"}}><CallIcon></CallIcon></div>Contact Us</a></Link></tr>
            <tr><Link style={{padding:"0"}} to="/login"><a style={{display:"flex"}}><div style={{marginRight:"20px"}}><LogoutIcon></LogoutIcon></div>Logout</a></Link></tr>
      </table>
  </div>
  )
}

export default Nav;

