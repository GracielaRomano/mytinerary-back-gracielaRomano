import { Router } from "express";
import passport from "../middlewares/passport.js";
import register from "../controllers/auth/register.js";
import uploadController from "../controllers/auth/uploadPhoto.js";
import signIn from "../controllers/auth/signIn.js";
import token from "../controllers/auth/token.js";
import signout from "../controllers/auth/signout.js";
import signinGoogle from "../controllers/auth/signinGoogle.js";

import isPassOk from "../middlewares/isPassOk.js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import existsUser from "../middlewares/existsUser.js";
import validator from "../middlewares/validator.js";
import isValidToken from "../middlewares/isValidToken.js";
import verifyGoogle from "../middlewares/verifyGoogle.js";
import findOrCreate from "../middlewares/findOrCreate.js";

import registerSchema from "../schemas/register.js";
import signinSchema from "../schemas/signin.js";


let authRouter = Router()

authRouter.post('/signup',validator(registerSchema),existsUser,isValidPass,register)
authRouter.post('/uploadphoto', uploadController)

authRouter.post('/signin',validator(signinSchema),notExistsUser,isPassOk,isValidToken,signIn);
authRouter.post('/token',passport.authenticate('jwt', {session:false}),isValidToken,token);
authRouter.post('/signout',passport.authenticate("jwt", { session: false }),signout);
authRouter.post('/google',verifyGoogle,findOrCreate,isValidToken, signinGoogle);

export default authRouter