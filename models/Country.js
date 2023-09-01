import { model,Schema} from "mongoose";

let collection = 'countries'
let schema = new Schema({
    name: { type:String,required:true},
    currency: { type:String}, // cualquier data opcional no se necesita agregar el required
    language: { type:String,required:true},//validacion que no me permite registrar dos veces el mismo mail
})
let Country = model(collection,schema)
export default Country
