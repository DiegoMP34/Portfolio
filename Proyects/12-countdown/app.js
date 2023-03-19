const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const weekdays = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

//temporizamos la fecha cada 10 dias

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// establecemos el giveaway y el tiempo en ms
const fechaFutura = () => {
  //fecha futura
  let date = new Date(tempYear, tempMonth,tempDay + 10, 12, 30, 0);
  console.log(date);
  //obtener los datos de date
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let month = months[date.getMonth()];
  let day = weekdays[date.getDay()];

  // mostrar date en giveway
  giveaway.textContent = `Termina el ${day}, ${date.getDate()} de ${month} ${year} ${hours}:${minutes}pm`;

  // fecha futura en ms
  return date.getTime();
};

//obtenemos la fecha establecida en ms
const futureTime = fechaFutura();

// valores en ms
// 1s = 1000s , 1m = 60s, 1h = 60m, 1d = 24h
const oneDay = 1000 * 60 * 60 * 24;
const oneHour = 1000 * 60 * 60;
const oneMinute = 1000 * 60;
const oneSecond = 1000;

const getRemainingTime = () => {
  //fecha y tiempo actual
  const today = new Date().getTime();
  // console.log(today);
  const t = futureTime - today;

  //si es que tiempo restante ya acabo
  if (t < 0) {
    clearInterval(countdown);
    return deadline.innerHTML = `<h4 class='expired'> Lo sentimos,la promocion a terminado</h4>`;
  }

  // calcular todos los valores
  let days = Math.floor(t / oneDay);
  // console.log(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  // console.log(minutes);
  let sec = Math.floor((t % oneMinute) / oneSecond);
  // console.log(sec);

  // colocar los valores en un array para iterar con items
  const valuesTime = [days, hours, minutes, sec];

  //formatp: 0 para los numero menores de 10
  const format = (item) => (item < 10 ? (item = `0${item}`) : item);

  items.forEach((item, index) => {
    item.textContent = format(valuesTime[index]);
  });
};

// para mostrar cada segundo el contador
let countdown = setInterval(getRemainingTime, 1000);

//getRemainingTime();
