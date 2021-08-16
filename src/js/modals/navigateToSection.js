export default () => {
  const header = document.querySelector('.header');
  const headerHeight = header.scrollHeight;
  const mainSectionHeight = document.querySelector('.main').scrollHeight;
  const toTheTopBtn = document.querySelector('.pageup');

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop | 0;
    toTheTopBtn.style.opacity =
      scrollTop >= mainSectionHeight + headerHeight ? '1' : '0';
    toTheTopBtn.style.visibility =
      scrollTop >= mainSectionHeight + headerHeight ? 'visible' : 'hidden';
  });

  toTheTopBtn.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });

  header.addEventListener('click', event => {
    event.preventDefault();

    const anchorLink = event.target.closest('a');
    if (!anchorLink || !anchorLink.hash) return;
    const element = document.querySelector(anchorLink.hash);
    const paddingTop = +window
      .getComputedStyle(element)
      .getPropertyValue('padding-top')
      .replace(/px$/, '');
    const anchorCoords = element.getBoundingClientRect().top + paddingTop;

    window.scrollTo({ top: anchorCoords, left: 0, behavior: 'smooth' });
  });
};
