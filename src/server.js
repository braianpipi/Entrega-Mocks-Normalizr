import express from "express";
import Server from "socket.io"
import http from 'http'
import morgan from "morgan";
import { createFakeProduct } from "./dao/productos/productFaker";
const ioServer = new Server()
const app = express();
const httpServer = http.createServer(app);
const io = new ioServer(httpServer);

const Messages = require("./dataBaseMessages/message");
let content = new Messages('./dataBaseMessages/message.txt')
const PORT = 8080;
// middleware
app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);
// importo la funcion para probar la fake api
app.get('/api/productos-test', (req, res)=>{
  let products = createFakeProduct()
  res.render('index.ejs', { products : products})
})

app.set("views", "./public/views");
app.set("view engine", "ejs");

let messages = [];
async function chat(){
  let messages = await content.getAll()
  io.sockets.emit('mensajesEnviados', messages)
}
io.on('connection', socket => {
  console.log("New user connected. Soquet ID : ", socket.id);

  chat()
  socket.on('newMessage', async data =>{
    await content.save(data)
    let messages = await content.getAll()
    io.sockets.emit('mensajesEnviados', messages)
  })
});


httpServer.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});






































