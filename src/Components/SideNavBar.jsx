import { useNavigate } from "react-router-dom";
import "../Styles/SideNavBar.css"
import bot from "../bot.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function SideNavBar({ set}) {
    const navigation = ["chatbot", "dashboard", "users", "docs"]
    const navigate = useNavigate();
    return ( 
        <div>
            
            <div className="side-nav-bar" >
               
                <FontAwesomeIcon icon={faClose} onClick={set} style={{display:'flex', justifyContent:"center"}}/>
                <div className="animate-sidebar">
        <img src={bot} width="100px" className="chatbot-img" />
        <h5>Chat Bot</h5>

        <div className="navigators">
          {
            navigation.map((naviagtor,index) => <div className="inner-nav" onClick={index===0?()=>navigate(`/`):()=>navigate(`/${naviagtor}`)}>{naviagtor}</div>)
          }
        </div>
      </div>
            </div>
        </div>
     );
}

export default SideNavBar;