import modals from './modals/modals';
import forms from './modals/forms';
import slides from './modals/slides';
import showMoreStylesCards from './modals/showMoreStylesCards';
import calculateOrder from './modals/calculateOrder';
import portfolioMenu from './modals/portfolioMenu';
import makeAnyCanvasFrame from './modals/makeAnyCanvasFrame';
import faqAccordion from './modals/faqAccordion';
import burgerMenu from './modals/burgerMenu';
import navigateToSection from './modals/navigateToSection';
import uploadFileDragNDrop from './modals/uploadFileDragNDrop';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  forms();
  slides();
  showMoreStylesCards('.button-styles');
  calculateOrder();
  portfolioMenu();
  makeAnyCanvasFrame();
  faqAccordion();
  burgerMenu();
  navigateToSection();
  uploadFileDragNDrop()
});