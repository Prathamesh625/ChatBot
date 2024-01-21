import axios from "axios"
const url = "define your own url"
export const sendUserMessage = async(userChatMessage) => {
    const response = await axios.post("http://localhost:8000/post", {
      userchat:userChatMessage
    })
    console.log(response)
    return response;
}


export const sendLanguageType = async (lanaguage) => {
  const response = await axios.post("http://localhost:8000/lang", {
    language: lanaguage,
  });
  return response;
};



export const addnewUsers = async (username, email, password) => {
  const response = await axios.post(url, {
    //write your attributes here
  });

  return response;
};





//get user method
export const requestUsers = async () => {
  const response = await axios.get("http://localhost:8000/get/user");
  return response;
};



// request documents 

export const requestDocs = async () => {
  const response = await axios.get(url, {
    //write your attributes here
  });

  return response;
};




// upload documents to server

export const updateUsers = async (id,username,email) => {
  const response = await axios.post("http://localhost:8000/user", {
   //write you attributes here
  });
    

  return response;
};