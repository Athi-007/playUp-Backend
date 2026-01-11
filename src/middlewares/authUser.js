import jwt from "jsonwebtoken"
import User from "../model/User.js";


const authUser = async (req , res , next) => {
    try {
        const {token} = req.cookies
      
        if (!token) {
          return res.status(401).json({
            message : "you are Unauthorized"
          })
        }
      
        decodedId = jwt.verify(token,process.env.JWT_SECRET)
        const {_id} = decodedId
        const user = await User.findOne({_id})
      
        if (!user) {
          throw new Error("user not defined")
        }
      
        req.user = user
        next()
        
    } catch (err) {
        return res.status(500).json({
          message : err.message
        })
    }
}

export default authUser;    
