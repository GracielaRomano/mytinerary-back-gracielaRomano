import User from "../../models/User.js"

export default async (req,res,next) =>{
    try {
        let data = req.body
        if(!data.photo) data.photo = 'https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg'
        let one = await User.create(data)
        return res.status(201).json({
            success:true,
            massage: 'user created',
            response: one._id
        })
    } catch (error) {
        next(error)
    }
}