const db = require("../model/Database")
const Dashboard = (req, res) => {
    const user = req.user

      db.query("SELECT id_or_passport, phone, profile_photo, gender, entity, user_id, created_on FROM user_profile WHERE user_id = ?", [user.id], (err, results) => {
        if (err) {
            console.log("errrrr: ", err)
        }else if (results.length > 0) {
            console.log("rsult: ", results)
            const user_profile = results[0]
            res.json({user, user_profile})
            console.log("ppt", user_profile)
        }else {
            res.json({user, message : "Please create a profile..."})
        }
    })
   
}


const todaysAppointment = (req, res) => {
    const user = req.user
    db.query("SELECT * FROM bookings WHERE user_id = ? and date(bookings.booking_date) < CURDATE() ORDER BY bookings.booking_date limit 1 ;", [user.id], (err, results) => {
        if (err) {
            console.log("appointment err, ", err)
        }else {
            console.log("appointments results: ", results[0])
            console.log(results)
            res.json(results[0])
        }
    })
}

module.exports = {
    Dashboard,
    todaysAppointment
}