import { useNavigate } from "react-router-dom";
import "../Styles/SideBar.css"
import bot from "../bot.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faUser } from "@fortawesome/free-solid-svg-icons";
function SideBar() {
  const navigate = useNavigate();
  const navigation = ["chatbot", "dashboard", "users", "docs"]
  const Icons = ["faChatbot","faDashboard","faUser", "faFiles"]
    return ( 
      <div className="side-bar">
        <img src={bot} width="100px" />
        <h5>Chat Bot</h5>

        <div className="navigators">
          {
            navigation.map((naviagtor,index) => <div className="inner-nav" id={index} onClick={index===0?()=>navigate(`/`):()=>navigate(`/${naviagtor}`)}>{naviagtor}</div>)
          }
        </div>
      </div>
     );
}

export default SideBar;