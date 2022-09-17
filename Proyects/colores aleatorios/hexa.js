const hexa = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function() {
    let hexaColor = "#";
    for (let i = 0; i < 6; i++) {
        hexaColor += hexa[getNumeroAleatorio()];
    }
    document.body.style.backgroundColor = hexaColor;
    color.textContent = hexaColor;
});

//obtener un numero aleatorio entre 0-15
function getNumeroAleatorio() {
    return Math.floor(Math.random() * hexa.length);
}