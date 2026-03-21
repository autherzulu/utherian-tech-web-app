const path = require("path")
const db = require("../model/Database")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User_sign_up = (req, res) => {
    const {first_name, last_name, user_name, email, password, confirm_password} = req.body
    console.log(req.body)
    console.log("p ", password,  " j" , confirm_password)
    const email_check = "SELECT email from users WHERE email = ?"

    db.query(email_check, [email], (err, result) => {
        if (err) {
            console.log("An error occured: ", err)
        }else if (result.length > 0) { 
            console.log("Email already exist", result , result.length)
            res.status(400).json({message : "Email already taken!"})
            
        }
        else if (password !== confirm_password) {
            res.status(400).json({message: "Password does not match"})
            console.log("pppp ", password,  " jjjj" , confirm_password)
        }else {
               bcrypt.hash(password, 10, (err, hash) => {
                    if (err) {
                        console.log("An error occured password not hashed: ", err)
                    }else {
                        console.log(hash)
                        const password = hash
                        console.log(first_name, password)
                        user_credentials = [first_name, last_name, user_name, email, password]
                        const quary = "INSERT INTO USERS (first_name, last_name, user_name, email, password) values (?, ?, ?, ? ,?)"
                            db.query(quary, user_credentials, (err, result) => {
                                if (err) {
                                    console.log("error occured: ", err)
                                }else {
                                    console.log("User rgistration was succesfull..... || ", result)
                                    res.status(200).json({message : "Registration complete", redirect : "/view/login.html"})

                                }
                            }) 
                    } 
                })
              }



            })
} 


module.exports = {
    User_sign_up
}