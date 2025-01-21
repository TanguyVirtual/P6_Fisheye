import { getPhotographers } from "../api.js";
import { photographerFactory } from "../factories/photographerFactory.js";

// Fonction pour afficher les données
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

// Récupère les données des photographes
async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

// Initialiser les données des photographes
init();
