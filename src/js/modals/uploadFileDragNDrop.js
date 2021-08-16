import { checkIfFileIsValid } from '../inputChecker';
import { regexImageExtension } from '../regex';
import {
  clearInputs,
  delay,
  findUpParent,
  message,
  postData,
  loadingSpinner
} from '../utilities';

export default () => {
  const inputUploads = document.querySelectorAll('input[name=upload]');
  
  inputUploads.forEach(input => {

    input.addEventListener('drop', event => {
      event.preventDefault();
      input.files = event.dataTransfer.files
      const isValid = checkIfFileIsValid(input, regexImageExtension, 'Select images only');
      
      if (!isValid) return;
      
      const mainParent = findUpParent(input, 'MAIN');
      
      if (!mainParent) return;
      
      const {statusContainer, spinner, textMessage} = loadingSpinner(input, message);
      
      const formData = new FormData();
      
      formData.append('file', input.files[0])
      
      postData('assets/server.php', formData)
        .then(res => {
          console.log(res);
          textMessage.textContent = message.success;
          delay(3000)
            .then(id => {
              clearInputs();
              clearTimeout(id);
            })
        })
        .catch(() => {
          textMessage.textContent = message.failure;
        })
        .finally(() => {        
          spinner.remove();
          delay(3000)
            .then(id => {
              statusContainer.remove();
              clearTimeout(id);
            })
        })
    });
  });
};
