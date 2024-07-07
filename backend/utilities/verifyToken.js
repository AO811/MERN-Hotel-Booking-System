
import {createError} from '../utilities/error.js';
import jwt from 'jsonwebtoken';
export const verify=async(req,res,next)=>{
 const token=req.cookies.accessToken;
 if(!token){
    return next(createError(401,"Not Authenticated"))
 }else{
    jwt.verify(token,process.env.JWT_SECRETKEY,(err,user)=>{
if(err){
    return next(createError(403,"token is not valid"));
}
req.user=user;
next();
    });
 }
}

export const verifyUser=async(req,res,next)=>{
    verify(req,res,next,()=>{
        if(req.user.id==req.params){
           next();
        }else{
            next(createError(403,"Not authorized"));
        }
    })
}