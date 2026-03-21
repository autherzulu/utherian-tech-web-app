
document.addEventListener("DOMContentLoaded", (e) => {

  e.preventDefault()

  const form = document.querySelector('#form');
    if (form) {
      
      form.addEventListener('submit', async (event) => {

        event.preventDefault()
      const first_name = document.querySelector("#first_name").value
      const last_name = document.querySelector("#last_name").value
      const user_name = document.querySelector("#user_name").value
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      const confirm_password = document.querySelector("#confirm_password").value;
    
    try {  
        const response = await fetch('/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ first_name, last_name, user_name, email, password, confirm_password })
        });
      
        if (response.status === 400) {
          const data = await response.json();
          console.log("fff", data)
           
           document.querySelector('#sign-up-message').style.color = "red"
           document.querySelector('#sign-up-message').classList.remove("sign-up-visible-message")
          document.querySelector('#sign-up-message').innerText = data.message;
          setTimeout(() => {
            document.querySelector('#sign-up-message').classList.add("sign-up-visible-message");
          }, 1000);
          
    
        } else if (response.ok) {
            const data = await response.json();

            document.querySelector('#sign-up-message').style.color = "green"
            document.querySelector('#sign-up-message').classList.remove("sign-up-visible-message")
            document.querySelector('#sign-up-message').innerText = data.message;
            setTimeout(() => {
              document.querySelector('#sign-up-message').classList.add("sign-up-visible-message");
              
            }, 1000);
    
            window.location.href = data.redirect
       
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  


    }


})