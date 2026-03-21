const express = require("express")
const path = require("path")
const PORT = 4500
const routes = require("./routes/routes")
// const api_routes = require("./api_routes/user_detais_routes")
// const api_routes_pay = require("./api_routes/user_payment_api_routes")
const hbs = require("express-handlebars")
const cookies_parser = require("cookie-parser")

const app = express()
// app.set("view", path.join(__dirname, "view"))
const view = path.join(__dirname, "view")
const public = path.join(__dirname, "public")
const uploads = path.join(__dirname, "uploads")
// const booking = path.join(__dirname, "controller","bookingController.js")
app.use(cookies_parser())



app.use(express.static(public))
app.use(express.static(view))


app.use("/uploads", express.static(uploads))

app.use(express.urlencoded({ extended : true}))
app.use(express.json())
app.use(routes)
// app.use("/api/booking", booking)
// app.use(api_routes)
// app.use(api_routes_pay)


app.listen(PORT, "localhost", () => {
  console.log("Server is running on Port: ", PORT)
})