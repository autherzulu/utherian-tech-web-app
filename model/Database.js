const dotenv = require("dotenv")
const mysql = require("mysql2")

dotenv.config({path : "./.env"})

// const DB = mysql.createConnection({
//     host : process.env.DATABASE_HOST,
//     user : process.env.DATABASE_USER,
//     password : process.env.DATABASE_PASSWORD,
//     database : process.env.DATABASE_NAME
// })


const DB = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
});


DB.connect((err) => {
    if (err) {
        console.log("An Error Occured: ", err)
    }else {
        console.log(`Database Connected Successfully`)
        
    }
})

module.exports = DB
