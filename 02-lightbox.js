import{g as l}from"./assets/gallery-items-C3TQHNc4.js";/* empty css                      */console.log(l);const a=document.querySelector(".some-element"),t=l.map(({preview:e,original:n,description:r})=>`
  <li class="gallery__item">
  <a class="gallery__link" href=${n}>
  <img
  class="gallery__image"
  src=${e}
  alt=${r}
  />
  </a>
  </li>`).join("");a.innerHTML=t;a.addEventListener("click",o);function o(e){e.preventDefault(),e.target.nodeName==="IMG"&&new SimpleLightbox(".some-element a")}
//# sourceMappingURL=02-lightbox.js.map
