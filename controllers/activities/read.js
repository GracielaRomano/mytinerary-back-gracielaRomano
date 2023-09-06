import Activity from "../../models/Activity.js";

export default async (req,res,next) => {
    try {
        let queries = {}
        if(req.query.itinerary_id){
            queries.itinerary_id = req.query.name
        }
        console.log('en read')
        let allActivities = await Activity
            .find(queries,'-__v -createdAt -updatedAt')
            .populate({
                path: "itinerary_id",
                select:"name photo city_id",
                populate:{
                    path: "city_id",
                    select: "city photo admin_id",
                    populate: {
                        path: "admin_id",
                        select: "name photo"
                    }
                }
            })
            return res.status(200).json({
                success: true,
                message: 'Activities found',
                response: allActivities
            })
    } catch (err) {
        next(err)
    }
}