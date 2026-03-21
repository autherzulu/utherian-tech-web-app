
 window.onload = async () => {
 
  try {
  const response = await fetch("/api/profile", {
    method : "GET",
    headers : { "Content-Type" : "application/json"},
  })
  const data = await response.json()
  const user =  data.user
  const user_profile = data.user_profile
    console.log("fff  ", data.user)
    console.log("fff  ", data.message)

    if(data.message === "Please create a profile...") {

      document.querySelector(".edit-profile-contents-conatiner-tabs").innerHTML = "<h2>Create a profile to continue</h2>"
      document.querySelector(".my-profile-contents-conatiner-tabs").innerHTML = "<h2>Create a profile to continue</h2>"
      document.querySelector(".payment-contents-conatiner-tabs").innerHTML = "<h2>Create a profile to continue</h2>"
                  

    }

    else {

          const profile_photo = document.getElementById("profile-photo")
      
          const first_name1 = document.querySelector("#user_first_name")
          const last_name1 = document.querySelector("#user_last_name")

              const first_names1 = document.querySelector("#details-name")
          const last_names1 = document.querySelector("#details-name-last")
        
        
          const first_name_1 = document.querySelector("#user_first_name_1")
          const last_name_1 = document.querySelector("#user_last_name_1")

          const email_address = document.querySelector("#email")
          const user_id = document.querySelector("#user-id")
          const entity = document.querySelector("#entity")
          const phone = document.querySelector("#phone")
          const gender = document.querySelector('#gender')
          const id_or_passport = document.querySelector("#id_or_passport")
          const date = document.querySelector("#date")

          const dates =  new Date(user_profile.created_on).toISOString().slice(0, 10)
      console.log("fielL ", user_profile.profile_photo)

          profile_photo.attributes.getNamedItem("src").value = "/uploads/" + `${user_profile.profile_photo}`

          first_name_1.textContent = user.first_name
          last_name_1.textContent = user.last_name

          first_name1.textContent = user.first_name
          last_name1.textContent = user.last_name

        first_names1.textContent = user.first_name
          last_names1.textContent = user.last_name

          email_address.innerHTML = user.email

          user_id.textContent = user.id

          entity.textContent = user_profile.entity
          phone.textContent = user_profile.phone
          gender.textContent = user_profile.gender
          id_or_passport.textContent = user_profile.id_or_passport
          date.textContent = dates
  }
  }
  catch (er) {
    console.log("users errr: ",er)
  }
 }


document.addEventListener("DOMContentLoaded", ev => {




const form = document.querySelector(".user-profile-form-2")

form.addEventListener("submit", async e => {

 e.preventDefault()
const first_name = document.querySelector("#first-name1").value
const last_name = document.querySelector("#last-name1").value
const user_name = document.querySelector("#user-name1").value
const genders = document.querySelector("input[name='gender']:checked")
const email = document.querySelector("#email1").value
const id_or_passport = document.querySelector("#passport1").value
const phone = document.querySelector("#phone1").value
const entity1 = document.querySelector("#entity1").value

const gendervalue = () => {
  if (genders === null) {
  var gender2 = genders
  return gender2
  }else {
    var gender2 = genders.value
    return gender2
  }

}
const gender2 = gendervalue()

console.log("g t ", genders)

console.log("entity: ", entity1)
console.log("upgg00: ", first_name, last_name, user_name, email, id_or_passport, phone, entity1 ,gender2)


console.log("tte: ", genders)
const response1 = await fetch("/api/profile/update", {
  method : "PUT",
  headers : {"Content-Type" : "application/json"},
  body: JSON.stringify( {first_name, last_name, user_name, email, phone, entity1, id_or_passport, gender2} )
})

const data1 = await response1.json()
console.log("eee: ", data1)
// window.location.href = "/profile"

if (response1.ok) {
  window.location.href = "/profile"
} else {
  console.log("ressok, ", response1)
}

})

  }

)

  






const btn_settings = document.querySelector(".settings")

btn_settings.addEventListener("click", (e) => {
  e.preventDefault()
  document.querySelector(".settings-container").style.display = "flex"
}) 


const bts = document.querySelector(".cross-container")

bts.addEventListener("click", ev => {
  ev.preventDefault()
    document.querySelector(".settings-container").style.display = "none"

})





const deleteAccount = async () => {
  const delete_response = await fetch("/api/delete-acount", {
    method : "delete",
    credentials : "include"
  })

  const data = await deleteAccount.json()

  console.log("ggg: ", data)

}



document.querySelector("#delete-account").addEventListener("click", event => {
  event.preventDefault()
  deleteAccount()
})






function Profile_tab_btn(active_tab_id) {

const my_profile = document.querySelector("#my-profile")
const edit_profile = document.querySelector("#edit-profile")
const user_profile = document.querySelector("#complete-user-profile")
const payment_content = document.querySelector("#payment")

    my_profile.style.display = "none"
    edit_profile.style.display = "none"
    user_profile.style.display = "none"
    payment_content.style.display = "none"
    // history.pushState("","", active_tab_id)
    
    document.getElementById(active_tab_id).style.display = "flex"


}


