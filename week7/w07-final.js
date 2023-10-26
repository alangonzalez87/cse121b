async function getRickAndMortyCharacters() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const characters = data.results;

        const charactersList = document.getElementById("characters-list");
        characters.forEach(character => {
            const characterItem = document.createElement("li");

            const characterImage = document.createElement("img");
            characterImage.src = character.image;
            characterImage.alt = character.name;
            characterImage.style.width = "100%";

            const characterName = document.createElement("span");
            characterName.textContent = character.name;

            characterItem.appendChild(characterImage);
            characterItem.appendChild(characterName);

            charactersList.appendChild(characterItem);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getRickAndMortyCharacters();
