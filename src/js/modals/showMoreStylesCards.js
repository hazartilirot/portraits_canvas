export default (trigger, styles) => {
  const button = document.querySelector(trigger);
  const cards = document.querySelectorAll(styles);
  
  button.addEventListener('click', () => {
    cards.forEach(card => 
      card.className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 animated fadeInUp');
    button.remove();
  }, {once: true})
}