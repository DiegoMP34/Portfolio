const tabBtn = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');
const btnContainer = document.querySelector('.btn-container');

btnContainer.addEventListener('click', e => {
    const id = e.target.dataset.id;
    //remover y añadir la clase active al btn
    tabBtn.forEach((btn) => {
        btn.classList.remove('active');
        e.target.classList.add('active');
    })
    //mostrar el articulo deseado
    articles.forEach((article) => {
        article.classList.remove('active');
    })
    const element = document.getElementById(id)
    element.classList.add('active');
})