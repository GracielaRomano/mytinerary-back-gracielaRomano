import City from "../../models/City.js";

export default async (req,res,next) =>{
    try{
        let oneCity = await City.findOne({ _id: req.params._id})
        if (oneCity){
            return res.status(201).json({
                success:true,
                message: 'cities found',
                response: oneCity
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