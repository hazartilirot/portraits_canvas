export default (selector, regexArray, errorMsg, classAtrError) => {
  
  const selectorAll = document.querySelectorAll(selector);
  
  selectorAll.forEach(i => {
    i.addEventListener('input', () => {
      let msg;
      if (!regexArray.some(regex => regex.test(i.value))) {
        i.value = i.value.substring(0, i.value.length - 1);
        
        i.classList.add('npt-error')
        const form = i.parentNode;
        msg = document.createElement('div');
        msg.classList.add(`${classAtrError}`);
        msg.style.marginTop = '30px';
        form.appendChild(msg);

        if (msg.previousSibling.className === `${classAtrError}`) {
          msg.previousSibling.remove();
        }

        msg.textContent = errorMsg;

        setTimeout(() => i.classList.remove('npt-error'), 500);
        setTimeout(() => msg.remove(), 2500);
      }
    });
  });
}
