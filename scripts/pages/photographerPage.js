// IMPORT
import { getAPI } from "../api.js";
import { counterLike, likeTotal } from "../utils/like.js";
import { sortGallery } from "../utils/sort.js";
import { Lightbox } from "../utils/lightbox.js";
// ------------------------------------------------------------

// Récupération de l'ID dans l'url du profil du photographe
function getPhotographerId() {
    return parseInt(new URLSearchParams(window.location.search).get("id"), 10);
}

const photographerId = getPhotographerId();

// PHOTOGRAPHERS
// Fonction qui permet l'affichage du profil du photoghraphe à partir du templating du profil
async function displayProfil(photographers) {
    photographers.forEach((photographer) => {
        if (photographer.id === photographerId) {
            const photographersData = profilFactory(photographer); // eslint-disable-line
            photographersData.getPhotographerProfilDOM();
        }
    });
}

// MEDIAS
// Fonction qui permet l'affichage des médias de galerie à partir du templating de la galerie
async function displayMedia(medias) {
    const mediasContent = document.querySelector("#photographer_gallery");

    medias.forEach((media) => {
        if (media.photographerId === photographerId) {
            const mediaFactory = galleryFactory(media); // eslint-disable-line
            const mediaCardDOM = mediaFactory.getMediaCard();
            mediasContent.appendChild(mediaCardDOM);
        }
    });
}

// LIGHTBOX
// Fonction qui permet l'affichage de la lightbox avec event au click en récupérant leur Id
async function displayLightbox(medias) {
    const listItem = [];
    for (const element in medias) {
        if (medias[element].photographerId === photographerId) {
            listItem.push(medias[element]);
        }
    }

    const lightbox = new Lightbox(listItem);

    document.querySelectorAll(".gallery-picture").forEach((mediaDom) => {
        mediaDom.addEventListener("click", function (e) {
            lightbox.show(e.currentTarget.dataset.id);
        });
    });

    document.querySelectorAll(".gallery-picture").forEach((mediaDom) => {
        mediaDom.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                lightbox.show(e.currentTarget.dataset.id);
            }
        });
    });
}

// INIT FUNCTION
// Fonction async qui permet le rendu de la page profil
async function initPhotographer() {
    const { media, photographers } = await getAPI();
    displayProfil(photographers);
    displayMedia(media);
    displayLightbox(media);
    counterLike(media);
    likeTotal(media);
    sortGallery(media);
}
initPhotographer();

// ------------------------------------------------------------
// EXPORT
export { getPhotographerId, displayMedia, displayLightbox };
