import modals from './modals/modals';
import forms from './modals/forms';
import slides from './modals/slides';
import showMoreStylesCards from './modals/showMoreStylesCards';

window.addEventListener('DOMContentLoaded', () => {
  "use strict";
  
  modals();
  forms();
  slides();
  showMoreStylesCards('.button-styles', '.styles-2')
})