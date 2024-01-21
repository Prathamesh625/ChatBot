
import "./App.css";

import NavBar from "./Components/NavBar";

import ManageDocs from "./Components/ManageDocs";
import ManageUsers from "./Components/ManageUsers";
import DashBoard from "./Components/DashBoard";
import { Route, Routes } from "react-router-dom";

import SideNavBar from "./Components/SideNavBar";
import ChatBot from "./Components/ChatBot";
function App() {


  return (
    <>
      <NavBar />
      {/* <SideNavBar /> */}
      <Routes>
        <Route index="/chatbot" element={<ChatBot />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/docs" element={<ManageDocs />} />
        <Route path="/users" element={<ManageUsers />} />
      
      </Routes>
    </>
  );
}

export default App;





