
// document.addEventListener("DOMContentLoaded", (e) => {
//   e.preventDefault()


document.querySelector("#logout-btn").addEventListener("click", async (ev) => {
     ev.preventDefault()
const logout = async () => {
 console.log("logout button clicked")
 try {
        const respo = await fetch("/logout", {
          method : "POST",
          credentials : "include"
        });

        const data = await respo.json()
       
        console.log("raw response ", data)
        console.log("raw response  redire", data.redirect)
        if (respo.ok) {
          console.log("Logout was successfull")
          window.location.href = data.redirect
        
        }
        
    } catch (err) {
      console.log("Loddd err ", err)

    }


      }
  logout()
})

// })
// lo
