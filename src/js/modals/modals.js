import { getScrollWidth } from '../utilities';
import { setModalProps } from '../utilities';
import callModalByTime from './callModalByTime';

export default () => {
  const scrollWidth = getScrollWidth();

  const setModal = (
    triggerSelector,
    modalSelector,
    closeSelector,
    closeOverlayByClick = true
  ) => {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]')
    
    trigger.forEach(i => {
      i.addEventListener('click', e => {
        e.target && e.preventDefault();

        windows.forEach(e => e.style.display = 'none')

        setModalProps(modal, 'block', 'hidden', `${scrollWidth}px`);
      })
    });

    close.addEventListener('click', () =>
      setModalProps(modal, 'none', 'auto', '0px'));

    modal.addEventListener('click', e => {
      if (e.target === modal && closeOverlayByClick)
        windows.forEach(e => setModalProps(e, 'none', 'auto', '0px'))
    });
  };
  
  setModal('.button-design', '.popup-design', '.popup-design .popup-close');
}
