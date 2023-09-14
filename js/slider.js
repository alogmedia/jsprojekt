// Initialiser variabler
let antal = 0; // En tæller for at spore den aktuelle position af slideren
let inkrement = 0; // En variabel til at styre skift af elementer
let margen = 0; // En variabel til at justere margen mellem elementer
let slider = document.getElementsByClassName("slider-width")[0]; // Hent slider-elementet fra DOM
let elementVisning = 0; // Antallet af elementer, der skal vises på skærmen

// Tjek skærmens bredde og konfigurer visningsindstillinger og margen
if (screen.width > 990) {
    // Hvis skærmbredden er større end 990 pixels, hent antal elementer til visning og indstil margen
    elementVisning = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d");
    margen = elementVisning * 5;
}
if (screen.width > 700 && screen.width < 990) {
    // Hvis skærmbredden er mellem 700 og 990 pixels, hent antal elementer til visning og indstil margen
    elementVisning = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-t");
    margen = elementVisning * 6.8;
}
if (screen.width > 280 && screen.width < 700) {
    // Hvis skærmbredden er mellem 280 og 700 pixels, hent antal elementer til visning og indstil margen
    elementVisning = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-m");
    margen = elementVisning * 20;
}

// Hent alle elementer med class "item"
let elementer = document.getElementsByClassName("item");
let elementerTilbage = elementer.length % elementVisning; // Beregn resten af elementer, der ikke passer perfekt i visningen
let elementSlider = Math.floor(elementer.length / elementVisning) - 1; // Beregn antallet af slider-elementer minus 1

// Funktion til at gå til næste element
function frem() {
    if (antal == 0) {
    antal = antal - screen.width;
    // Opdater sliderens position ved at ændre venstre margen
    slider.style.left = antal + "px";
    } else {
       return
    }
}
    
// Funktion til at gå til forrige element
function tilbage() {
    if (antal == 0) {
        return
    } else {
        antal = antal + screen.width;
        console.log(antal);
        // Opdater sliderens position ved at ændre venstre margen
        slider.style.left = antal + "px";
    }
}
