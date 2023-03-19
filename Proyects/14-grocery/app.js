// Seleccionamos los items
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// opciones de editar
let editElement;
let editFlag = false;
let editID = '';

// EVENT LINSTENERS
// submit form
form.addEventListener('submit', addItem);
// clear items event - evento limpiar items
clearBtn.addEventListener('click', clearItems)
// show items from local storage - mostrar los items del almacenamiento local
window.addEventListener('DOMContentLoaded',setupItems)

// ***** FUNCTIONS *****
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();// trata de obtener un valor unico

    // value -> truthy | editFlag -> false
    if (value && !editFlag){
        //creamos los item nuevos
        createListItems(id, value)
        // display alert
        displayAlert('Producto agregado exitosamente','success');
        addToLocalStorage(id, value);
        setBackToDefault();
    }else if (value && editFlag){//value -> falsy
        editElement.innerHTML = value
        displayAlert('Producto editado exitosamente','success');
        //editlocalStorage
        editLocalStorage(editID,value)
        setBackToDefault()
    }else{
        displayAlert('No hay valor ingresado','danger')
    }
}
//Delete Item - Borrar producto
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement
    const id = element.dataset.id
    list.removeChild(element)
    if(list.children.length === 0)
        container.classList.remove('show-container')
    displayAlert('Producto eliminado','danger')
    setBackToDefault()
    //remove from local storage
    removeFromLocalStorage(id)
}
//Edit Item - Editar producto
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement
    //set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling
    grocery.value = editElement.innerHTML
    editFlag = true
    editID = element.dataset.id
    submitBtn.textContent = "edit"
}
// clear items - limpiar todos los items
function clearItems(){
    const items = document.querySelectorAll('.grocery-item');
    console.log(items);
    if (items.length > 0)
        items.forEach(item => list.removeChild(item));

    container.remove('show-container')
    displayAlert('Productos limpiados','danger')
    setBackToDefault()
    localStorage.removeItem('list')
}
// display alert - mostrar alerta
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //remove alert
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1650);
}
// set back to default - volver al los valores predeterminados
function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'Guardar';
}
// **** LOCAL STORAGE API- almacenamiento local ****
function addToLocalStorage(id,value){
    //shorhand -> si el nombre del valor es igual que el nombre de la propiedad solo colocaremos el nombre en comun
    const grocery = {id,value} 
    let items = getLocalStorage()
    items.push(grocery)
    localStorage.setItem('list',JSON.stringify(items))
}
function removeFromLocalStorage(id){
    let items = getLocalStorage()

    items = items.filter(function (item){
        if (item.id !== id){
            return item
        }
    })
    localStorage.setItem('list',JSON.stringify(items))
}
function editLocalStorage(id,value){
    let items = getLocalStorage()

    items = items.map(function (item){
        if (item.id === id) {
            item.value = value
        }
        return item
    })
    localStorage.setItem('list',JSON.stringify(items))
}
function getLocalStorage(){
    return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : []
}
// SETUP ITEMS - configurar items
function setupItems() {
    let items = getLocalStorage()

    if (items.length >0) {
        items.forEach(function (item){
            createListItems(item.id,item.value)
        })
    }
    container.classList.add('show-container');
}
function createListItems(id,value) {
    const element = document.createElement('article')
    //add class
    element.classList.add('grocery-item');
    // element.setAttribute('data-id', id);
    element.setAttribute('data-id', id)
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
        <button class="edit-btn">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="delete-btn">
            <i class="fa-solid fa-trash"></i>
        </button >
    </div>`;
    // append child
    list.appendChild(element);
    // display container
    container.classList.add('show-container');
    //Delete and edit button - boton de borrado y edicion 
    const deleteBtn = document.querySelector('.delete-btn');
    const editBtn = document.querySelector('.edit-btn');
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);
}