import { galleryItems } from './gallery-items.js';
// Change code below this line

const listGallery = document.querySelector('.gallery');
let instance = null;
let lightBoxRef = null;

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
  <li class="gallery__item">
  <a class="gallery__link" href=${original}>
  <img
  class="gallery__image"
  src=${preview}
  data-source="large-image.jpg"
  alt=${description}
  />
  </a>
  </li>`
  )
  .join('');

listGallery.innerHTML = markup;

listGallery.addEventListener('click', openModalImageHandler);

function openModalImageHandler(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const parentEl = evt.target.parentNode.href;
  instance = basicLightbox.create(`
    <img src=${parentEl} width="800" height="600">
    `);

  instance.show();
  makeListeners();
}

function makeListeners() {
  document.addEventListener('keydown', removeListenerEscHandler);
  lightBoxRef = document.querySelector('.basicLightbox');
  lightBoxRef.addEventListener('click', clickModalDelListenerHandler);
}

function clickModalDelListenerHandler(evt) {
  // console.log(evt.target);
  if (evt.target !== lightBoxRef) {
    return;
  }
  document.removeEventListener('keydown', removeListenerEscHandler);
}

function removeListenerEscHandler(evt) {
  // console.log('Слушатель ESC');
  if (evt.code !== 'Escape') {
    return;
  }
  instance.close(() => {
    document.removeEventListener('keydown', removeListenerEscHandler);
  });
}
