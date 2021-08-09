import { delay } from './utilities';

export default (selector, regexArray, errorMsg, classAtrError) => {
  
  const selectorAll = document.querySelectorAll(selector);
  let msg;
  
  const checkIfFileIsValid = (input) => {
    if (!input.files) return
    
    if (!regexArray[0].test(input.files[0].name)) {
      input.files = null;
      input.value = '';
      input.previousElementSibling.textContent = `${errorMsg}`;
      input.parentNode.lastElementChild.disabled = true;
      input.parentNode.lastElementChild.style.cursor = 'not-allowed';
      input.parentNode.firstElementChild.style.display = 'none';
      delay(3000)
        .then(id => {
          input.parentNode.lastElementChild.disabled = false;
          input.parentNode.firstElementChild.style.display = 'block';
          input.parentNode.lastElementChild.style.cursor = 'pointer';
          input.previousElementSibling.textContent = 'Файл не выбран';              ;
          clearTimeout(id);
        })
      return;
    }
    const name = input.files[0].name.replace(regexArray[0], '');
    const ext = regexArray[0].exec(input.files[0].name)[0] || ''
    input.previousElementSibling.textContent = `${name.substring(0, 6)}... ${ext}`
      
  }
  
  const liveInputCheckHandler = (input) => {
    if (!regexArray.some(regex => regex.test(input.value))) {
        input.value = input.value.substring(0, input.value.length - 1);
        
        input.classList.add('npt-error')
        const form = input.parentNode;
        msg = document.createElement('div');
        msg.classList.add(`${classAtrError}`);
        msg.style.marginTop = '30px';
        form.appendChild(msg);
    
        if (msg.previousSibling.className === `${classAtrError}`)
          msg.previousSibling.remove();
    
        msg.textContent = errorMsg;
    
        delay(500)
          .then(id => {
            input.classList.remove('npt-error');
            clearTimeout(id);
        });
          
        delay(2500)
          .then(id => {
            msg.remove();
            clearTimeout(id);
        });
      }
  }
  
  selectorAll.forEach(input => {
    input.addEventListener('input', () => {
      
      checkIfFileIsValid(input);
      
      if (input.value.length === 0) return;
      
      liveInputCheckHandler(input);
    });
  });
}
