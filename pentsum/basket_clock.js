document.addEventListener("DOMContentLoaded", function() {
    const addToBasketButtons = document.querySelectorAll(".btn--cart");
    const basketItems = document.querySelector(".basket-items");
    const timer = document.getElementById("timer");

    let basket = [];
    let minutes = 10;
    let seconds = 0;

    // Update the timer display
    function updateTimer() {
        timer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Decrement the timer
    function decrementTimer() {
        if (seconds === 0) {
            if (minutes === 0) {
                // Time's up
                clearInterval(timerInterval);
                timer.textContent = "Time's up!";
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateTimer();
    }

    const timerInterval = setInterval(decrementTimer, 1000);

    // Add item to the basket
    function addItemToBasket(itemName, itemPrice) {
        const listItem = document.createElement("li");
        listItem.textContent = `${itemName} - ${itemPrice}`;
        basketItems.appendChild(listItem);
    }

    addToBasketButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const item = document.querySelectorAll(".item-name")[index];
            const price = document.querySelectorAll(".item-price")[index].textContent;
            basket.push({ name: item.textContent, price });
            addItemToBasket(item.textContent, price);
        });
    });
});