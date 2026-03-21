const path = require("path")
const db = require("../model/Database")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User_Log_In = (req, res) => {
    console.log("Body ", req.body)
    console.log("Body ", Object.keys(req.body))
    const {user_name_login, email_login, password_login} = req.body
    console.log(user_name_login, email_login, password_login)
    const user_name_and_email_sql = "SELECT * FROM USERS WHERE user_name = ? and email = ?"
    db.query(user_name_and_email_sql, [user_name_login, email_login], async (err, result) => {
        // console.log("Quary results: ", result)
        if (err) {
            console.log("Login err occured: ", err)
        }
        else if (result.length === 0) {
            console.log("Incorrect user credentials", err)
            res.status(400).json({message1 : "Inccorect user credentials"})
        }
        else {
            console.log("correct user credentials ", result[0].user_name, result[0].email)
             
        const users = result[0]
        const ismatch = await bcrypt.compare(password_login, users.password)
        // console.log(ismatch)
            if (!ismatch) {
                 console.log("Incorrect user passward")
                 res.status(400).json({message1 : "Inccorect user password"})
            }else if (ismatch) {
                // console.log(password_login, result[0].password)

                const token = jwt.sign({ id : users.id, user_name : users.user_name}, process.env.SECRET_KEY, {expiresIn : "1h"})

                const refresh_token = jwt.sign({id : users.id, user_name : users.user_name,}, process.env.REFRESH_TOKEN_SECRET_KEY, {expiresIn : "1d"})

                // console.log(token)

                // console.log(refresh_token)

                console.log("password is correct")
                console.log("Your Login was successfull")
                res.cookie("token", token, {httpOnly : true, sercure : "production", sameSite : "strict", maxAge : 3600000})
                res.status(200).json({
                    message1 : "User login was successfull", 
                    redirect : "/dashboard",
                    first_name : users.first_name,
                    last_name : users.last_name
                })
               
            }
            else {
                console.log("error")
            }  } 
    })
}





// "CREATE TABLE users (id integer primary key auto_increment , first_name varchar(255) not null, last_name varchar(255) not null, user_name varchar(255) not null unique, email varchar(255) not null unique, password varchar(255), confirm_password varchar(255))"
// "create table bookings (booking_id integer auto_increment primary key, user_id integer not null ,service_id integer not null, booking_date date, booking_time time, booking_status enum("confirmed", "pending", "cancelled") default "pending", booking_created_at timestamp default current_timestamp , constraint book_foreign_key foreign key(user_id) references users(id)  on update cascade on delete cascade, constraint services_foreign_key foreign key(service_id) references services(service_id) on update cascade on delete cascade);"
// "create table services (service_id integer primary key auto_increment, service_name varchar(255) unique not null, price decimal(10, 2) not null )"
module.exports = {
    User_Log_In
}