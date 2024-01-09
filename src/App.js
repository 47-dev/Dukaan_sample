import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Dashboard from "./Dashboard-Details/Dashboard"
import React from 'react';
import Interface from "./DashboardPages/Interface";
import Diagonistics from "./DashboardPages/Diagonistics";
import Definition from "./DashboardPages/Definition";
import Analytics from "./DashboardPages/Analytics";
import Analyticssetting from "./DashboardPages/Analyticssetting"
import Storage from "./DashboardPages/Storage";
import Notification from "./DashboardPages/Notification"


// import { Route, Routes } from "react-router-dom"
// import { Link } from 'react-router-dom';
// ... other imports ...



function App() {
 

  return (
    <div className="w-screen h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      <Routes>

        <Route path="/" element= {<Dashboard/>} />
        {/* <Route path="/dashboard" element = {
              
        } /> */}
        <Route path="/Interface" element={<Interface />} />
        <Route path="/Definition" element={<Definition />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Diagonistics" element={<Diagonistics />} />
        <Route path="/Analyticssetting" element={<Analyticssetting />} />
        <Route path="/Storage" element={<Storage />} />
        <Route path="/Notification" element={<Notification />} />

      </Routes>
      

    </div>
    )
}

export default App;
