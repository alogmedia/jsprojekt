// Hent elementerne med klassen "star-rating" fra HTML
const starRatingElements = document.querySelectorAll(".star-rating");

// Lav en løkke for hver "star-rating" element
starRatingElements.forEach((starRatingElement) => {
    // Opret et tomt array til at gemme stjerne-elementer for dette element
    const stars = [];

    // Lav en løkke for at generere 5 stjerne-elementer
    for (let i = 1; i <= 5; i++) {
        // Opret et nyt stjerne-element som en HTML span
        const star = document.createElement("span");

        // Sæt klassen for stjerne-elementet til "star"
        star.className = "star";

        // Indsæt Unicode-tegnet for en stjerne som HTML-indhold
        star.innerHTML = "&#9733;"; // Unicode-tegn for en stjerne

        // Tilføj et brugerdefineret attribut "data-value" for at gemme stjernens værdi
        star.dataset.value = i;

        // Tilføj stjerne-elementet til "stars"-arrayet
        stars.push(star);

        // Tilføj stjerne-elementet til "starRatingElement" i HTML
        starRatingElement.appendChild(star);

        // Tilføj en klikhændelse til stjerne-elementet
        star.addEventListener("click", (event) => {
            // Hent værdien af den klikkede stjerne fra dens "data-value" attribut
            const clickedValue = event.target.dataset.value;

            // Opdater "starRatingElement"-elementets "data-rating" attribut med den klikkede værdi
            starRatingElement.dataset.rating = clickedValue;

            // Opdater stjernernes farver baseret på den klikkede værdi
            updateStarColors(stars, clickedValue);
        });
    }

    // Sæt den indledende vurdering til 1 stjerne (første stjerne er guld)
    starRatingElement.dataset.rating = 1;

    // Opdater stjernernes farver baseret på den indledende vurdering
    updateStarColors(stars, 1);
});

// Funktion til at opdatere farverne på stjernerne
function updateStarColors(stars, clickedValue) {
    stars.forEach((star) => {
        if (star.dataset.value <= clickedValue) {
            // Hvis stjernens værdi er mindre end eller lig med den klikkede værdi, så skal farven være rød (guld)
            star.style.color = "red";
        } else {
            // Ellers skal farven være sort
            star.style.color = "black";
        }
    });
}