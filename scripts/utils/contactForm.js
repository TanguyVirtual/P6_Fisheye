// Fonction pour permet d'afficher la modal du form
function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "flex";
}

// Récupère le bouton dans le dom et on lui attribut au clic d'afficher la modal
let btnContact = document.getElementById("contact");
btnContact.addEventListener("click", displayModal);

// Fonction pour permet de fermer la modal du form
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

//Permet que le bouton soit focus pour l'accessibilité + evènement pour le fermer
let btnCloseModal = document.getElementById("close_modal");
btnCloseModal.focus();
btnCloseModal.addEventListener("click", closeModal);

// Fonction pour envoyer le formulaire
async function sendForm() {
    let contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let inputFirstName = document.querySelector("#firstName").value;
        let inputLastName = document.querySelector("#lastName").value;
        let inputEmail = document.querySelector("#email").value;
        let inputMessage = document.querySelector("#textArea").value;
        console.log(
            "Prénom : " + inputFirstName,
            ", Nom : " + inputLastName,
            ", Email : " + inputEmail,
            ", Votre message : " + inputMessage
        );
        contactForm.reset();
        closeModal();
    });
}

document.getElementById("submitForm").addEventListener("click", sendForm);