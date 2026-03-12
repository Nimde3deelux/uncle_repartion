const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", e=>{
cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"
})

function scrollContact(){
document.getElementById("contact").scrollIntoView({
behavior:"smooth"
})
}
