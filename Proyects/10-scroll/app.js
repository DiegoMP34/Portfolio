/* El metodo Element.getBoundingClientRect() retorna el alto
y su posicion relativa al viewport
Usamos la proiedad scrollY para obtener los px de Y de la pantalla
que han sido escrolleados
clientHeight -> devuelve la altura en px, conteniendo el
contenido y padding
offsetHeight -> devuelve la altura en px, conteniendo el contenido
padding border y scrollbar*/

// establecer la fecha
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// abrir cerar links
const navlinks = document.querySelector(".nav-links");
const navToggler = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");

navToggler.addEventListener("click", () => {
  //linksContainer.classList.toggle('links-show');
  //const containerHeight = linksContainer.getBoundingClientRect().height;
  const containerHeight = linksContainer.clientHeight;
  const navLinksHeight = navlinks.getBoundingClientRect().height;

  if (containerHeight === 0)
    linksContainer.style.height = `${navLinksHeight}px`;
  else linksContainer.style.height = 0;
});

// fixed navbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  if (window.scrollY > navbar.offsetHeight) navbar.classList.add("fixed-nav");
  else navbar.classList.remove("fixed-nav");
  //top-link
  if (window.scrollY > 500) topLink.classList.add("show-toplink");
  else topLink.classList.remove("show-toplink");
});

//scroll links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    //navegamos hacia la section especifica
    const id = e.currentTarget.getAttribute("href").slice(1); 
    const element = document.getElementById(id);
    //calculando las alturas
    const navHeight = navbar.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    const containerHeight = linksContainer.getBoundingClientRect().height;

    let posicion = element.offsetTop - navHeight;
    
    if(!fixedNav) posicion = posicion - navHeight;

    if(navHeight> 88) posicion = posicion + containerHeight;
    
    window.scrollTo({ left:0, top: posicion });
    linksContainer.style.height = 0;
  });
});