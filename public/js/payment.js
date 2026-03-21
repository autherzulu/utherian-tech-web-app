
  window.onload = async () => {

  const response = await fetch("/user", {
    method : "GET",
    headers : { "Content-Type" : "application/json"},
  })
  const data = await response.json()
 
    console.log("fff  ", data)
    // const first_name = document.querySelector("#user_first_name")
    // const last_name = document.querySelector("#user_last_name")
    const user_name = document.querySelector("#user_name")
   
    const first_name_1 = document.querySelector("#user_first_name_1")
    const last_name_1 = document.querySelector("#user_last_name_1")

    // first_name.innerHTML = data.first_name
    // last_name.innerHTML = data.last_name


    first_name_1.innerHTML = data.first_name
    last_name_1.innerHTML = data.last_name
  

    document.querySelector("#details-name").innerHTML = data.first_name
    document.querySelector("#details-name-last").innerHTML = data.last_name
}


function Payment_tab_btn(active_tab_id) {

const docs_content = document.querySelector("#payment-docs")
const reciepts_content = document.querySelector("#payment-reciept")
const bills_content = document.querySelector("#payment-bills")
const payment_content = document.querySelector("#payment")


    docs_content.style.display = "none"
    reciepts_content.style.display = "none"
    bills_content.style.display = "none"
    payment_content.style.display = "none"
    history.pushState("","", active_tab_id)
    document.getElementById(active_tab_id).style.display = "block"


}

const Initiate_MTN_Pay = () => {
    document.querySelector(".mtn-payment-container").style.display = "flex"
}

// const btn = document.querySelector(".mtn-btn")
// const amount = document.querySelector("#amount")
// const phone_number = document.querySelector("#phone_number")
// const description = document.querySelector("#description")

// btn.addEventListener("click", async (e) => {
//   e.preventDefault()

// try {
// const response = await fetch("/MTN_pay", {
//   method : "POST", 
//   headers : {"Content-Type" : "application/json"},
//   body : JSON.stringify(amount, phone_number, description)
// })

// const data = await response.json()  

// console.log(data)
// }catch (err) {
//   console.log("pay : errr", err)
// }
// })