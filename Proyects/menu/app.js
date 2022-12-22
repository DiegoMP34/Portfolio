
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "Desayuno",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "Almuerzo",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "jugos",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "Desayuno",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "Almuerzo",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "jugos",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "Desayuno",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "Almuerzo",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "jugos",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "Cena",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');
  
  
  // cargar el menu
window.addEventListener('DOMContentLoaded',()=>{
    
  displayMenuItem(menu);
  displayBtns();
    
});
  
  
  //funciones
function displayMenuItem(itemMenu) {
  let displayMenu = itemMenu.map((item)=>{
    // console.log(item)
    return `<article class="menu-item">
    <img src="${item.img}" class="foto" alt="${item.title}" />
    <div class="item-info">
    <header>
    <h4>${item.title}</h4>
    <h4 class="price">$${item.price}</h4>
    </header>
    <p class="item-text">
    ${item.desc}
    </p>
    </div>
    </article>`
  });
  sectionCenter.innerHTML = displayMenu.join('');
}

function displayBtns() {
  //obtenemos las cattegorias unicas
  const categories = menu.reduce((values, item) => {
    if (!values.includes(item.category)) values.push(item.category);
    return values
  },['Todos'])
  
  const categoriesBtns = categories.map(category => {
    return `<button class="btn filter-btn" type="button" 
    data-id="${category}">${category}</button>`
  }).join('')
  
  btnContainer.innerHTML = categoriesBtns;
  
  
  // seleccionar categorias unicas osea no todas las que se tienen
  const filterBtns = document.querySelectorAll('.filter-btn');
  // filtrar el menu
  filterBtns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
      const category = e.currentTarget.dataset.id;
      // console.log(e.currentTarget.dataset.id);
      //all -> agregara todos los items
      if(category === "Todos") return displayMenuItem(menu)
      
      let filterId = menu.filter(menuItem=>{
        //agregara los items de acuerdo asu categoria
        if(category===menuItem.category) return menuItem;
      });
      
      displayMenuItem(filterId);
    });
  });
}