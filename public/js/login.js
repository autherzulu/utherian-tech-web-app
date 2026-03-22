
document.addEventListener("DOMContentLoaded", (ee) => {
ee.preventDefault()

const Login_form = document.querySelector("#form-login")

    if (Login_form) {

      Login_form.addEventListener("submit", async (ev) => {
        ev.preventDefault()
      
        const user_name_login = document.querySelector("#user_name_login").value
        const email_login = document.querySelector("#email_login").value
        const password_login = document.querySelector("#password_login").value
      
      try {
        const response1 = await fetch("https://utherian-tech-web-app.onrender.com/login", { 
          method : 'POST',
          headers : { 'Content-Type' : 'application/json'},
          body : JSON.stringify({user_name_login, email_login, password_login})
        })
      
        if (response1.status === 400) {
          const data1 = await response1.json()
          
        document.querySelector('#login-message').style.color = "red"
        document.querySelector('#login-message').classList.remove("visible-message")
        document.querySelector('#login-message').innerText = data1.message1;
            setTimeout(() => {
            document.querySelector('#login-message').classList.add("visible-message")

            }, 1000);
        }else if (response1.ok) {
      
          const data1 = await response1.json();
          document.querySelector('#login-message').style.color = "green"
          document.querySelector('#login-message').classList.remove("visible-message")
          document.querySelector('#login-message').innerText = data1.message1;
       
            setTimeout(() => {
              document.querySelector('#login-message').classList.add("visible-message");
              window.location.href = data1.redirect
              console.log("loooogooogogogo : ", data1.redirect)
            }, 1000);
           
            console.log("kkkkkk")
      
        }}catch (err) {
          console.log("loggg ",err)
        }
      })
      



    }


})