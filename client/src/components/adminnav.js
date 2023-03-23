import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';


function Adminnav(){
  return (
    <div className="sidenav">
      <table>
            <tr><a></a></tr>
            <tr><Link style={{padding:"0"}} to="/giveapproval"><a style={{display:"flex"}}><div style={{marginRight:"20px"}}><SchoolIcon></SchoolIcon></div>Give Approval</a></Link></tr>
            <tr><Link style={{padding:"0"}} to="/providesolution"><a style={{display:"flex"}}><div style={{marginRight:"20px"}}><SchoolIcon></SchoolIcon></div>Provide Solution</a></Link></tr>
      </table>
  </div>
  )
}

export default Adminnav;

