
// document.addEventListener("DOMContentLoaded", e => {

// document.getElementById("show").addEventListener("click", async (e) => {

//   try {
//       const response = await fetch("/mybooking")
//       if (!response.ok) {
//         console.log('err ; booking', await response)
//       }

//       console.log("rrrm: ", await response)
//       const data = await response.json()

//       console.log("Booking viewed: ", data)
//   }catch (err) {
//       console.log("cat err: ", err)
//   }
  
// }
// )



// })




const deleteBookingByid = async () => {
  const bt = document.querySelector(".delete-btn")
  bt.addEventListener("click", async e => {
    booking_id = 4
    const response = await fetch(`/api/booking/${booking_id}`, {
      method : "DELETE",
      headers : {"Content-Type" : "application/json"}
    })

    const data = await response.json()
    console.log("delete : ", data)
  })
}




console.log('boooolll')
const viewBookings = async () => {

  try {
      const response = await fetch("/api/booking")
      if (!response.ok) {
        // console.log('err ; booking', await response)
      }
      // console.log("rrrm: ", await response.json())
      const data = await response.json()
      console.log("data boook: ", data)
 
      data.forEach(bookings => {
          console.log("loop: ",bookings)
          const date = new  Date(bookings.booking_date).toISOString().slice(0, 10)
          console.log("ddd: ,", date)
          // const btn = document.createElement("button")
          // document.getElementsByClassName("action-button").appendChild(btn)
          // const bookin = `<tr>   
          //                   <td class="No">${bookings.booking_id}</td>
          //                   <td>BK001</td>
          //                   <td>${bookings.first_name} ${bookings.last_name}</td>
          //                   <td>${date}</td>
          //                   <td>${bookings.service_name}</td>
          //                   <td>${bookings.booking_time}</td>
          //                   <td>${bookings.booking_status}</td>
          //                    <td><button>view</button</td>
                            
          //                 </tr>`

        
          // const booking_container = document.querySelector(".reciepts-table")              

          // const row = document.createElement("tr")

          // row.innerHTML = bookin
          // booking_container.appendChild(row)


          // setTimeout(() => {
          //   booking_container.removeChild(row)
          // }, 5000);

          

          const booking_container = document.querySelector("#payment-reciept")
          const serviceName = document.querySelector(".service-name")
          const bookingDate = document.querySelector(".date")
          const bookingTime = document.querySelector(".time")
          const bookingCode = document.querySelector(".code")
          const bookingStatus = document.querySelector(".status")

          // serviceName.innerHTML = bookings.service_name
          //   bookingDate.innerHTML = bookings.booking_date
          //     bookingTime.innerHTML = bookings.booking_time
          //       bookingCode.innerHTML = bookings.booking_id
          //         bookingStatus.innerHTML = bookings.status

                const booking_card_container = document.querySelector("#booking-card")
                // booking_card_container.className = "booking-card"
                      booking_container.innerHTML += ` <div class="booking-card" id="booking-card">
                                        <h4 class="service-name"> ${bookings.service_name}</h4>
                                        <p class="date"><span>Date:</span> ${date}</p>
                                        <p class="time"><span>Time:</span> ${bookings.booking_time}</p>
                                       <h4 class="code"><span >Booking id:</span> ${bookings.booking_id}</h4>
                                        <p class="status" data-booking-status="approved"><span>Status:</span>${(bookings.booking_status)}</p>
                                        <button class="btnByid" data-booking-id="${bookings.booking_id}" onclick="getBookingByid()" type="button">View</button>
                                        <button class="delete-btn" style="color: red;" onclick="deleteBookingByid()">delete</button>
                          </div>
                        `
         
      })

      console.log("Booking viewed: ", data)
      
localStorage.setItem("total number of bookings", data.length)
      
  }catch (err) {
      console.log("cat err: ", err)
  }
  
}


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






const getBookingByid = async () => {

const btns = document.querySelectorAll(".btnByid")
btns.forEach( (btn) => {
  btn.addEventListener("click", async () => {
    const code = btn.dataset.bookingId

    console.log("btns all: ", btn)
     console.log("code: ", code)    
 


    const response = await fetch(`/api/booking/${code}`, {
      method : "GET",
      headers : {"Content-Type" : "application/json"}
})

  const data = await response.json()

  console.log("by id: ", data) 
  const header = document.createElement("h4")
  header.textContent = "Added"
  document.querySelector("#booking-card").appendChild(header)
  })
})
} 




document.querySelector(".Tab").addEventListener("click", e => {e.preventDefault()})

document.querySelector(".opensidebar").addEventListener("click", ev => {
  ev.preventDefault()
}) 

const openSidebar = () => {
  document.querySelector(".full-page-container-sidebar").style.display = "flex"
}





