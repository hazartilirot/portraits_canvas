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
  document.body.style.overflowY = bodyOverflow;
  document.body.style.marginRight = bodyMarginRight;
  document.querySelector('.fixed-gift').style.marginRight = bodyMarginRight;
  document.querySelector('.pageup').style.marginRight = bodyMarginRight;
};

export const clearInputs = () => {
  const inputs = document.querySelectorAll('input');
  const textArea = document.querySelectorAll('textarea[name="message"]');
  const uploads = document.querySelectorAll('input[name="upload"]')
  const selects = document.querySelectorAll('select')
  
  inputs.forEach(input => input.value = '');
  uploads.forEach(input => input.previousElementSibling.textContent = 'Файл не выбран');
  textArea.forEach(input => (input.value = ''));
  selects.forEach(select => {
    select.options[0].setAttribute('selected', 'selected');
    select.options[0].removeAttribute('selected');
  });
  }

export const delay = ms =>
    new Promise(resolve => {
      const id = setTimeout(() => resolve(id), ms);
    });

export const message = {
  loading: "Loading...",
  success: "Thank you for reaching out to us",
  failure: "Something went wrong",
  spinner: "assets/img/spinner.png",
  ok: 'assets/img/ok.png',
  fail: 'assets/img/fail.png'
}

export const loadingSpinner = (element, message) => {
  const statusContainer = document.createElement('div');
  statusContainer.classList.add('status');
  element.parentNode.appendChild(statusContainer);
  
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  statusContainer.appendChild(spinner);
  
  const textMessage = document.createElement('div');
  textMessage.textContent = message.loading;
  statusContainer.appendChild(textMessage);
  
  return { statusContainer, spinner, textMessage }
}

export const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    body: data
  })
  return await res.text();
}

export const findUpParent = (element, tagName) => {
  while (element.parentNode.tagName !== "BODY") {
    element = element.parentNode;
    if (element.tagName === tagName) return true;
  }
  return false;
}