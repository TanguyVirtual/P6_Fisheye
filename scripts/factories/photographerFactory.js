function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    // Affichage des Photographes
    function getUserCardDOM() {
        const article = document.createElement('article');

        // Chaque élément article aura dynamiquement l'id de chaque photographe
        article.id = "photographer-" + id;

        // Lien "a" qui regroupe l'image, le titre, et le texte de chaque photographe
        const lienPhotographe = document.createElement("a");

        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", `Photo de profil de ${name}`);
        img.setAttribute("tabindex", 0);

        const h2 = document.createElement('h2');
        h2.textContent = name;
        img.setAttribute("tabindex", 0);

        const cityCountry = document.createElement("span");
        cityCountry.textContent = city.concat(", ", country);
        cityCountry.setAttribute("alt", `${name} habite ${city.concat(", ", country)}`);

        const about = document.createElement("p");
        about.textContent = tagline;
        about.setAttribute("alt", `Description à propos du photographe ${name}`);


        const priceDay = document.createElement("div");
        priceDay.setAttribute("class", "price");
        priceDay.textContent = price + "€ / jour";
        priceDay.setAttribute("alt", `Tarifs journalier photographe ${name}`);

        // lienPhotographe sera cliquable sur les éléments "img","h2", "span", "p" de la page d'accueil
        lienPhotographe.href = "photographer.html?id=" + id;

        lienPhotographe.appendChild(img);
        lienPhotographe.appendChild(h2);
        lienPhotographe.appendChild(cityCountry);
        lienPhotographe.appendChild(about);
        lienPhotographe.appendChild(priceDay);
        article.appendChild(lienPhotographe);

        return (article);
    }
    return { name, id, city, country, tagline, price, portrait, getUserCardDOM }
}

// EXPORT
export { photographerFactory };