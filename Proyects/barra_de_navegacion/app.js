// classList - muestra y obtiene todas las clases
// contains - metodo que devuelve un boolean si es que una clase especifica existe en una classList
// add - agrega una clase
// remove - elimina una clase
// toggle - lanza o dispara una clase

const navToggle = document.querySelector(".toggle-nav");
const links = document.querySelector(".links-nav");

navToggle.addEventListener("click", ()=>{
    /* console.log(links.classList); */
    /* console.log(links.classList.contains("links-nav")); */
    /* if (!links.classList.contains("show-links")) {
        links.classList.add("show-links");
    }else{
        links.classList.remove("show-links");
    } */
    links.classList.toggle("show-links")
});