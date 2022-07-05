import mongoose from "mongoose";
import config from "../configDB.js";

mongoose.connect(config.mongoDB.URL, config.mongoDB.options);

class MongoClass {
  constructor(collectionName, docSchema) {
    this.collection = mongoose.model(collectionName, docSchema);
  }
  async getAll() {
    try {
      const allMessages = await this.collection.find({}).pretty();
      return allMessages;
    } catch (error) {
      throw new Error("error :", error);
    }
  }

  async createMessage(obj) {
    try {
      const nuevoMensaje = await this.collection.create(obj);
      return nuevoMensaje;
    } catch (error) {
      throw new Error("error :", error);
    }
  }
}

export default MongoClass;
