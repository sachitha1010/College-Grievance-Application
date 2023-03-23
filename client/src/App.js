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

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/"  element={<GeneralPage/>} />
    <Route path="/mygrievance" element={<MyGrievance/>}/>
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/hostel" element={<Hostel/>} />
    <Route path="/department" element={<Department/>} />
    <Route path="/canteen" element={<Canteen/>} />
    <Route path="/giveapproval" element={<Giveapproval/>} />
    <Route path="/providesolution" element={<Providesolution/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
