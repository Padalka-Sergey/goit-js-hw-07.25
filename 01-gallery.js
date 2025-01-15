import{g as o}from"./assets/gallery-items-C3TQHNc4.js";/* empty css                      */const l=document.querySelector(".gallery");let n=null,r=null;const c=o.map(({preview:e,original:t,description:i})=>`
  <li class="gallery__item">
  <a class="gallery__link" href=${t}>
  <img
  class="gallery__image"
  src=${e}
  data-source="large-image.jpg"
  alt=${i}
  />
  </a>
  </li>`).join("");l.innerHTML=c;l.addEventListener("click",s);function s(e){if(e.preventDefault(),e.target.nodeName!=="IMG")return;const t=e.target.parentNode.href;n=basicLightbox.create(`
    <img src=${t} width="800" height="600">
    `),n.show(),d()}function d(){document.addEventListener("keydown",a),r=document.querySelector(".basicLightbox"),r.addEventListener("click",m)}function m(e){e.target===r&&document.removeEventListener("keydown",a)}function a(e){e.code==="Escape"&&n.close(()=>{document.removeEventListener("keydown",a)})}
//# sourceMappingURL=01-gallery.js.map
