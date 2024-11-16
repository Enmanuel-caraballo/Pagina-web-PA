(function(){

    const titleQuestions = [...document.querySelectorAll('.questions__title')];

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPaddding = question.parentElement.parentElement;

            addPaddding.classList.toggle('questions__padding--add');

            question.children[0].classList.toggle('questions__arrow--rotate')

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });

})();