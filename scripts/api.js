async function getAPI() {
    const res = await fetch("./data/photographersData.json");
    return res.json();
}

// Methode fetch pour récupérer l'api des informations du tableau photographers
const getPhotographers = async () => {
    const { photographers } = await fetch("./data/photographersData.json").then(
        (res) => res.json()
    );
    return { photographers };
};

// ------------------------------------------------------------
// EXPORT
export { getAPI, getPhotographers };