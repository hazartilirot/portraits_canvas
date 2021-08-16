import inputChecker from '../inputChecker';
import {
  regexNames, 
  regexEmails, 
  regexPhoneNumbers, 
  regexMessage, 
  regexImageExtension
} from '../regex';

import { delay, clearInputs, postData, message, loadingSpinner } from '../utilities';

export default () => {
  const forms = document.querySelectorAll('form');
    
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
      
      const { statusContainer, spinner, textMessage } = loadingSpinner(form, message)
      
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
