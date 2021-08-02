export const getScrollWidth = () => {
  const outer = document.createElement('div');
  const inner = document.createElement('div');

  document.body.appendChild(outer);
  outer.appendChild(inner);

  outer.style.visibility = 'hidden';
  outer.style.overflowY = 'scroll';

  const scrollWidth = outer.offsetWidth - inner.offsetWidth;

  outer.remove();

  return scrollWidth;
};

export const setModalProps = (
  modalSelector,
  modalDisplay,
  bodyOverflow,
  bodyMarginRight
) => {
  modalSelector.style.display = modalDisplay;
  document.body.overflow = bodyOverflow;
  document.body.marginRight = bodyMarginRight;
};