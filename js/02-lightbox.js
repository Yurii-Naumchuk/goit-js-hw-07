import { galleryItems } from './gallery-items.js';
// Change code below this line

function createImageGallery(itemList) {
    return itemList.reduce((acc, item) => acc + 
    `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
      , "");
    };

    const createImg = createImageGallery(galleryItems);
    const listGallery = document.querySelector(".gallery");
  
    listGallery.insertAdjacentHTML("beforeend", createImg);

    const lightbox = new SimpleLightbox('.gallery a', {
        
        captionSelector: "img",
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250, });


  