import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listGallery = document.querySelector('.some-element');

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
  <li class="gallery__item">
  <a class="gallery__link" href=${original}>
  <img
  class="gallery__image"
  src=${preview}
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
  new SimpleLightbox('.some-element a');
  // var lightbox = new SimpleLightbox('.gallery a', {
  //   /* options */
  // });
}

// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img class="gallery__image" src="small-image.jpg" alt="Image description" />
//   </a>
// </li>;
