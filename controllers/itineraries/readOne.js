import Itinerary from "../../models/Itinerary.js";

export default async (req,res,next) =>{
    try{
        let oneItinerary = await Itinerary.findOne({ _id: req.params._id})
        if (oneItinerary){
            return res.status(201).json({
                success:true,
                message: 'itineraries found',
                response: oneItinerary
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