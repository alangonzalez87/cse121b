/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
document.addEventListener("DOMContentLoaded", function() {
    let fullName = 'Alan Gonzalez';



const currentYear = new Date();

const profilePicture = "images/foto.jpg";




/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');




const yearElement = document.querySelector('#year');
 
const imageElement = document.getElementById('photo');




/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);




/* Step 5 - Array */




// Declare an array variable to hold your favorite foods
const food = ["Pizza", "Sushi", "Burgers"];

// Modify the HTML element with the id of food to display your favorite foods array
const foodElement = document.getElementById("food");
foodElement.innerHTML = food.join("<br>");

// Declare and instantiate a variable to hold another single favorite food item
const newFavoriteFood = "Ice Cream";

// Add the new item to your favorite food array using push()
food.push(newFavoriteFood);

// Append the new array values onto the displayed content of the HTML element with the id of food
foodElement.innerHTML += "<br>" + food.join("<br>");

// Remove the first element in the favorite food array using shift()
food.shift();

// Append the array output showing the modified array
foodElement.innerHTML += "<br>" + food.join("<br>");

// Remove the last element in the favorite food array using pop()
food.pop();

// Append the array output with this final modified favorite foods array
foodElement.innerHTML += "<br>" + food.join("<br>");








  });

