/*MDN -> El evento DOMcontentLoaded termina cuando el documento 
inicial de HTML se ha cargado y parseado, sin esperarn aque carguen
los estilos, imagenes, y subframes
El evento de carga terminara cunado todo el documento ha cargado
incluyendo todo los recursos dependeientes como los estilos e imagnees
*/

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

//play and puase
btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

//preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add('hide-preloader')    
})
