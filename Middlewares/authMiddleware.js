import jwt from "jsonwebtoken"

export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = await jwt.verify(token, process.env.PRIVATEKEY);
        const {email,role} = decodedToken
        req.auth = {
            email: email,
            role: role
        }
    next()
    } catch(error) {
        res.status(401).json({ 
            status : "failed",
            message: error.message
            
        })
    }
}

export const isAutorized = (...role) => {

    return (req, res, next) => {

    if (req.auth.role === role) {
        next();
    } else {
        
        return res.status(403).json({
            status: "failed",
            message: "user not autorized"
        })
    }


}
}