import { useEffect, useState } from "react";
import { sendLanguageType } from "../Api";
import "../Styles/ChangeLanguage.css"

function ChangeLanguage() {

    const [lang, setLang] = useState("en")
    const [popup,setPopup] = useState(false)
    
    const changeLanguageHandler = async (e) => {
        setLang(e.target.value)
        setPopup(true)
        setTimeout(() => {
            setPopup(false)
        },4000)
     
    }
    const apiHandler = async () => {
         
       const response = await sendLanguageType(lang);
        console.log(response.data);
   
    }
    
    

    

    useEffect(() => {
        apiHandler();
    }, [lang]);


    return (
<>
          <select  onChange={changeLanguageHandler}>
                                        <option value="en">English (US)</option>
                                        <option value="en-GB">English (UK)</option>
                                        <option value="mr">मराठी</option>
                                        <option value="hi">हिंदी </option>
                                        <option value="bn">Bengali</option>
                                        <option value="fr">French</option>
                                        <option value="pt-BR">Portuguese (Brazil)</option>
                                        <option value="bg">Bulgarian</option>
                                        <option value="gu">Gujarati</option>
                                        <option value="de">German</option>
                                        <option value="kn">Kannada</option>
                                        <option value="ml">Malayalam</option>
                                        <option value="es">Spanish</option>
                                        <option value="ta">Tamil</option>
                                        <option value="te">Telagu</option>
                                        <option value="ur">Urdu</option>
            </select>

            <div className={`${popup ? "popup" : "popup-copy"}`}>language selected { lang }</div>
            
            </>
  );
}

export default ChangeLanguage;