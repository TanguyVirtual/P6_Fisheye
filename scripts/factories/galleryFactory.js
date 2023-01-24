class GalleryFactory {
    constructor(image, video) {
        if (image) {
            const med = new Image(image)
            this._media = med.image
            this._balise = med.balise

        } else if (video) {
            const med = new Video(video)
            this._media = med.video
            this._balise = med.balise
        }
    }

    get media() {
        return this._media
    }

    get balise() {
        return this._balise
    }
}

class Image {
    constructor(image) {
        this._image = image
        this._balise = document.createElement("img");
    }

    get image() {
        return this._image
    }

    get balise() {
        return this._balise
    }
}

class Video {
    constructor(video) {
        this._video = video
        this._balise = document.createElement("video");

    }
    get video() {
        return this._video

    }

    get balise() {
        return this._balise
    }
}

class Media {
    constructor(photographerId, image, video, likes, title, id) {

        this.photographerId = photographerId
        this.image = image
        this.video = video
        this.likes = likes
        this.title = title
        this.id = id
    }

    media() {
        let galleryFactory = new GalleryFactory(this.image, this.video);
        const article = document.createElement("article");
        article.setAttribute("data-id", this.id);
        article.className = "media";
        const mediaLink = `assets/SamplePhotos/${this.photographerId}/${galleryFactory.media}`;
        const media = galleryFactory.balise
        media.className = "gallery-picture";

        media.setAttribute("src", mediaLink);
        media.setAttribute("alt", this.title);
        media.setAttribute("aria-label", `${this.title}, closeup view`);
        media.setAttribute("loading", "lazy");
        media.setAttribute("data-id", this.id);
        media.setAttribute("tabindex", "0");

        article.appendChild(media);

        //Ajout du contenu de l'image ou video

        const div = document.createElement("div");
        div.className = "media-content";

        // Titre
        const mediaTitle = document.createElement("h3");
        mediaTitle.className = "title";
        mediaTitle.setAttribute("tabindex", "0");
        mediaTitle.textContent = this.title;

        // Like du media
        const mediaLike = document.createElement("p");
        mediaLike.className = "like";

        mediaLike.setAttribute("data-id", this.id);
        mediaLike.setAttribute("tabindex", "0");

        const numberLike = document.createElement("span");
        numberLike.className = "number-like";
        numberLike.setAttribute("data-id", this.id);
        numberLike.textContent = this.likes;

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
}











/*
// Création du rendu de la page profil du photographe pour la galerie
// eslint-disable-next-line

let galleryFactory = function (data) {
    const { photographerId, image, video, likes, title, id } = data;

    let getMediaCard = function () {
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
        } else if (video) {
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

    */