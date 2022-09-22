// datos del team en local
const dataTeam = [
    {
        id:1,
        name:"Jamir Pariona",
        job: "Ingeniero Electronico",
        img: "./tm1.jpg",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Adipisci omnis non nemo eum fuga saepe dolore 
        obcaecati error at dignissimos sapiente, facilis.`
    },
    {
        id:2,
        name:"Diego Marcos",
        job: "Ingeniero de Sistemas",
        img: "./tm2.jpg",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Adipisci omnis non nemo eum fuga saepe dolore 
        obcaecati error at dignissimos sapiente, facilis.`
    },
    {
        id:3,
        name:"Fabricio Portugal",
        job: "Ingeniero Industrial",
        img: "./tm3.jpg",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Adipisci omnis non nemo eum fuga saepe dolore 
        obcaecati error at dignissimos sapiente, facilis.`
    },
    {
        id:4,
        name:"Martin Vera",
        job: "Ingeniero en Robotica",
        img: "./tm4.jpg",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Adipisci omnis non nemo eum fuga saepe dolore 
        obcaecati error at dignissimos sapiente, facilis.`
    }
]
// obteniendo los items
const img = document.getElementById("person-img");
const trabajador = document.getElementById("trabajador");
const job = document.getElementById("job");
const info = document.getElementById("info");

const antBtn = document.querySelector(".ant-btn");
const desBtn = document.querySelector(".des-btn");
const aletorioBtn = document.querySelector(".aleatorio-btn");

// configuramos el item que comienza
let actualItem = 0;

//cargamos el item de inicio
window.addEventListener("DOMContentLoaded",()=>{
    mostrarPersona();
});

// funcion para mostrar la persona 
const mostrarPersona = () =>{
    const item = dataTeam[actualItem];
    img.src = item.img;
    trabajador.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

// mostrar siguiente persona
desBtn.addEventListener("click",()=>{
    actualItem++;
    if(actualItem > dataTeam.length - 1 ) actualItem = 0 ; 
    mostrarPersona();
});

// mostrar  persona anterior
antBtn.addEventListener("click",()=>{
    actualItem--;
    if(actualItem < 0 ) actualItem = dataTeam.length - 1; 
    mostrarPersona();
});

//mostrar una persona aletoria
aletorioBtn.addEventListener("click", ()=>{
    actualItem = Math.floor(Math.random() * dataTeam.length);
    mostrarPersona();
});