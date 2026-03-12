const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", e=>{
if(cursor){
cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"
}
})
