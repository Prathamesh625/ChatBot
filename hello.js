 let url = 'ws://${window.location.host}/ws/socket-server/';
  console.log(url)
  const chatSocket = new WebSocket(url);


  chatSocket.onmessage = (e)=> {
      let data = JSON.parse(e.data);
      

    if (data.type === "chat") {
      let messages = document.getElementById("chatMessages");

      messages.insertAdjacentHTML(
        "beforeend",
        `<div class="user-message"> <p>${data.question}</p> </div>
        <div class="chatbot-response"> <p>${data.message}</p> </div>`
      );
    }
    else if (data.type === "image") {
      let messages = document.getElementById("chatMessages");
      const imageUrl = 'data:image/' + data.extension + ';base64,' + data.image;
      messages.insertAdjacentHTML(
        "beforeend",
        `<div class="user-response"><img src="${imageUrl}" alt="user input"><br><br>
         <p>${data.description}</p> </div>
         <div class="chatbot-response"> <p>${data.response}</p></div>`
      )
    }
  };

  function openFileInput() {
    document.getElementById('image_query').click();
  }

  const sendFile=()=> {
    const fileInput = document.getElementById('image_query');
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const fileContent = event.target.result;
        // Send the file content through the WebSocket
        chatSocket.send(
          JSON.stringify({
            type: "file",
            file_content: fileContent,
            file_name: file.name,
          })
        );
      };

      reader.readAsDataURL(file);
    }
  }

  function changeLang(){
    const changeLang_selector = document.getElementById('lang_state')
    const lang = changeLang_selector.value
    if (lang){
      chatSocket.send(
        JSON.stringify({
          type: 'lang',
          lnaguage: lang,
        })
      )
    }
  }