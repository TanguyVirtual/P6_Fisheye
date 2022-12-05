// Création du rendu de la page profil du photographe pour la galerie
// eslint-disable-next-line
function galleryFactory(data) {
    const { photographerId, image, video, likes, title, id } = data;

    function getMediaCard() {
        const article = document.createElement("article");
        article.setAttribute("data-id", id);
        article.className = "picture";

        if (image) {
            //Ajout d'une image
            const imageLink = `assets/SamplePhotos/${photographerId}/${image}`;
            const picture = document.createElement("img");

            picture.className = "gallery-picture";

            picture.setAttribute("src", imageLink);
            picture.setAttribute("alt", title);
            picture.setAttribute("aria-label", `${title}, closeup view`);
            picture.setAttribute("loading", "lazy");
            picture.setAttribute("data-id", id);
            picture.setAttribute("tabindex", "0");

            article.appendChild(picture);
        } else {
            // Ajout d'une video
            const videoLink = `assets/SamplePhotos/${photographerId}/${video}`;
            const videos = document.createElement("video");

            videos.className = "gallery-picture";

            videos.setAttribute("src", videoLink);
            videos.setAttribute("title", title);
            videos.setAttribute("data-id", id);
            videos.setAttribute("tabindex", "0");

            article.appendChild(videos);
        }

        //Ajout du contenu de l'image ou video

        const div = document.createElement("div");
        div.className = "media-content";

        // Titre
        const mediaTitle = document.createElement("h3");
        mediaTitle.className = "title";
        mediaTitle.setAttribute("tabindex", "0");
        mediaTitle.textContent = title;

        // Like du media
        const mediaLike = document.createElement("p");
        mediaLike.className = "like";

        mediaLike.setAttribute("data-id", id);
        mediaLike.setAttribute("tabindex", "0");

        const numberLike = document.createElement("span");
        numberLike.className = "number-like";
        numberLike.setAttribute("data-id", id);
        numberLike.textContent = likes;

        const iconLike = document.createElement("span");
        iconLike.className = "fa-solid fa-heart";
        iconLike.setAttribute("aria-label", "likes");
        iconLike.setAttribute("role", "button");

        article.appendChild(div);
        div.appendChild(mediaTitle);
        div.appendChild(mediaLike);
        mediaLike.appendChild(numberLike);
        mediaLike.appendChild(iconLike);

        return article;
    }

    return { photographerId, getMediaCard };
}

  // ------------------------------------------------------------
  // EXPORT
  // export { galleryFactory };