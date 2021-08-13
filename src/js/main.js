import modals from './modals/modals';
import forms from './modals/forms';
import slides from './modals/slides';
import showMoreStylesCards from './modals/showMoreStylesCards';
import calculateOrder from './modals/calculateOrder';
import portfolioMenu from './modals/portfolioMenu';
import makeAnyCanvasFrame from './modals/makeAnyCanvasFrame';

window.addEventListener('DOMContentLoaded', () => {
  "use strict";
  
  modals();
  forms();
  slides();
  showMoreStylesCards('.button-styles');
  calculateOrder();
  portfolioMenu()
  makeAnyCanvasFrame();
})