import axios from 'axios';
export default (trigger) => {
  const button = document.querySelector(trigger);
  
  button.addEventListener('click', async () => {
    const { data } = await axios('assets/styles.json');
    data.forEach(({ src, title, link }) =>
      button.previousElementSibling.insertAdjacentHTML('beforeend', `
        <div class="col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 animated fadeInUp">
          <div class=styles-block>
            <img src=${ src } alt>
            <h4>${ title }</h4>
            <a href="${ link }">Подробнее</a>
          </div>
        </div>
      `))
    button.remove()
  }, {once: true})
}