import Activity from "../../models/Activity.js";

// Devuelve todos las actividades de un itinerario 
export default async (req,res,next) =>{
    try{
        let oneActivity = await Activity.find({ itinerary_id: req.params._id})
        if (oneActivity){
            return res.status(201).json({
                success:true,
                message: 'Activities found',
                response: oneActivity
            })
        }else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
    }catch (err) {
        next(err)
    }
}