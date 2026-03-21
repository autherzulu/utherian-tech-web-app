const db = require("../model/Database")
const jwt = require("jsonwebtoken")

const Authenticate = (req, res, next) => {

    console.log("authMiddleware Triggered....")
    const token = req.cookies.token
    if (!token || token === "null") {
        console.log("Unauthorized token or tempared token...")
        return res.status(401).redirect("../view/login.html")
    }
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                console.log("ttttttttt")
                return res.status(401).redirect("../view/login.html")
                
            }else {
                console.log("User authenticated successfully..")
                db.query("SELECT id, first_name, last_name, user_name, email FROM users WHERE id = ?", [decoded.id], (err, result) => {
                    if (err) {
                        console.log("errrrrrrrrrd: ", err)
                    }else {
                        console.log("user  ",result[0])
                        console.log("Decode  ",decoded)
                        // req.user = decoded
                        req.user = result[0]
                        next()
                    
                     
                    }
                })
                  
            }
        })
    }
    else {
                console.log("Am else")
                return res.status(401).redirect("../view/login.html")
                
   }
    
}


module.exports = {Authenticate}