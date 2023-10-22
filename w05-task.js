/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples"); 
let templeList = []; 

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const articleElement = document.createElement("article");
    const h3Element = document.createElement("h3");
    h3Element.textContent = temple.templeName;
    const imgElement = document.createElement("img");
    imgElement.src = temple.imageUrl;
    imgElement.alt = temple.location;
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    templesElement.appendChild(articleElement);
  });
};

/* async getTemples Function using fetch() */
const getTemples = async () => {
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    templeList = await response.json();
    displayTemples(templeList); // Call the displayTemples function to display the data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
console.log(templeList)
getTemples(templeList);

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ''; 
  };
  
/* sortBy Function */
const sortBy = (temples) => {
    reset(); 
  
    const filterElement = document.querySelector("#sortBy");
    const filter = filterElement.value;
  
    switch (filter) {
      case "utah":
        displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
        break;
      case "nonutah":
        displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
        break;
      case "older":
        displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case "all":
        displayTemples(temples);
        break;
      default:
        displayTemples(temples);
    }
  };
  
  // Example usage:
  const selectElement = document.querySelector("#sortBy");
  selectElement.addEventListener("change", () => {
    sortBy(templeList);
  });
  

/* Event Listener */
selectElement.addEventListener("change", () => {
    sortBy(templeList);
  });