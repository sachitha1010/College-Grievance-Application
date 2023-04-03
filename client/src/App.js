import React from "react";
import './App.css';
import {BrowserRouter, Navigate,Route,Routes,useNavigate,} from "react-router-dom";
import GeneralPage from './pages/generalPage';
import MyGrievance from './pages/myGrievance';
import Login from "./pages/login";
import Signup from "./pages/signup";
import Hostel from "./pages/Hostel";
import Canteen from "./pages/Canteen";
import Department from "./pages/Department";
import Giveapproval from "./pages/Admin/giveapproval";
import Providesolution from "./pages/Admin/providesolution";
import {UserContextProvider} from "./UserContext";

function App() {
  
  return (
    <BrowserRouter>
    <UserContextProvider>
    <Routes>
    <Route path="/general"  element={<GeneralPage/>} />
    <Route path="/mygrievance" element={<MyGrievance/>}/>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/hostel" element={<Hostel/>} />
    <Route path="/department" element={<Department/>} />
    <Route path="/canteen" element={<Canteen/>} />
    <Route path="/giveapproval" element={<Giveapproval/>} />
    <Route path="/providesolution" element={<Providesolution/>} />
    </Routes>
    </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
