import express from "express";
import {Server} from "socket.io"
import http from 'http'
import morgan from "morgan";
import { createFakeProduct } from "./dao/productos/productFaker.js";
import { MongoMensajes as messages} from "./dao/mensajes/mensajes.js";
import path from 'path';
import { fileURLToPath } from 'url';
// const ioServer = new Server()
const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

// const Messages = require("./dataBaseMessages/message");
// let content = new Messages('./dataBaseMessages/message.txt')
const PORT = 8080;
// middleware
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", routes);
// importo la funcion para probar la fake api
let products = createFakeProduct()
app.get('/api/productos-test', (req, res)=>{
  res.json(products)
})
app.set("views", "../public/views");
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render('../public/views/index.ejs', {productos: products}) // lo busca en views
})

// let messages = [];
async function chat(){
   chatMessage = await messages.getAll()
  io.sockets.emit('mensajesEnviados', messages)
}
io.on('connection', socket => {
  console.log("New user connected. Soquet ID : ", socket.id);

  chat()
  socket.on('newMessage', async data =>{
    await content.createMessage(data)
    let messages = await messages.getAll()
    io.sockets.emit('mensajesEnviados', messages)
  })
});


httpServer.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});






































