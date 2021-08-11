export default () => {
  const size = document.querySelector('#size');
  const fabric = document.querySelector('#fabric');
  const services = document.querySelector('#services');
  const promocode = document.querySelector('.promocode');
  const totalPrice = document.querySelector('.calc-price');

  const getTotal = () => {
    let total = +size.value * +fabric.value + +services.value;
    if (promocode.value.toUpperCase() === 'IWANTPOPART') total *= 0.7;

    totalPrice.textContent =
      total && +size.value && +fabric.value
        ? total + 'UAH'
        : 'Для расчета нужно выбрать размер картины и материал картины';
  };
  [size, fabric, services].forEach(i => i.addEventListener('change', getTotal));
  promocode.addEventListener('input', getTotal);
};
