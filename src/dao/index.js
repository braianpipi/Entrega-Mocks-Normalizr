import dotenv from "dotenv";
dotenv.config();
let mensajesDao;

switch (process.env.DB_NAME) {
  case "mongoDB":
    import('./mensajes/mensajes.js').then(({ MongoMensajes }) => {
      mensajesDao = new MongoMensajes();
    });
    break;
  default:
    throw new Error("No se ha definido una conexión a la base de datos");
    break;
}

export {mensajesDao};