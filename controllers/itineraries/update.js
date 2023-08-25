import Itinerary from "../../models/Itinerary.js"


export default async (req,res,next)=> {
    try {
        let updatedItinerary = await Itinerary.findByIdAndUpdate(
        req.params.u_id,
        req.body,
        { new:true } //por default en FALSE y devuelve el objeto ANTES de la modificación
        //si lo cambio a TRUE devuelve el objeto LUEGO de la modificaicón
        ).select('photo city price duration')
        if (updatedItinerary){
            return res.status(200).json({
            success: true,
            message: 'itinerary updated',
            response: updatedItinerary
            })
        }else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
    } catch (err) {
        next(err)
    }
}