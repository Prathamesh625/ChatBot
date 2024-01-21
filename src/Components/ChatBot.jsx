import "../Styles/ChatBot.css"
import SideBar from "./SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faMicrophone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Modal from "./Upload";
import image from "../Styles/background.jpeg"
import useWebSocket from "react-use-websocket";
import Bot from "./Bot";
import User from "./User";
import axios from "axios";
import ChangeLanguage from "./ChangeLanguage";
import { postUsers, sendUserMessage } from "../Api";
function ChatBot() {

  const [isModalOpen, setIsModalOpen] = useState(false);
    const [user, setUser] = useState("");
    const [bot,setBot] = useState("")
    const [chat,setChat] = useState({bot:"",user:""})
    const [array, setArray] = useState([{ bot: "", user: "" }])
  const [userMsg, setUserMsg] = useState("");
  const [loading,setLoading] = useState(false)

  const onChangeHandler = (e) => {
    if (!e.target.value) return;
        setUser(e.target.value);
      
    }

 
    useEffect(() => {
        
        setChat({ bot: bot, user: user })
        setArray([...array, { bot: chat.bot, user: chat.user }]);
        setUser("")
        setUserMsg("")
        setBot("")


       
    },[bot])


    
    const stateChangeHandler = async() => {
      if (user) {
      setLoading(true);
      setUserMsg(user);
      const response = await sendUserMessage(user);
      setBot(response.data);
      setLoading(false);
      } else {
        alert("you must proivide input")
    }    
    }



  const handleUpload = async (e) => {

    setUser(URL.createObjectURL(e.target.files[0]))

  };


 
const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);
  


    return (
    <section className="display">
            <SideBar/>
             <section className="chatbot-container-space">
               <div className="chatbot-section" >
            <h3>Chat Section </h3>
            <ChangeLanguage/>
        
            </div>
          <div className="content">
            <Bot data="How Can I help You ?" />
             {array  &&    array.map(msg =><div>
             {msg.user && <User data={msg.user} />}
             {msg.bot && <Bot data={msg.bot} />}
           </div>)
            }   
            
           {userMsg && <User data={userMsg} />}
          { loading &&  <Bot data="...." />}
   
    
             
          </div>
           <div className="relative">
           <input className="input-post-box" type="text" placeholder=" Chat with me"  value={user} onChange={onChangeHandler}  />
           <FontAwesomeIcon icon={faMicrophone} size="xl"  className="customed"   />        
           <FontAwesomeIcon icon={faImage} size="xl" className="faImage" onClick={openModal}/>
          <FontAwesomeIcon icon={faPaperPlane} size="xl" className="plane" onClick={ stateChangeHandler } />      
        </div> 
              <div className="relative-2">
               <input className="input-post-box" type="text" placeholder="Chat with me" value={user} onChange={onChangeHandler}/>              
                <FontAwesomeIcon icon={faImage} size="xl" className="customed" onClick={openModal}/>  
                {user ? <FontAwesomeIcon icon={faPaperPlane} size="xl" className="customed" onClick={stateChangeHandler}  /> : <FontAwesomeIcon icon={faMicrophone} size="xl" className="customed" />}      
            </div>
          </section>
        <Modal isOpen={isModalOpen} data={handleUpload} onClose={closeModal} postMessage={stateChangeHandler}/>
    </section> );
}

export default ChatBot;






//  <div className="content">
              
//               <div className="chatbot-section" >
//                 <h3>Chat Section </h3>
//          <select 
//                                       >
//                                         <option value="en">English (US)</option>
//                                         <option value="en-GB">English (UK)</option>
//                                         <option value="mr">मराठी</option>
//                                         <option value="hi">हिंदी </option>
//                                         <option value="bn">Bengali</option>
//                                         <option value="fr">French</option>
//                                         <option value="pt-BR">Portuguese (Brazil)</option>
//                                         <option value="bg">Bulgarian</option>
//                                         <option value="gu">Gujarati</option>
//                                         <option value="de">German</option>
//                                         <option value="kn">Kannada</option>
//                                         <option value="ml">Malayalam</option>
//                                         <option value="es">Spanish</option>
//                                         <option value="ta">Tamil</option>
//                                         <option value="te">Telagu</option>
//                                         <option value="ur">Urdu</option>
//                                     </select>
//               </div>
     
//       {  userMessage && userMessage.map(msg =><div>
               
//         { msg.user && <User data={msg.user} />}
//              {msg.bot && <Bot data={msg.bot} />}
//            </div>)
//                }   

//                 {/* {userChat && <User data={userChat} />}
//                 { botChat ? <Bot data={botChat} />: <Bot data=" ... " />}
               
//               */}
//           </div>
//           <div className="relative">
//           <input type="text" placeholder=" Chat with me"  value={userChat} onChange={onchangeText}  />
//           <FontAwesomeIcon icon={faMicrophone} size="xl"  className="customed"   />        
//           <FontAwesomeIcon icon={faImage} size="xl" className="faImage" onClick={openModal}/>
//           <FontAwesomeIcon icon={faPaperPlane} size="xl" className="plane" onClick={postUserMessage} />      
//       </div>  
    // <div className="relative-2">
    // <input type="text" placeholder="Chat with me" value={userChat} onChange={onchangeText}/>              
    //             <FontAwesomeIcon icon={faImage} size="xl" className="customed" onClick={openModal}/>  
    //             {userChat ? <FontAwesomeIcon icon={faPaperPlane} size="xl" className="customed" onClick={postUserMessage}  /> : <FontAwesomeIcon icon={faMicrophone} size="xl" className="customed" />}      
    //         </div>

