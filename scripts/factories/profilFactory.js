// Fonction factory pour le rendu du profil du photographe
// eslint-disable-next-line no-unused-vars
function profilFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getPhotographerProfilDOM() {
        const header = document.querySelector(".photograph-header");
        const profilCard = document.createElement("div");
        const profilBtn = document.createElement("div");
        const profilPic = document.createElement("div");
        profilCard.classList = "profil-card";
        profilBtn.classList = "profil-btn";
        profilPic.classList = "profil-img";
        header.prepend(profilCard);
        header.append(profilBtn);
        header.append(profilPic);

        const profilPicture = document.createElement("img");
        profilPicture.id = "profil-picture";
        profilPicture.setAttribute("src", picture);
        profilPicture.setAttribute("alt", name);
        profilPic.appendChild(profilPicture);

        const Btncontact = document.getElementById("contact");
        profilBtn.appendChild(Btncontact);

        const profilName = document.createElement("h1");
        profilName.textContent = name;
        profilCard.appendChild(profilName);

        const profilLocation = document.createElement("p");
        profilLocation.textContent = city + ", " + country;
        profilLocation.classList = "profil-location";
        profilCard.appendChild(profilLocation);

        const profilAbout = document.createElement("p");
        profilAbout.textContent = tagline;
        profilAbout.classList = "profil-tagline";
        profilCard.appendChild(profilAbout);

        const priceDay = document.querySelector(".price-day");
        priceDay.textContent = price + "€ / jour";

        const like = document.querySelector(".profil-like");
        like.setAttribute("data-id", id);
        const numberLike = document.createElement("span");
        numberLike.className = "total-like";
        const iconLike = document.createElement("i");
        iconLike.className = "fa-solid fa-heart";
        like.appendChild(numberLike);
        like.appendChild(iconLike);

        const contactName = document.getElementById("contact-name");
        contactName.textContent = name;
    }

    return { id, getPhotographerProfilDOM };
}

  // ------------------------------------------------------------
  // EXPORT
  // export { profilFactory };