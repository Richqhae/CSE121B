/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Quaye Richard",
    photo: "images/richie.png",
    favoriteFood: ["Rice", "Ice cream", "Biscuits", "Fries"],
    hobbies: ["Swimming", "reading", "running", "singing"],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: "London",
    length: "2 years"
});
myProfile.placesLived.push({
    place: "Cairo",
    length: "3 years",
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;

/* Favorite Foods List */
myProfile.favoriteFood.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
let ulHobbies = document.createElement("ul");
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    ulHobbies.appendChild(li);
});
document.querySelector("#hobbies").appendChild(ulHobbies);

/* Places Lived DataList */
myProfile.placesLived.forEach(placeObject => {
    let dtElement = document.createElement('dt');
    dtElement.textContent = placeObject.place;

    let ddElement = document.createElement('dd');
    ddElement.textContent = placeObject.length;

    let dlElement = document.getElementById('places-lived');
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
});




