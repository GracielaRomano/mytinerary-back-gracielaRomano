import { Router } from "express";
import register from "../controllers/auth/register.js";
import signIn from "../controllers/auth/signIn.js";
import isPassOk from "../middlewares/isPassOk.js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import existsUser from "../middlewares/existsUser.js";
import validator from "../middlewares/validator.js";
import isValidToken from "../middlewares/isValidToken.js";
import registerSchema from "../schemas/register.js";
import signinSchema from "../schemas/signin.js";



let authRouter = Router()

authRouter.post('/signup',validator(registerSchema),existsUser,isValidPass,register)
authRouter.post('/signin',validator(signinSchema),notExistsUser,isPassOk,isValidToken,signIn)
export default authRouter