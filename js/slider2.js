// Initialiserer nogle variabler til brug senere i koden
let count = 0;        // Holder styr på den aktuelle position for slideren
let inc = 0;          // Holder styr på den aktuelle slide (element) i slideren
let margin = 0;       // Margin, der skal tilføjes til hver slide
let slider = document.getElementsByClassName("slider-width")[0]; // Henter slider-elementet
let itemDisplay = 0;  // Antallet af elementer, der skal vises i slideren

// Betingede erklæringer baseret på skærmstørrelsen
if (screen.width > 990) {
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d");
    margin = itemDisplay * 8;
}
if (screen.width > 700 && screen.width < 990) {
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-t");
    margin = itemDisplay * 4;
}
if (screen.width > 280 && screen.width < 700) {
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-m");
    margin = itemDisplay * 3;
}

// Henter alle elementer, der skal vises i slideren
let items = document.getElementsByClassName("item");

let divider = items.length / itemDisplay;

// Beregner resterende elementer og sliderantal
let itemleft = items.length % itemDisplay;

// Ved brug af modulus kan vi regne de resterende elementer ud, så vi ved hvor langt vi skal rykke til den ene eller anden side.
let itemslide = Math.floor(items.length / itemDisplay) - 1;


// Sætter bredden på hvert element i slideren baseret på skærmstørrelsen og marginen
for (let i = 0; i < items.length; i++) {
    items[i].style.width = (screen.width / itemDisplay) - margin + "px";
}

// Funktion for at flytte slideren fremad(Hvis inc ikke er lige med skal den køre det første if statement, og hvis inc == itemslide, så skal den køre den anden if statement ellers skal den køre else.)
function frem() {
    if (inc !== itemslide + itemleft) {
        if (inc == itemslide) {
            inc = inc + itemleft;
            count = count - (screen.width / itemDisplay) * itemleft;
        }
        else {
            inc++;
            count = count - screen.width;
        }
    }
    slider.style.left = count + "px";
}

// Funktion for at flytte slideren tilbage
function tilbage() {
    if (inc !== 0) {
        if (inc == itemleft) {
            inc = inc - itemleft;
            count = count + (screen.width / itemDisplay) * itemleft;
        }
        else {
            inc--;
            count = count + screen.width;
        }
    }
    slider.style.left = count + "px";
}
