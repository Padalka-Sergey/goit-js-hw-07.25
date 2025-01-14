import { galleryItems } from './gallery-items.js';

// Change code below this line

const listGallery = document.querySelector('.gallery');

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

listGallery.addEventListener('click', openLargeImage);

function openLargeImage(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const parentEl = evt.target.parentNode.href;
  const instance = basicLightbox.create(`
    <img src=${parentEl} width="800" height="600">
`);

  instance.show();
  evt.preventDefault();
}
