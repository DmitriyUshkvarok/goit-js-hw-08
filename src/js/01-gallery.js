import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import templateFunction from '../templates/gallery-items.hbs';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const gallery = document.querySelector('.gallery');
// ======import from folder templates
function createMarkup() {
  const itemMarkup = galleryItems.map(templateFunction).join('');
  gallery.insertAdjacentHTML('beforeend', itemMarkup);
  gallery.style.listStyle = 'none';
}
createMarkup();
// =======librarry  SimpleLightbox
new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
// =========lazyload
const lazyLoad = document.querySelectorAll('img[loading="lazy"]');
lazyLoad.forEach(image => {
  image.addEventListener('load', omImageLoadet, { once: true });
});

function omImageLoadet() {
  event.target.classList.add('appaer');
}
