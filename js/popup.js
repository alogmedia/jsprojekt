// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let modalImg = document.getElementById("popupimage");

// Get all the "Læg i kurv" buttons
var popBtns = document.querySelectorAll(".btn--cart");

// Add a click event listener to each button
popBtns.forEach(function (popBtn, index) {
    popBtn.onclick = function () {
        modal.style.display = "block";
        modalImg.src = "images/popup.png";
        // You can use the "index" variable to identify which button was clicked.
        // For example, to show different images based on the button clicked:
        // if (index === 0) {
        //     modalImg.src = "images/popup1.png";
        // } else if (index === 1) {
        //     modalImg.src = "images/popup2.png";
        // }
    };
});

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
