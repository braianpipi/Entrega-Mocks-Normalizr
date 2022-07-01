import mongoose from "mongoose";
import MongoClass from "../../DataBaseMensajes/MongoClass.js";

export class MongoMensajes extends MongoClass {
    constructor() {
      super("mensajes", {
        autor:{
            id_autores:{type:String, require:true},
            email:{type:String,require:true},
            timestamp:{type:String},
            avatar:{type:String,require:true},
        },
        mensajes:{
            id_mensajes:{type:String, require:true},
            texto:{type:String,require:true},            
        }

    })
      }}
    
//  new mongoose.Schema({
//     autor:{
//         email:{type:String,require:true},
//         nombre:{type:String,require:true},
//         apellido:{type:String,require:true},
//         edad:{type:Number,require:true},
//         alias:{type:String,require:true},
//         avatar:{type:String,require:true},
//     },
//     texto:{type:String,require:true},
//     timestamp:{type:String}
// })
