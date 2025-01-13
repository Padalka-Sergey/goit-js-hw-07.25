import{g as l}from"./assets/gallery-items-C3TQHNc4.js";/* empty css                      */console.log(l);const e=document.querySelector(".gallery");console.dir(e);const a=l.map(({preview:r,original:o,description:s})=>`
<li class="gallery__item">
  <a class="gallery__link" href=${o}>
    <img
      class="gallery__image"
      src=${r}
      data-source="large-image.jpg"
      alt=${s}
    />
  </a>
</li>`).join("");console.log(a);e.innerHTML=a;
//# sourceMappingURL=01-gallery.js.map
