export default () => {
  const portfolioMenu = document.querySelector('.portfolio-menu');
  const portfolioMenuBtn = document.querySelectorAll('.portfolio-menu > li');
  const portfolioBlock = document.querySelectorAll('.portfolio-block');
  const portfolioNotExist = document.querySelector('.portfolio-no');
  
  const getCategoryClass = (element, regex) =>
    element.className.replace(new RegExp(regex), '');
  
  const makeSpecificCategoryToAppear = activeClassName => {
    
    let foundCategory = false;
    
    portfolioBlock.forEach(block => {
      portfolioNotExist.style.display = 'none';
      block.style.display = 'none';
      block.classList.remove('animated', 'fadeIn');
      const currentClass = getCategoryClass(block, `.+(?=${activeClassName})`);
      if (activeClassName === 'all' || currentClass === activeClassName) {
        block.style.display = 'block';
        foundCategory = true;
      } 
      block.classList.add('animated', 'fadeIn');
    });
    
    if (!foundCategory) portfolioNotExist.style.display = 'block';
  }
  
  const setActiveMenuBtn = activeCategoryClass => {
    portfolioMenuBtn.forEach(btn => {
      btn.classList.remove('active')
      const currentClass = getCategoryClass(btn, '\\sactive');
      if (currentClass === activeCategoryClass)
        btn.classList.add('active');
    });
  }
  
  portfolioMenu.addEventListener('click', ({ target }) => {
    if (target === portfolioMenu) return; /*MIND button's corners clicks*/
    let currentClass = getCategoryClass(target, '\\sactive')
    setActiveMenuBtn(currentClass);
    makeSpecificCategoryToAppear(currentClass);
  })
}