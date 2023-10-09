/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile={
    name: "Alan Gonzalez",
    photo: "../week 2/images/foto.jpg",
    favoriteFoods: ["rice",
    "milanesas",
    "pure",
    "pizza"],
    hobbies:["play video games"],
    placeLived: []

}

myProfile.placeLived.push({
    place:'Concepcion, Chile',
    length: '2 years',
})

/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */
document.querySelector('#name').textContent=myProfile.name;
/* Name */

/* Photo with attributes */
document.getElementById('photo').setAttribute('src', myProfile.photo);
document.getElementById('photo').setAttribute('alt', myProfile.name);


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent=food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent=hobbie;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */

let dlElement = document.getElementById("places-lived");
myProfile.placeLived.forEach(place => {
    
    let dtElement = document.createElement("dt");
    dtElement.textContent = place.place;

    
    let ddElement = document.createElement("dd");
    ddElement.textContent = place.length;

    
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
});







