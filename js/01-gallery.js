import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createImageGallery(itemList) {
  return itemList.reduce((acc, item) => acc + 
  `<a class="gallery__link" href="${item.original}">
    <img class="gallery__image"
      src="${item.preview}" data-source="${item.original}"
      alt="${item.description}"/></a>`
    , "");
  };
    // через map
    // return itemList
    //   .map(({ preview, original, description }) => {
    //     return `<a class="gallery__link" href="${original}">
    //         <img
            
    //           class="gallery__image"
    //          src="${preview}"
    //            data-source="${original}"
    //           alt="${description}"
    //         />
    //        </a>`;
    //   })
    //   .join("");



  const createImg = createImageGallery(galleryItems);
  const listGallery = document.querySelector(".gallery");

  listGallery.insertAdjacentHTML("beforeend", createImg);
  listGallery.addEventListener("click", galleryModalOpenClose);

      
  function galleryModalOpenClose(event) {
    event.preventDefault();
  
    const imageClickEl = event.target.classList.contains("gallery__image");
    if (!imageClickEl) {
      return;}

    
    const instance = basicLightbox.create(`
        <img src='${event.target.dataset.source}'
        />`);
    instance.show();
  
    const CloseByEscape = function (event) {
      if (event.code === "Escape") {
        instance.close();
        document.removeEventListener("keydown", CloseByEscape);
      }
    };
    document.addEventListener("keydown", CloseByEscape);
  };
