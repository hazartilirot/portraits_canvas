export default () => {
  const brgBtn = document.querySelector('.burger');
  const brgMenu = document.querySelector('.burger-menu');
  
  brgMenu.style.display = "none";
  
  brgBtn.addEventListener('click', () => brgMenu.style.display =
    brgMenu.style.display === 'none' && window.screen.availWidth < 993 
      ? 'block' 
      : 'none');
  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) brgMenu.style.display = 'none';
  });
}