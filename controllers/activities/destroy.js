import Activity from "../../models/Activity.js"

export default async (req,res,next) => {
    try {
        let deletedActivity = await Activity.findByIdAndDelete(req.params._id)
        if (deletedActivity){
            return res.status(200).json({
                success: true,
                message: 'Activity deleted',
                response: deletedActivity._id
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