export default () => {
  const mainWrapper = document.querySelector('.sizes');

  let currentBlock;

  const toggleProps = (styleDisplay, regex, changeTo) => {
    if (!currentBlock) return;
    const paragraphs = currentBlock.querySelectorAll('p:not(.sizes-hit)');
    paragraphs.forEach(p => (p.style.display = `${styleDisplay}`));
    const img = currentBlock.firstElementChild;
    img.src = img.src.replace(new RegExp(regex), `${changeTo}`);
  };

  const toggleImageOnCanvas = ({ target, type }) => {
    const sizesBlock = target.closest('.sizes-block');

    if (sizesBlock && type === 'mouseover') {
      currentBlock = sizesBlock;
      toggleProps('none', '(?<=[a-z]-[0-9])\\.png', '-1.png');
    } else {
      toggleProps('block', '(?<=-[0-9])-1\\.png', '.png');
    }
  };
  mainWrapper.addEventListener('mouseover', toggleImageOnCanvas);
  mainWrapper.addEventListener('mouseout', toggleImageOnCanvas);
};
