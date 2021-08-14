export default () => {
  const bubblingInterceptor = document.querySelector('#accordion');
  const allQuestions = document.querySelectorAll('.accordion-heading');
  
  let id;
  
  const collapseActiveQuestion = element => {
    element.classList.toggle('header-active');
    const sibling = element.nextElementSibling;
    sibling.classList.toggle('content-active');

    sibling.style.maxHeight = element.classList.contains('header-active')
      ? sibling.scrollHeight + 80 + 'px'
      : '0px'
  }
  
  const toggleQuestions = ({ target }) => {
    const currentQuestion = target.closest('.accordion-heading');
    
    if (!currentQuestion) return;

    if (id === undefined) {
      id = +currentQuestion.dataset.id;
    } else if (id === +currentQuestion.dataset.id) {
      id = undefined;
    } else {
      collapseActiveQuestion(allQuestions[id])
      id = +currentQuestion.dataset.id;
    }
    collapseActiveQuestion(currentQuestion);  
  }
  bubblingInterceptor.addEventListener('click', toggleQuestions);
}