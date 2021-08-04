export default () => {
  const showSlides = (selector, axis, prevBtnSelector, nextBtnSelector) => {
    const containers = document.querySelectorAll(selector);

    let index = 0;
    let id;

    containers.forEach(i => {
      i.style.display = 'none';
      i.classList.add('animated');
    });

    const setClassDirection = attribute => {
      containers.forEach(i =>
        i.classList.remove(`${i.className.match(/slideIn.+/)}`)
      );
      containers[index].classList.add(attribute);
    };

    const changeSlide = (n = 0) => {
      containers[index].style.display = 'none';

      index += n;

      if (index < 0) index = containers.length - 1;
      if (index >= containers.length) index = 0;

      containers[index].style.display = 'block';

      if (axis === 'x' || axis === 'horizontal') {
        if (n === -1) setClassDirection('slideInRight');
        if (n === 1) setClassDirection('slideInLeft');
      }

      if (axis === 'y' || axis === 'vertical') {
        if (n === -1) setClassDirection('slideInDown');
        if (n === 1) setClassDirection('slideInUp');
      }
    };

    const resetTimer = (time = 1000) => {
      clearInterval(id);
      setTimeout(() => id = setInterval(() => changeSlide(1), 5000), time)
    };
    
    const prevBtn = document.querySelector(prevBtnSelector);
    const nextBtn = document.querySelector(nextBtnSelector);

    if (prevBtn !== undefined && prevBtn !== null) {
      prevBtn.addEventListener('click', () => {
        changeSlide(-1);
        resetTimer(15000);
      });
    }
    
    if (nextBtn !== undefined && nextBtn !== null) {
      nextBtn.addEventListener('click', () => {
        changeSlide(1);
        resetTimer(15000);
      });
    }
    
    changeSlide();
    resetTimer();
  }
    
  showSlides('.feedback-slider-item', 'x', '.main-prev-btn', '.main-next-btn');
  showSlides('.main-slider-item', 'y');
};
