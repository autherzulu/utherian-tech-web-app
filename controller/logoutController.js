const path = require("path")
const db = require("../model/Database")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


// const Server_error = (req, res) => {
//     res.sendFile(path.join(__dirname, "../view", "500.html"))
// }

const User_Log_out = (req, res) => {  
    console.log("happening") 
    res.clearCookie("token", {httpOnly : true, secure : "production", sameSite : "strict"})
    res.status(200).json({message : "Logged out successfully", redirect : "/view/login.html"})
    console.log("happening ebn")

}

const deleteAccount = (req, res) => {
    const id = req.user.id
    db.beginTransaction()
    db.query(`DELETE FROM users where id = ${id}`,(err, result) => {
        if (err) {
            console.log("account delete err: ", err)
        }else {
            console.log("delete rsult: ", result)
        }
    })
}

module.exports = {
    User_Log_out,
    deleteAccount
    
}