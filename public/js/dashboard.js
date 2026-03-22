
  
//   document.addEventListener("DOMContentLoaded", async (ev) => {
//   ev.preventDefault()
 
//   console.log("kkk ",  )

// try {
//   const response_profile = await fetch("/api/dashboard", {
//     method : "GET"
//   })
  
//   const data = await response_profile.json()
//   console.log("gggggg, ", data)

//   if (response_profile.status === 401) {
//     console.log("Unauthorized access")
//     window.location.href = data.redirect
    
//     }
    

//   else if (response_profile.ok) {
//     console.log("Profile data fetched successfully")
//     console.log("Profile data: ", data)
//     document.querySelector("#profile").innerText = `Welcome ${data.user_name}`}
//     window.location.href = data.redirect


// }catch (errr) {

//   console.log("EERRRR ", errr)

// }



// })



// import {Chart} from "chart.js/auto"





  // window.onload = async () => {

 window.onload = async () => {
 
  try {
  const response = await fetch("https://utherian-tech-web-app.onrender.com/api/dashboard", {
    method : "GET",
    headers : { "Content-Type" : "application/json"},
  })
  const data = await response.json()
  const user =  data.user
    console.log("fff  ", data.user)
       console.log("fff  ", data.message)

       if (data.message === "Please create a profile...") {

          document.querySelector(".all-contents-conatiner-dashboard ").innerHTML = "<h2>Create a profile to continue</h2>"
       }
       else {

      const first_name = document.querySelector("#user_first_name")
      const last_name = document.querySelector("#user_last_name")
      const user_name = document.querySelector(".user_name")
    
      const first_name_1 = document.querySelector("#user_first_name_1")
      const last_name_1 = document.querySelector("#user_last_name_1")

      // first_name.innerHTML = data.first_name
      // last_name.innerHTML = data.last_name


      first_name_1.textContent = user.first_name
      last_name_1.textContent = user.last_name
    

      document.querySelector("#details-name").textContent = user.first_name
      document.querySelector("#details-name-last").textContent = user.last_name
        
       } 


  }
  catch (er) {
    console.log("users errr: ",er)
  }




  try {
       const toDaysAppointmentsResponse = await fetch ("https://utherian-tech-web-app.onrender.com/api/todaysappointments", {
        method : "GET",
        headers : {"Content-Type" : "application/json"}
      }
      )
  
        const appointmentData = await toDaysAppointmentsResponse.json()

        console.log("todays appointments :", appointmentData)

        document.querySelector(".date").textContent = appointmentData.booking_date
         document.querySelector(".time").textContent = appointmentData.booking_time
           document.querySelector(".status").textContent = appointmentData.booking_status
  }catch (e){
    console.log("todays appointment err: ", e)

  }


 }



// window.onload = async () => {

 
            // document.querySelector(".phone-number").textContent
// }
   










  // const response = await fetch("/user", {
  //   method : "GET",
  //   headers : { "Content-Type" : "application/json"},
  // })
  // const data = await response.json()
 
  //   console.log("fff  ", data)
    // const first_name = document.querySelector("#user_first_name")
    // const last_name = document.querySelector("#user_last_name")
    // const user_name = document.querySelector(".user_name")
   
    // const first_name_1 = document.querySelector("#user_first_name_1")
    // const last_name_1 = document.querySelector("#user_last_name_1")

    // // first_name.innerHTML = data.first_name
    // // last_name.innerHTML = data.last_name


    // first_name_1.innerHTML = data.first_name
    // last_name_1.innerHTML = data.last_name
  

    // document.querySelector("#details-name").innerHTML = data.first_name
    // document.querySelector("#details-name-last").innerHTML = data.last_name

//  let id = data.id

//  console.log("idss ", id)
//     const respo = await fetch("/user:${id}", {
//       method : "GET",
//       headers : {"Content-Type" : "application/json"}
//     })
    
//     const data1 = await respo.json()

//     console.log("Data1 ", data1)

//   }

// document.querySelector(".Tab").addEventListener("click", e => {e.preventDefault()})

// document.querySelector(".opensidebar").addEventListener("click", ev => {
//   ev.preventDefault()
// }) 

const opensidebars = document.querySelector(".opensidebar").addEventListener("click", e => {
  e.preventDefault()
}) 

const openSidebar = () => {
  document.querySelector(".full-page-container-sidebar").style.display = "flex"
  document.querySelector(".main-section").style.display = "none"
}

  const ctx = document.querySelector("canvas")
// console.log("ctx: ", ctx)

// new Chart(ctx, {
//   type: "bar",
//   data : {
//     lables : ["white", "yellow", "black", "blue"],
//     datasets : [{
//       lable : "Booking Status",
//       data : [12, 19, 31, 21],
     
//     }]
//   }
// })



  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Total', 'Approved', 'Rejected', 'Pending', 'Orange'],
      datasets: [{
        label: '# of Bookings',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });