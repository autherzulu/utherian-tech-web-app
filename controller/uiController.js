const db = require("../model/Database")
const path = require("path")


const home = (req, res) => {
    res.sendFile(path.join(__dirname, "../view", "index.html"))
}

const User_sign_up_page = (req, res) => {
    res.sendFile(path.join(__dirname, "../view", "sign_up.html"))
}

const User_log_in = (req, res) => {
    res.sendFile(path.join(__dirname, "../view", "login.html"))
}


const dashboard = (req, res) => {
    res.sendFile(path.join(__dirname, "../view", "/Dashboard", "userDashbord.html"))
}

const profile = (req, res) => {
    res.sendFile(path.join(__dirname, "../view", "Profile" ,"profile.html"))
}

const booking = (req, res) => {
    res.sendFile(path.join(__dirname, "../view/", "Booking", "booking.html"))
}

const payment = (req, res) => {
    res.sendFile(path.join(__dirname, "../view/", "Payment", "payment.html"))
}

const project = (req, res) => {
    res.sendFile(path.join(__dirname, "../view/", "Projects", "project.html"))
}
module.exports = {
    
}
module.exports = {
    home,
    User_sign_up_page,
    User_log_in,
    dashboard, profile, payment, booking, project
}
