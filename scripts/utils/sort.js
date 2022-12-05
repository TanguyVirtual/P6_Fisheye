// IMPORT
import { displayMedia, displayLightbox } from "../pages/photographerPage.js";
import { counterLike } from "./like.js";
// ------------------------------------------------------------

// Function à l'évènement change de l'élément sort-select, fait appel à une des fonctions qui tri par popularité / date / titre
function sortGallery(arrayGallery) {
    let sortSelect = document.getElementById("sort-select");
    sortSelect.addEventListener("change", (e) => {
        switch (e.target.value) {
            case "popularite":
                sortPopular(arrayGallery);
                break;
            case "date":
                sortDate(arrayGallery);
                break;
            case "title":
                sortTitle(arrayGallery);
                break;
            default:
                break;
        }
    });
}

// Fonction qui permet le try de la gallery par popularité / date / titre
// Appel des fonctions displayMedia / Lightbox et like après avoir modifier le DOM
function sortPopular(arrayGallery) {
    arrayGallery.sort(function (a, b) {
        if (a.likes < b.likes) {
            return 1;
        }
        if (a.likes > b.likes) {
            return -1;
        }
        return 0;
    });
    const gallery = document.getElementById("photographer_gallery");
    gallery.innerHTML = "";

    displayMedia(arrayGallery);
    displayLightbox(arrayGallery);
    counterLike(arrayGallery);
}

function sortTitle(arrayGallery) {
    arrayGallery.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        }
        return 0;
    });
    const gallery = document.getElementById("photographer_gallery");
    gallery.innerHTML = "";

    displayMedia(arrayGallery);
    displayLightbox(arrayGallery);
    counterLike(arrayGallery);
}

function sortDate(arrayGallery) {
    arrayGallery.sort(function (a, b) {
        if (a.date < b.date) {
            return -1;
        }
        if (a.date > b.date) {
            return 1;
        }
        return 0;
    });
    const gallery = document.getElementById("photographer_gallery");
    gallery.innerHTML = "";

    displayMedia(arrayGallery);
    displayLightbox(arrayGallery);
    counterLike(arrayGallery);
}

// ------------------------------------------------------------
// EXPORT
export { sortGallery };