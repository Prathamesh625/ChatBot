import "../Styles/NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBots } from "@fortawesome/free-solid-svg-icons";
import bot from "../bot.png";
import SideNavBar from "./SideNavBar";
import { useState } from "react";
function NavBar() {
    const [openNavBar, setOpenNavbar] = useState(false)
    const setSideNavbar = () => setOpenNavbar(false);
    return (
        <>
            <div className="navbar">
                {openNavBar && <SideNavBar set={setSideNavbar} />}  
                <FontAwesomeIcon icon={faBars} border style={{ marginRight: "20px" ,marginLeft:"10px"}} onClick={()=>setOpenNavbar(true)}/>
                <h3>ChatBot</h3>
                <img src={bot} width="30px"/>
           </div>
        </>

           );
}

export default NavBar;