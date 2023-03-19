// Colocamos el contador
let contador = 0;

// obtenemos el valor y los botones
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const btnClase = e.currentTarget.classList;
        if (btnClase.contains("increase")) {
            contador++;
        } else if (btnClase.contains("decrease")) {
            contador--;
        }else{
            contador = 0;
        }
        if (contador > 0) {
            value.style.color = "#00bf8e";
        }else
        if (contador < 0) {
            value.style.color = "#f75842";
        }else
        if (contador === 0) {
            value.style.color = "#2c2c2c"
        }
        value.textContent = contador;
    }); 
});