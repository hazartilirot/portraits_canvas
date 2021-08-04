import inputChecker from '../inputChecker';
import {regexNames, regexEmails, regexPhoneNumbers} from '../regex';

export default () => {
  const mainForm = document.querySelector('.main-form');
  const inputs = document.querySelectorAll('input');
  
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
};
