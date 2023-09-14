// Get the popUp
let popUp = document.getElementById("popUp");

// Get the image and insert it inside the popUp - use its "alt" text as a caption
let popupImg = document.getElementById("popupimage");

// Get all the "Læg i kurv" buttons
let popBtns = document.querySelectorAll(".btn--cart");

// Add a click event listener to each button
popBtns.forEach(function (popBtn, index) {
    popBtn.onclick = function () {
      popUp.style.display = "block";
        popupImg.src = "images/popup.png";
        // You can use the "index" variable to identify which button was clicked.
        // For example, to show different images based on the button clicked:
        // if (index === 0) {
        //     popupImg.src = "images/popup1.png";
        // } else if (index === 1) {
        //     popupImg.src = "images/popup2.png";
        // }
    };
});

// Get the <span> element that closes the popUp
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the popUp
span.onclick = function() { 
  popUp.style.display = "none";
}
