// Get the 'bestSell' element by class name
let bestSellDiv = document.querySelector('.bestSell');

// Create an h1 element
let h1Element = document.createElement('h1');
h1Element.className = "bestheadline"
h1Element.innerText = 'Bestsellers'; // Set the text content

// Insert the h1 element as the first child inside the 'bestSell' div
bestSellDiv.insertBefore(h1Element, bestSellDiv.firstChild);

// Images to display
const images = [
    'images/bestbog1.png',
    'images/bestbog2.png',
    'images/bestbog3.png',
    'images/bestbog4.png',
];

// Function to create the image grid
function createImageGrid(images) {
    const imageGrid = document.getElementById('imageGrid');

    // Loop through the images and create image elements using forEach
    images.forEach((imageSrc) => {
        const imageElement = document.createElement('img');
        imageElement.className = 'image';
        imageElement.src = imageSrc;
        imageGrid.appendChild(imageElement);
    });
}

// Check if images exist before creating the grid
if (images.length > 0) {
    createImageGrid(images);
} else {
    // Display a message if there are no images
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '<p>No images found.</p>';
}
