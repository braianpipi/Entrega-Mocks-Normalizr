import io from "socket.io-client";

// const socket = io();

// // or, more explicit version
// import { Manager } from "socket.io-client";

// const manager = new Manager("https://example.com");
// const socket = manager.socket("/");

const socket = io();
const div = document.getElementById("messagesContainer");
const btn = document.getElementById("send");
const inputText = document.getElementById("message");
const inputUser = document.getElementById("email");
const inputThumbnail = document.getElementById('avatar');
getNow = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
};
btn.addEventListener("click", () => {
  // e.preventDefault();
  if(inputUser.value.length < 6){
      return alert("Por Favor ingresa un mail")
  }if(inputText.value.length == 0){
    return alert("Por favor ingresa un texto")
  }else{

    const personMessage = [{
      email: inputUser.value,
      timestamp: getNow(),
      text: inputText.value,
      thumbnail: inputThumbnail.value
    },{
      // Aca nose que poner 
      id_mensajes:mesagges.length,
      text:inputText.value
    }];
    socket.emit("newMessage", personMessage);
    inputUser.value = "";
    inputText.value = "";
  }
});

socket.on("mensajesEnviados", (messages) => {
  if (messages.length > 0) {
    div.innerHTML = messages
      .map((message) => {
        return `<p><span class="mail">${message.email} </span>
                <span class="fecha">[${message.date}]: </span>
                <span class="msj">${message.text}</span></p>`;
      })
      .join(" ");
  } else {
    div.innerHTML = "";
  }
});
