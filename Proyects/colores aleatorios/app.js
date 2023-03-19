const colores = ["green", "red", "rgba(133,122,200)","#f15025"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function() {
    // obtener un numero aleatorio entre 0 - 3 colores[]
    const numAleatorio = getNumeroAleatorio();
    document.body.style.backgroundColor = colores[numAleatorio];
    color.textContent = colores[numAleatorio];
});

function getNumeroAleatorio() {
    return Math.floor(Math.random() * colores.length);
}