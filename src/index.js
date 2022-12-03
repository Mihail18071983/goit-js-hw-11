import { Notify } from 'notiflix';
import '../node_modules/modern-normalize/modern-normalize.css';
import './css/styles.css';
import { fetchImage } from './js/fetchImage';
import { refs } from './js/refferense';
import { render } from './js/render';
let _page = 1;
let _per_page = 40;
let query = '';
refs.form.addEventListener('submit', handleSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const { value } = form.elements.searchQuery;
  if (value !== query) {
    refs.gallery.innerHTML = '';
    query = value;
    _page = 1;
    form.reset();
  }
  fetchImage(query, _page, _per_page)
    .then(data => {
      render(data.hits);
      return data;
    })
    .then(data =>
      Notify.success(`Hooray! We found ${data.totalHits} images.`)
    );
}

function onLoadMore(e) {
  console.log(e.target);
  _page += 1;
  fetchImage(query, _page, _per_page).then(data => render(data.hits));
}
