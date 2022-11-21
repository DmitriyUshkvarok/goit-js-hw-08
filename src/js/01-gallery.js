import { galleryItems } from './gallery-items';
import 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const gallery = document.querySelector('.gallery');

const newGallery = items => {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<li>
              <a class="gallery__item" href=${original}>
              <img class="gallery__image lazyload" data-src=${preview} alt="${description}" loading="lazy"/>
              </a>
          </li>`
    )
    .join('');
};

gallery.style.listStyle = 'none';
gallery.innerHTML = newGallery(galleryItems);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});
console.log(gallery);

const lazyLoad = document.querySelectorAll('img[loading="lazy"]');
lazyLoad.forEach(image => {
  image.addEventListener('load', omImageLoadet, { once: true });
});

function omImageLoadet() {
  event.target.classList.add('appaer');
}

// import { galleryItems } from './gallery-items';
// import SimpleLightbox from 'simplelightbox';
// import templateFunction from '../templates/gallery-items.hbs';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const gallery = document.querySelector('.gallery');

// (function createMarkup() {
//   const itemMarkup = galleryItems.map(templateFunction).join('');
//   gallery.insertAdjacentHTML('beforeend', itemMarkup);
// })();

// new SimpleLightbox('.gallery a', {
//   captions: true,
//   captionsData: 'alt',
//   captionDelay: 250,
// });
