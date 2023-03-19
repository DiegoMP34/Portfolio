//usando selectores dentro de elementos

const questions = document.querySelectorAll(".question");

questions.forEach((question)=>{
    const btn = question.querySelector('.question-btn')
    
    btn.addEventListener('click',()=>{
        questions.forEach((item)=>{
            // console.log(item);
            if(item !== question)
            item.classList.remove('show-text')
        })
        
        question.classList.toggle('show-text')
    })
})


//atravesando al DOM -> creo que se refiere a punto donde
//se busca un al padre del padre de un elemento.

/* const btns = document.querySelectorAll(".question-btn");

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
}); */