import{g as l}from"./assets/gallery-items-C3TQHNc4.js";/* empty css                      */const t=document.querySelector(".gallery"),i=l.map(({preview:e,original:a,description:r})=>`
<li class="gallery__item">
  <a class="gallery__link" href=${a}>
    <img
      class="gallery__image"
      src=${e}
      data-source="large-image.jpg"
      alt=${r}
    />
  </a>
</li>`).join("");t.innerHTML=i;t.addEventListener("click",n);function n(e){if(e.target.nodeName!=="IMG")return;const a=e.target.parentNode.href;basicLightbox.create(`
    <img src=${a} width="800" height="600">
`).show(),e.preventDefault()}
//# sourceMappingURL=01-gallery.js.map
