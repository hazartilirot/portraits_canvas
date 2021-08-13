import { getScrollWidth } from '../utilities';
import { setModalProps } from '../utilities';
import { clearInputs } from '../utilities';
import callModalByTime from './callModalByTime';

export default () => {
  const scrollWidth = getScrollWidth();
  let btnIsClicked = false;
  
  const setModal = (
    triggerSelector,
    modalSelector,
    closeSelector,
    hideSelectorByClick = false
  ) => {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]')
    
    trigger.forEach(i => {
      i.addEventListener('click', e => {
        e.target && e.preventDefault();
        btnIsClicked = true;
        if (hideSelectorByClick) i.style.display = 'none';
        
        windows.forEach(e => {
          e.style.display = 'none';
          e.classList.add('animated', 'fadeIn')
        });

        setModalProps(modal, 'block', 'hidden', `${scrollWidth}px`);
      })
    });

    close.addEventListener('click', () => {
      setModalProps(modal, 'none', 'auto', '0px')
      clearInputs();
    });

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        windows.forEach(e => setModalProps(e, 'none', 'auto', '0px'))
        clearInputs();
      }
    });
    
    callModalByTime('.popup-consultation', 60000);
  };
  
  const showModalOncePageEndReached = selector => {
    window.addEventListener('scroll', () => {
      const clientsHeight = window.pageYOffset + document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight
      if (!btnIsClicked && clientsHeight >= scrollHeight)
        document.querySelector(selector).click();
    })
  }
  
  setModal('.button-design', '.popup-design', '.popup-design .popup-close');
  setModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  setModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  showModalOncePageEndReached('.fixed-gift')
}