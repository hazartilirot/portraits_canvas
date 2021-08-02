import { getScrollWidth } from '../utilities';
import { setModalProps } from '../utilities';

const scrollWidth = getScrollWidth();

export default (element, time) => {
    let id;
    
    const resetTimer = () => {
      clearTimeout(id);
      
      id = setTimeout(() => {
        const popups = document.querySelectorAll('[data-modal]');
        let activeOverlay = false;
        popups.forEach(i =>
          activeOverlay = i.style.display !== 'none' && i.style.display !== ''
        )
        if (activeOverlay) return;
        setModalProps(element, 'block', 'hidden', `${scrollWidth}px`)
      }, time);
    };
    window.addEventListener('load', resetTimer, true);
    const events = [
      'mousedown',
      'mousemove',
      'keypress',
      'scroll',
      'touchstart',
    ];
    events.forEach(e => document.addEventListener(e, resetTimer, true))
  }