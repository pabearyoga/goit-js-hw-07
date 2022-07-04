import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img
                    class="gallery__image"
                    src="${image.preview}"
                    data-source="${image.original}"
                    alt="${image.description}"
                />
            </a>
        </div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", selectOriginalImg);

function selectOriginalImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const selectLargeImg = event.target.dataset.source;

  const instance = basicLightbox.create(`
     <img src='${selectLargeImg}'> 
    `);

  instance.show();
}
