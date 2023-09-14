// Sample array of items
const items = ["Bog 1", "Bog 2", "Bog 3", "Bog 4", "Bog 5", "Bog 6"];

// Get the <ul> element from the DOM
const itemList = document.getElementById("itemList");

// Loop through the array and add items to the list
for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // Check a condition and apply a different style to items
    if (i % 2 === 0) {
        // Create a list item element
        const li = document.createElement("li");
        li.textContent = item;

        // Apply a class for even-indexed items
        li.classList.add("even");
        
        // Append the list item to the <ul>
        itemList.appendChild(li);
    } else {
        // Create a list item element with a different style for odd-indexed items
        itemList.innerHTML += `<li class="odd">${item}</li>`;
    }
}
