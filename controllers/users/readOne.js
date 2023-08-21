import User from "../../models/User.js";

export default async (req,res,next) =>{
    try{
        let oneUser = await User.findOne({ _id: req.params._id})
        .select("mail photo -_id")
        if (oneUser){
            return res.status(201).json({
                success:true,
                message: 'users found',
                response: oneUser
            })
        }else{
            return res.status(400).json({
                success:false,
                message:'not created',
                response: null
            })
        }
    }catch (err){
        next(err)
    } 
        
    
}