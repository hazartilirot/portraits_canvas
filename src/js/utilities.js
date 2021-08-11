export const getScrollWidth = () => {
  const outer = document.createElement('div');
  const inner = document.createElement('div');

  document.body.appendChild(outer);
  outer.appendChild(inner);

  outer.style.visibility = 'hidden';
  outer.style.overflowY = 'scroll';

  const scrollWidth = outer.offsetWidth - inner.offsetWidth;

  outer.remove();

  return scrollWidth;
};



export const setModalProps = (
  modalSelector,
  modalDisplay,
  bodyOverflow,
  bodyMarginRight
) => {
  modalSelector.style.display = modalDisplay;
  document.body.overflow = bodyOverflow;
  document.body.marginRight = bodyMarginRight;
};

export const clearInputs = () => {
  const inputs = document.querySelectorAll('input');
  const textArea = document.querySelectorAll('textarea[name="message"]');
  const uploads = document.querySelectorAll('input[name="upload"]')
  
  inputs.forEach(input => input.value = '');
  uploads.forEach(input => input.previousElementSibling.textContent = 'Файл не выбран');
  textArea.forEach(input => input.value = '')
  }

export const delay = ms =>
    new Promise(resolve => {
      const id = setTimeout(() => resolve(id), ms);
    });