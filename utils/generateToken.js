import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export const generateTokenAndSetCookie = (userID, res ) => {
    const token = jwt.sign({userID}, ENV_VARS.JWT_SECRET, {expiresIn: "15d"});

    res.cookie("jwt-netflix",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true,  // prevent cookie access from javascript
        sameSite: "strict", // cookie will only be sent in a first-party context
        secure: ENV_VARS.NODE_ENV !== "development", 
    } );
     
    return token;

}