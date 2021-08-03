import inputChecker from '../inputChecker';

export default () => {
  const mainForm = document.querySelector('.main-form');
  const inputs = document.querySelectorAll('input');

  const regexNames = [
    /^[a-zA-Zа-яА-Я]{1,20}$/,
    /^[a-zA-Zа-яА-Я]{1,20}\s$/,
    /^[a-zA-Zа-яА-Я]{1,20}\s[a-zA-Zа-яА-Я]{1,20}$/,
  ];
  const regexPhoneNumbers = [
    /^\+$/,
    /^\+?3$/,
    /^(\+?38)?$/,
    /^(\+?38)?\($/,
    /^(\+?38)?0$/,
    /^(\+?38)?\(?0$/,
    /^(\+?38)?\(?0[9675]$/,
    /^(\+?38)?\(?0[9675][23567890]$/,
    /^(\+?38)?\(?0[9675][23567890]\)?$/,
    /^(\+?38)?\(?0[9675][23567890]\)?[\-\s]?$/,
    /^(\+?38)?\(?0[9675][23567890]\)?[\-\s]?\d$/,
    /^(\+?38)?\(?0[9675][23567890]\)?[\-\s]?\d{2}$/,
    /^(\+?38)?\(?0[9675][23567890]\)?[\-\s]?\d{3}$/,
    /^(\+?38)?\(?0[9675][23567890]\)?[\-\s]?\d{3}[\-\s]?$/,
    /^(\+?38)?\(?0[9675][23567890]\)?[\-\s]?\d{3}[\-\s]?\d$/,
    /^(\+?38)?\(?0[9675][23567890]\)?[\-\s]?\d{3}[\-\s]?\d{2}$/,
    /^(\+?38)?\(?0[9675][23567890]\)?[\-\s]?\d{3}[\-\s]?\d{2}[\-\s]?$/,
    /^(\+?38)?\(?0[9675][23567890]\)?[\-\s]?\d{3}[\-\s]?\d{2}[\-\s]?\d$/,
    /^(\+?38)?\(?0[9675][23567890]\)?[\-\s]?\d{3}[\-\s]?\d{2}[\-\s]?\d{2}$/,
  ];
  const regexEmails = [
    /^[\w\.\~\+-]+$/,
    /^[\w\.\~\+-]+@$/,
    /^[\w\.\~\+-]+@[a-z]{1,10}$/,
    /^[\w\.\~\+-]+@[a-z]{1,10}\.$/,
    /^[\w\.\~\+-]+@[a-z]{1,10}\.[comnetruai]{1,3}$/,
  ];

  inputChecker(
    'input[name=name]', 
    regexNames,
    'Use letters only', 
    'status'
  );
  inputChecker(
    'input[name=phone]',
    regexPhoneNumbers,
    'Use appropriate order and numbers only',
    'status'
  );
  inputChecker(
    'input[name=email]', 
    regexEmails, 
    'Type your email',
    'status'
  );
};
