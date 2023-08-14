import City from "../../models/City.js"


export default async (req,res)=> {
    try {
    let updatedCity = await City.findByIdAndUpdate(
    req.params.u_id,
    req.body,
     { new:true } //por default en FALSE y devuelve el objeto ANTES de la modificación
    //si lo cambio a TRUE devuelve el objeto LUEGO de la modificaicón
     ).select('country photo city')
    return res.status(200).json({
    success: true,
    message: 'city updated',
    response: updatedCity
     })
     } catch (error) {
    return res.status(400).json({
    success: false,
    message: 'not updated',
    response: null
     })
     }
    }