import City from "../../models/City.js";

export default async (req,res) =>{
    try{
        let oneCity = await City.findOne({ _id: req.params._id})
        //.select(" - _id ")
        //let oneUserId = await User.findById{req.params.id}
        return res.status(201).json({
            success:true,
            message: 'cities found',
            response: oneCity
          })

    }catch (error) {
        return res.status(400).json({
            success:false,
            message:'not created',
            response: error.message
        })
    }
}