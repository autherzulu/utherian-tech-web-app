console.log("script is running")


const date = new Date().getFullYear()
console.log(date)
// document.getElementById("date").innerText = date

setTimeout(() => {
  document.getElementById("header-setion-top-status").style.translate = "0px"
},10)

setTimeout(() => {
  document.getElementById("header-section-first-page").style.translate = "0px"
},10)

setTimeout(() => {
document.getElementById("logo").style.translate = "0px 0px"
}, 1000)

setTimeout(() => {
  document.getElementById("tag1").style.translate = "0px"
  }, 1000)

  setTimeout(() => {
    document.getElementById("tag2").style.translate = "0px"
    }, 1000)

    setTimeout(() => {
      document.getElementById("tag3").style.translate = "0px"
      }, 1000)

  setTimeout(() => {
    document.getElementById("header-section-first-page").style.background = "linear-gradient(154deg,  rgba(0, 0, 0, 0.6) 0% 47%, rgb(22, 27, 24) 47% 100%);"
  },400)

setTimeout(() => {
  document.getElementById("form").style.translate = "0px 0px";
}, 600)






