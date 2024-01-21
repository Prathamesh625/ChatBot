import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/HomePage.css"
import { faUser } from "@fortawesome/free-solid-svg-icons";
function User(props) {
    return ( 
        
        <div className="user">

        {props.data.includes("blob") ? <p><img src={props.data } width="200px"/></p>:<p>{props.data}</p>}    
             {/* <FontAwesomeIcon icon={faUser}   size="xl" className="user-icon"/> */}
        </div>
              
    );
}


function UserResponses(props) {
  return <p>{props.response }</p> ;
}




export default User;
