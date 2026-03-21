const app = require("express")
const Router = app.Router()

const { home,  User_sign_up_page, User_log_in, } = require("../controller/uiController")
const {dashboard, profile, booking, payment, project} = require("../controller/uiController")

const {Dashboard, todaysAppointment} = require("../controller/dashboardController")
const {createProfile, userprofile, uploads, updateProfile} = require("../controller/profileController")
const {} = require("../controller/bookingController")
const {} = require("../controller/paymentController")

const {User_sign_up} = require("../controller/signupController")
const {User_Log_In} = require("../controller/loginController")
const {User_Log_out, deleteAccount} = require("../controller/logoutController")

const {createBooking, getAllBookings,  getBookingById, deleteBookingById} = require("../controller/bookingController")


const {Authenticate} = require("../middleware/userAuth")



Router.get("/view/index.html", home)
Router.get("/view/sign_up.html", User_sign_up_page)
Router.get("/view/login.html", User_log_in)
// Router.get("/view/500.html", Server_error)

Router.post("/submit", User_sign_up)
Router.post("/login", User_Log_In)
Router.post("/logout" , User_Log_out) 

Router.get("/dashboard", Authenticate, dashboard)
Router.get("/profile", Authenticate, profile)
Router.get("/booking", Authenticate, booking)
Router.get("/payment", Authenticate, payment)
Router.get("/project", Authenticate, project)

// users api



// Router.get("/users", Authenticate, Users)

Router.get("/api/dashboard", Authenticate, Dashboard)

// profile api routes
Router.get("/api/profile", Authenticate, userprofile)
Router.post("/api/userprofile",uploads.single("photo"), Authenticate,  createProfile)
Router.put("/api/profile/update", Authenticate, updateProfile)

// booking api routes
Router.get("/api/booking", Authenticate, getAllBookings)
Router.get("/api/booking/:id", Authenticate, getBookingById)
Router.post("/api/booking", Authenticate, createBooking)

Router.delete("/api/booking/:id", Authenticate, deleteBookingById)
Router.delete("/api/delete-acount", Authenticate, deleteAccount)


Router.get("/api/todaysappointments", Authenticate, todaysAppointment)




module.exports = Router