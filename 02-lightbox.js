import{g as r}from"./assets/gallery-items-C3TQHNc4.js";/* empty css                      */const a=document.querySelector(".some-element"),i=m(r);a.innerHTML=i;a.addEventListener("click",o);function m(e){return e.map(({preview:l,original:t,description:n})=>`
  <li class="gallery__item">
  <a class="gallery__link" href=${t}>
  <img
  class="gallery__image"
  src=${l}
  alt=${n}
  />
  </a>
  </li>`).join("")}function o(e){e.preventDefault(),e.target.nodeName==="IMG"&&new SimpleLightbox(".some-element a",{captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=02-lightbox.js.map
