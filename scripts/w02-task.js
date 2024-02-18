/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName ="Richard Quaye";
let currentYear = new Date().getFullYear();
let profilePicture = "images/richards.jpg";




/* Step 3 - Element Variables */
/*Declaring the element variables for the various elements*/

let nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.querySelector("year");
let imageElement = document.querySelector("img");


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent =  `${currentYear}`;
imageElement.setAttribute("src", profilePicture);



/* Step 5 - Array */
let favoriteFoods = ["Pizza", "Chocolate", "Sushi", "Shaghetti", "Rice"];

let newFavoriteFood = "Ice Cream";

favoriteFoods.push(newFavoriteFood);

let foodElement1 = document.getElementById("food");
foodElement1.innerHTML = "Favorite Foods: " + favoriteFoods.join("<br>");


favoriteFoods.shift();


foodElement.innerHTML += "<br><br>Modified Array after removing the first element: " + favoriteFoods.join("<br>");

favoriteFoods.pop();

foodElement.innerHTML += "<br><br>Final Modified Array after removing the last element: " + favoriteFoods.join("<br>");






