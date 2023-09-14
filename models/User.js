import { model,Schema} from "mongoose";

let collection = 'users'
let schema = new Schema({
    name: { type:String,required:true},
    lastName: { type:String}, // cualquier data opcional no se necesita agregar el required
    mail: { type:String,required:true,unique:true},//validacion que no me permite registrar dos veces el mismo mail
    photo: { type:String,default:"https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg"},//si el cliente no envia una foto, por defecto se muestra la foto en el default
    password:{ type:String,required:true},
    country: { type:String,required:true},
    google: { type:Boolean, default: false}
})
let User = model(collection,schema)
export default User

