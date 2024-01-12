"use strict"

const dishes = [
    {
        name: "Joichiro Special Rich Ramen",
        vegetarian: true
    },
    {
        name: "Curry Risotto Omurice",
        vegetarian: false
    },
    {
        name: "Hokkaido Special Gousetsu Udon",
        vegetarian: true
    },
    {
        name: "Gotcha Pork Roast",
        vegetarian: false
    },
    {
        name: "Transforming Furikake Gohan",
        vegetarian: false
    }
];

function vegOptions(menu) {
    const vegMenu = document.querySelector('#menu'); //selects our existing ul with the menu id
    const vegeDishes = dishes.filter(dishes => dishes.vegetarian === true); //makes sure we are only selecting dishes that are vegetarian
    vegeDishes.forEach(menu => { //iterates through each element in the array
        let dish = document.createElement("li"); //creates a list inside the existing ul
        dish.textContent = menu.name; //adds the name of the dish into the list
        vegMenu.appendChild(dish); //adds the list(s) from JS to HTML
    });
}

    vegOptions(menu); //calls the function
