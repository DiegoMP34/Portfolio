const modal = document.querySelector(".modal-overlay");
const modalBtn = document.querySelector(".modal-btn");

modalBtn.addEventListener("click",()=>{
    modal.classList.toggle("modal-show")
});
function closeBtn (){
    modal.classList.toggle("modal-show");
}
