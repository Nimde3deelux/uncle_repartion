const links = document.querySelectorAll(".page-link")
const water = document.querySelector(".water-transition")

links.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault()

const url = this.href

water.classList.add("active")

setTimeout(()=>{
window.location = url
},800)

})

})
