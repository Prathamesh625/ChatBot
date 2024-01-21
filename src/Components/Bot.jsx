import bot from "../bot.png"
import "../Styles/HomePage.css"

function Bot(props) {

    return ( 
       
      <div className="bot ">
     
          <BotResponses response={props.data} />
      </div> 

     );
}

function BotResponses(props) {
  return <p>{props.response}</p>;
}


export default Bot;