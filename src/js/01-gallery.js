import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const listGallery = document.querySelector('.gallery');
console.dir(listGallery);
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
console.log(markup);
listGallery.innerHTML = markup;

/* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li> */
