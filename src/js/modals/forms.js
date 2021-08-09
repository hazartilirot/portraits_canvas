import inputChecker from '../inputChecker';
import {
  regexNames, 
  regexEmails, 
  regexPhoneNumbers, 
  regexMessage, 
  regexImageExtension
} from '../regex';

import {delay} from '../utilities';

export default () => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const textArea = document.querySelectorAll('textarea[name="message"]');
  const uploads = document.querySelectorAll('input[name="upload"]')
  
  inputChecker(
    'input[name=upload]',
    regexImageExtension,
    'Select images only',
    'status'
  )
  inputChecker(
    'input[name=name]', 
    regexNames,
    'Use Cyrillic or Latin alphabetic characters only', 
    'status'
  );
  inputChecker(
    'input[name=phone]',
    regexPhoneNumbers,
    'Use an appropriate order of numbers for Ukrainian mobile network operators only',
    'status'
  );
  inputChecker(
    'input[name=email]', 
    regexEmails, 
    'Type email in the following format account@provider.com',
    'status'
  );
  inputChecker(
    'textarea[name=message]',
    regexMessage,
    'You must not use Latin characters',
    'status'
  )
  inputChecker(
    'input[name=message]',
    regexMessage,
    'You must not use Latin characters',
    'status'
  )
  inputChecker(
    'input[name=message]',
    regexMessage,
    'You must not use Latin characters',
    'status'
  )
  
  /*uploads.forEach(upload => 
    upload.addEventListener('input', () => {
      console.log(upload.value)
      
      
    })
  )*/
  
  const message = {
    loading: "Loading...",
    success: "Thank you for reaching out to us",
    failure: "Something went wrong",
    spinner: "assets/img/spinner.png",
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  }
  
  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      body: data
    })
    return await res.text();
  }
  
  const clearInputs = () => {
    inputs.forEach(input => input.value = '');
    uploads.forEach(input => input.previousElementSibling.textContent = 'Файл не выбран');
    textArea.forEach(input => input.value = '')
  }
  
  const routes = {
    enquiry: 'assets/enquiry.php',
    designer: 'assets/server.php'
  }
  
  forms.forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      
      form.classList.add('animated', 'fadeOutUp');
      delay(500)
        .then(id => {
          form.style.display = 'none';
          clearTimeout(id);
        })
      
      const statusContainer = document.createElement('div');
      statusContainer.classList.add('status');
      form.parentNode.appendChild(statusContainer);
      
      const spinner = document.createElement('div');
      spinner.classList.add('spinner');
      statusContainer.appendChild(spinner);
      
      const textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusContainer.appendChild(textMessage);
      
      const formData = new FormData(form);
      
      let path;
      
      if (form.closest('.popup-consultation')) path = routes.enquiry 
      if (form.closest('.popup-design')) path = routes.designer
      if (form.closest('.form-design')) path = routes.designer
      
      postData(path, formData)
        .then(res => {
          console.log(res);
          textMessage.textContent = message.success;
          clearInputs();
        })
        .catch(() => {
          textMessage.textContent = message.failure;
        })
        .finally(() => {        
          spinner.remove();
          delay(3000)
            .then(id => {
              statusContainer.remove();
              form.classList.remove('fadeOutUp');
              form.classList.add('fadeInUp')
              form.style.display = 'block';
              clearTimeout(id);
            })
        })
    })
  })
  
};
