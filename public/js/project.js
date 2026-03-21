
function booking_tab_btn(active_tab_id) {

const book_us = document.querySelector("#book-us")
const all_bookings = document.querySelector("#all-bookings")
const approved = document.querySelector("#approved")
const pending = document.querySelector("#pending")
  
if (active_tab_id === "all-bookings") {
  viewBookings()
}else{console.log("uuuu")}



    book_us.style.display = "none"
    all_bookings.style.display = "none"
    approved.style.display = "none"
    pending.style.display = "none"

    document.getElementById(active_tab_id).style.display = "flex"

}