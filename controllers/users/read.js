import User from "../../models/User.js"


export default async (req,res) =>{
    try{
        let allUsers = await User.find()
        return res.status(201).json({
            success:true,
            message: 'users found',
            response: allUsers
        })

    }catch (error) {
        return res.status(400).json({
            success:false,
            message:'not created',
            response: null
        })
    }
}