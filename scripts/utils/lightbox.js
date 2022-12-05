/*eslint no-undefined: "error"*/
// Création d'une class Lightbox avec un constructor avec lequel on va appliquer plusieurs fonctions comme show, close, next, prev, event et display
class Lightbox {
    constructor(listElement) {
        this.currentElement = null;
        this.listElement = listElement;
        this.event();
    }

    // Récupère l'élement avec la fonction getElementbyId pour connaitre son id et on lance la fonction display pour faire l'affichage soit d'une img ou d'une vidéo
    show(id) {
        this.currentElement = this.getElementById(id);
        this.display();
    }

    // Ferme la lightbox et on redonne le focus sur la gallerie
    close() {
        document.querySelector(".lightbox").classList.remove("show");
        document.querySelector(".gallery-picture").focus();
    }

    // Permet d'afficher le media suivant, si on est à la fin revient au début.

    next() {
        const index = this.listElement.findIndex(
            (element) => element.id === this.currentElement?.id
        );

        if (index === this.listElement.length - 1) {
            this.currentElement = this.listElement[0];
        } else {
            this.currentElement = this.listElement[index + 1];
        }
        this.display();
    }

    // Permet d'afficher le media d'avant, si on est au début revient à la fin.
    prev() {
        const index = this.listElement.findIndex(
            (element) => element.id === this.currentElement.id
        );

        if (index === 0) {
            this.currentElement = this.listElement[this.listElement.length - 1];
        } else {
            this.currentElement = this.listElement[index - 1];
        }
        this.display();
    }

    // Evenement au clic pour slide de droite à gauche et fermer + accessibilité
    event() {
        document.querySelector(".lightbox-next").addEventListener("click", () => {
            this.next();
        });

        document.querySelector(".lightbox-prev").addEventListener("click", () => {
            this.prev();
        });

        document.querySelector(".lightbox-close").addEventListener("click", () => {
            this.close();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" || e.key === "Esc") {
                this.close();
            }

            if (e.key === "ArrowRight") {
                this.next();
            }

            if (e.key === "ArrowLeft") {
                this.prev();
            }
        });
    }

    getElementById(id) {
        return this.listElement.find((element) => element.id === parseInt(id, 10));
    }

    // fonction qui permet d'afficher soit une image ou d'un vidéo
    display() {
        const image = document.querySelector(".lightbox-image");
        const video = document.querySelector(".lightbox-video");
        video.innerHTML = `<track default src="assets/SamplePhotos/${this.currentElement.photographerId}/track.vtt" kind="captions" />`;
        const titleMedia = document.querySelector(".lightbox-title");

        if (this.currentElement.image) {
            video.style.display = "none";
            image.style.display = "block";
            image.focus({ preventScroll: true });
            image.setAttribute("tabindex", "0");
            image.src = `assets/SamplePhotos/${this.currentElement.photographerId}/${this.currentElement.image}`;
            image.setAttribute("alt", this.currentElement.title);
        } else {
            video.style.display = "block";
            image.style.display = "none";
            video.focus({ preventScroll: true });
            video.src = `assets/SamplePhotos/${this.currentElement.photographerId}/${this.currentElement.video}`;
        }
        titleMedia.textContent = this.currentElement.title;
        titleMedia.setAttribute("tabindex", "0");
        document.querySelector(".lightbox").classList.add("show");
    }
}

// ------------------------------------------------------------
// EXPORT
export { Lightbox };