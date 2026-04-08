// GLOBAL SCOPE - Array with hamburger and cheeseburger
const burgerMenu = ["hamburger", "cheeseburger"];

// GLOBAL SCOPE - String for featured drink
let featuredDrink = "chocolate milkshake";

console.log(" FLATBURGER RESTAURANT MENU ");
console.log("Burger Menu", burgerMenu);
console.log("Featured Drink", featuredDrink);

// FUNCTION SCOPE - Featured burger
function getFeaturedItem() {
    let featuredBurger = "double cheeseburger"; // function-scoped
    console.log("\n--- Featured Item ---");
    console.log("Featured Burger", featuredBurger);
    return featuredBurger;
}

// FUNCTION SCOPE - Updates featured drink string
function updateFeaturedDrink() {
    let newDrink = "strawberry milkshake"; // function-scoped
    featuredDrink = newDrink;
    console.log("\n--- Updated Featured Drink ---");
    console.log("New Featured Drink", featuredDrink);
    return featuredDrink;
}

// BLOCK SCOPE - Pushes new burger to array
function addBlockScopedBurger() {
    if (true) {
        let newBurger = "veggie burger"; // block-scoped
        burgerMenu.push(newBurger);
        console.log("\n--- Block Scoped Burger Added ---");
        console.log("New Burger Added", newBurger);
    }
    console.log("Updated Burger Menu", burgerMenu);
    return burgerMenu;
}

// Run all functions
getFeaturedItem();
updateFeaturedDrink();
addBlockScopedBurger();

console.log("\n FINAL MENU STATE ");
console.log("Burger Menu", burgerMenu);
console.log("Featured Drink", featuredDrink);