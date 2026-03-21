const db = require("../model/Database")
const path = require("path")



const createBooking = (req, res) => {
    
    const {service_id ,service_name, booking_date, booking_time } = req.body

    if (req.body.service === "project discussion") {
        const service_id = 1
        const user_id = req.user.id
        const booking_status = "pending"

         console.log('k: ', req.body, "f :", user_id, service_id, booking_date, booking_time)
    const book_query = "INSERT INTO bookings (user_id, service_id, booking_date, booking_time) values (?, ?, ?, ?)"
    db.query(book_query, [user_id, service_id, booking_date, booking_time], (err, results) => {
        if (err) {
           console.log("Booking error: ", err)
        }
        else {
            console.log("Booking successfull...", results)
        }
    })
    }
    if (req.body.service === "website maintainance") {
        const service_id = 2
        const user_id = req.user.id
        const booking_status = "pending"

         console.log('k: ', req.body, "f :", user_id, service_id, booking_date, booking_time)
    const book_query = "INSERT INTO bookings (user_id, service_id, booking_date, booking_time) values (?, ?, ?, ?)"
    db.query(book_query, [user_id, service_id, booking_date, booking_time], (err, results) => {
        if (err) {
           console.log("Booking error: ", err)
        }
        else {
            console.log("Booking successfull...", results)
        }
    })
    }

}
const getAllBookings = (req, res) => {
    const user_id = req.user.id

    db.query("SELECT bookings.booking_id, users.first_name, users.last_name, bookings.booking_date, services.service_name , bookings.booking_time, bookings.booking_status FROM users inner join bookings ON users.id = bookings.user_id inner join services on bookings.service_id = services.service_id WHERE id = ?", [user_id], (err, result) => {
        if (err) {
            console.log("mybookings ERR: ", err)
        }
        if (result) {
            console.log("your bookings: ", result)
            res.json(result)
        }   
        else {
            console.log("errrrrrr; ", err)
        }
    })
}
//  const user_id = 6
//     const book_query = "INSERT INTO bookings (user_id, service_id, booking_date, booking_time) values (?, ?, ?, ?)"
//     db.query(book_query, [user_id, service_id, booking_date, booking_time], (err, results) => {
//         if (err) {
//            console.log("Booking error: ", err)
//         }
//         else {
//             console.log("Booking successfull...", results)
//         }
//     })





const getBookingById = (req, res) => {
    const id_params = req.user.id
    const booking_id = req.params.id
    console.log("req.params", req.params.id)
    db.query("SELECT bookings.booking_id, users.first_name, users.last_name, bookings.booking_date, services.service_name , bookings.booking_time, bookings.booking_status FROM users inner join bookings ON users.id = bookings.user_id inner join services on bookings.service_id = services.service_id WHERE id = ? AND booking_id = ?", [id_params, booking_id], (err, result) => {
        if (err) {
            console.log("err id, ", err)
            return res.json({errs : err})
        }else {
            console.log("kkk",result)
            return res.json({result})
        }
    })
}


const deleteBookingById = (req, res) => {
    const user_id = req.user.id
    const booking_id = req.params.id
    db.query("DELETE FROM bookings WHERE booking_id = ? AND user_id = ?", [booking_id, user_id], (err, result) => {
        if(!result) {
            console.log("No booking exist by that id to delete")
        }if(err) {
            console.log("errrrr", err)
        }
        return res.json({result})
    })
}


const updateBookingById = (req, res) => {

}






module.exports = {
    createBooking,
    getAllBookings,
    getBookingById,
    deleteBookingById, 
    updateBookingById,

   
}