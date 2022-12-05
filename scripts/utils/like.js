// IMPORT
import { getPhotographerId } from "../pages/photographerPage.js";
// ------------------------------------------------------------

function counterLike(medias) {
    const likes = document.querySelectorAll(".like");

    // Permet d'ajouter d'un like au coeur et d'augmenter de un le nombre
    likes.forEach((element) => {
        element.addEventListener("click", (e) => {
            const nombreDeLikes = element.querySelector(".number-like");
            const totalLikes = document.querySelector(".total-like");
            const mediaId = e.target
                .closest("article")
                .querySelector(".gallery-picture")
                .getAttribute("data-id");
            const mediaLikes = medias.find((el) => el.id === parseInt(mediaId, 10));

            if (mediaLikes.like === "liked") {
                nombreDeLikes.textContent = parseInt(nombreDeLikes.textContent, 10) - 1;
                mediaLikes.likes -= 1;
                mediaLikes.like = "";
                totalLikes.textContent = parseInt(totalLikes.textContent, 10) - 1;
            } else {
                nombreDeLikes.textContent = parseInt(nombreDeLikes.textContent, 10) + 1;
                totalLikes.textContent = parseInt(totalLikes.textContent, 10) + 1;
                mediaLikes.likes += 1;
                mediaLikes.like = "liked";
            }
        });
    });

    // Version accessible pour les likes
    likes.forEach((element) => {
        element.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const nombreDeLikes = element.querySelector(".number-like");
                const totalLikes = document.querySelector(".total-like");
                const mediaId = e.target
                    .closest("article")
                    .querySelector(".gallery-picture")
                    .getAttribute("data-id");
                const mediaLikes = medias.find((el) => el.id === parseInt(mediaId, 10));

                if (mediaLikes.like === "liked") {
                    nombreDeLikes.textContent = parseInt(nombreDeLikes.textContent, 10) - 1;
                    mediaLikes.likes -= 1;
                    mediaLikes.like = "";
                    totalLikes.textContent = parseInt(totalLikes.textContent, 10) - 1;
                } else {
                    nombreDeLikes.textContent = parseInt(nombreDeLikes.textContent, 10) + 1;
                    totalLikes.textContent = parseInt(totalLikes.textContent, 10) + 1;
                    mediaLikes.likes += 1;
                    mediaLikes.like = "liked";
                }
            }
        });
    });
}

// TOTAL LIKES
function likeTotal(medias) {
    const likes = [];
    const photographerId = getPhotographerId();

    for (const element in medias) {
        if (medias[element].photographerId === photographerId) {
            likes.push(medias[element]);
        }
    }

    let totalLike = 0;
    likes.forEach((element) => {
        totalLike += parseInt(element.likes, 10);
    });

    document.querySelector(".total-like").textContent = totalLike;
}

// ------------------------------------------------------------
// EXPORT
export { counterLike, likeTotal }