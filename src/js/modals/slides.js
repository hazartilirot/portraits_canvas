export default () => {
  const showSlides = (selector, axis, prevBtnSelector, nextBtnSelector) => {
    const containers = document.querySelectorAll(selector);

    let index = 0;
    let intervalId;
    
    containers.forEach(i => {
      i.style.display = 'none';
      i.classList.add('animated');
    });
    
    const setSlideDirection = attribute => {
      containers.forEach(i =>
        i.classList.remove(`${i.className.match(/slideIn.+/)}`)
      );
      containers[index].classList.add(attribute);
    };
    /** 
     * @n - defines a direction change. By default the first slide would appear
     * */
    const changeSlide = (n = 0) => {
      containers[index].style.display = 'none';

      index += n;

      if (index < 0) index = containers.length - 1;
      if (index >= containers.length) index = 0;

      containers[index].style.display = 'block';

      if (axis === 'x' || axis === 'horizontal') {
        if (n === -1) setSlideDirection('slideInRight');
        if (n === 1) setSlideDirection('slideInLeft');
      }

      if (axis === 'y' || axis === 'vertical') {
        if (n === -1) setSlideDirection('slideInDown');
        if (n === 1) setSlideDirection('slideInUp');
      }
    };
    
    const resetTimer = () =>
      intervalId = setInterval(() => changeSlide(1), 4000);
    /**
     * @delay set timer in ms. Once a user's cursor enters slide's area the parameter would postpone their change.
     * */
    const sliderInterface = () => {
      const prevBtn = document.querySelector(prevBtnSelector);
      const nextBtn = document.querySelector(nextBtnSelector);
  
      if (prevBtn === undefined || prevBtn === null ||
          nextBtn === undefined || nextBtn === null)
        return;
      
      prevBtn.addEventListener('click', () => changeSlide(-1));
      nextBtn.addEventListener('click', () => changeSlide(1));
      
      containers[0].parentNode.addEventListener('mouseenter', () => clearInterval(intervalId))
      containers[0].parentNode.addEventListener('mouseleave', () => resetTimer())
    }
    
    sliderInterface()
    changeSlide();
    resetTimer();
  }
    
  showSlides('.feedback-slider-item', 'x', '.main-prev-btn', '.main-next-btn');
  showSlides('.main-slider-item', 'y');
};
