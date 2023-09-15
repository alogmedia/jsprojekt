// Images to display
const images = [
    'images/bog1.png',
    'images/bog2.png',
    'images/bog3.png',
    'images/bog4.png',
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
