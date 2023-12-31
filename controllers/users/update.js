import User from "../../models/User.js"


export default async (req,res,next)=> {
    try {
        let updatedUser = await User.findByIdAndUpdate(
        req.params.u_id,
        req.body,
        { new:true } //por default en FALSE y devuelve el objeto ANTES de la modificación
        //si lo cambio a TRUE devuelve el objeto LUEGO de la modificaicón
        ).select('name photo mail')
        if (updatedUser){
            return res.status(200).json({
                success: true,
                message: 'user updated',
                response: updatedUser
            })
        }else{
            return res.status(400).json({
                success: false,
                message: 'not updated',
                response: null
            })
        }
    } catch (err) {
        next(err)
    }
}