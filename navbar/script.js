const button= document.querySelector(".button");
const navmenu= document.querySelector(".nav-menu");
button.addEventListener("click",()=>{
    button.classList.toggle("active");
    navmenu.classList.toggle("active");
})
document.querySelectorAll(".nav-menu a").forEach(n=>n.addEventListener("click", ()=>{
    button.classList.remove("active");
    navmenu.classList.remove("active");

}))
