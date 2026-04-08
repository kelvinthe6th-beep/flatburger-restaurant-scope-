// GLOBAL SCOPE - Array with hamburger and cheeseburger
const burgerMenu = ["hamburger", "cheeseburger"];

// GLOBAL SCOPE - String for featured drink
let featuredDrink = "chocolate milkshake";

// FUNCTION SCOPE - Featured item function
function getFeaturedItem() {
    let featuredBurger = "double cheeseburger"; // function-scoped
    return featuredBurger;
}

// Updates the featured string (function-scoped)
function updateFeaturedDrink() {
    let newDrink = "strawberry milkshake"; // function-scoped
    featuredDrink = newDrink;
    return featuredDrink;
}

// BLOCK SCOPE - Pushes new item to the burger array
function addBlockScopedBurger() {
    if (true) {
        let newBurger = "veggie burger"; // block-scoped
        burgerMenu.push(newBurger);
    }
    return burgerMenu;
}

// Call functions
updateFeaturedDrink();
addBlockScopedBurger();