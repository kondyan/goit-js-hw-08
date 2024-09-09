import * as basicLightbox from 'basiclightbox';
import '../css/common.css';
import '../css/01-gallery.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createLayot = galleryItems
  .map(e => {
    return `   <li class="gallery__item">
          <a class="gallery__link" href=${e.original}>
            <img
              class="gallery__image"
              src=${e.preview}
              data-source=${e.original}
              alt=${e.description}
            />
          </a>
        </li>`;
  })
  .join(' ');

gallery.insertAdjacentHTML('afterbegin', createLayot);

let instance;

gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.currentTarget === event.target) {
    return;
  }
  instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${event.target.dataset.source}">
    </div>
`
  );
  instance.show();
});

window.addEventListener('keydown', e => {
  if (instance && e.key === 'Escape') {
    instance.close();
  }
});
