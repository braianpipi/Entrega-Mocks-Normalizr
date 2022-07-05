import MongoClass from "../../DataBaseMensajes/MongoClass.js";

export class MongoMensajes extends MongoClass {
  constructor() {
    super("mensajes", {
      autor: {
        id_autores: { type: String, require: true },
        email: { type: String, require: true },
        timestamp: { type: String },
        inputThumbnail: { type: String, require: true },
      },
      mensajes: {
        id_mensajes: { type: String, require: true },
        text: { type: String, require: true },
      },
    });
  }
}

//   class Messages{
//     constructor(file){
//         this.file = file;
//      }

//      async leer() {
//          const data = await fs.promises.readFile(this.file, "utf-8");
//          const dataJson = JSON.parse(data);
//          return dataJson;
//        }

//      async save(objeto) {
//          try {
//            let content = await this.leer();
//            let idUltimo = content.map((e) => e.id);
//            let idAsignado = Math.max(...idUltimo);
//            idAsignado++;
//            objeto = {
//              id: idAsignado,
//              email: objeto.email,
//              text: objeto.text,
//              date: objeto.date
//            };
//            content.push(objeto);
//            await fs.promises.writeFile(this.file, `${JSON.stringify(content)}`);
//          } catch (error) {
//            console.log(" save error", error);
//          }
//        }

//      async getAll(){
//          try{
//              const content = await fs.promises.readFile(`./${this.file}`, 'utf-8');
//              const messages = JSON.parse(content);
//              return messages;
//          }
//          catch(err){
//              console.log("getAll error",err);
//          }
//      }
//  }
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
