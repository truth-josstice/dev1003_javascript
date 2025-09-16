console.log("domstuff.js has loaded");

/**
 * This finds and updates the text of a paragraph tag on the webpage.
 * 
 * This new text will be `This is literal`
 */
function paragraphTagUpdater () {
    let p = document.querySelector("P");
    console.log(p)
    //innerHTML parses the string as valid HTML
    // p.innerHTML = "<h1>This is an actual heading</h1>"
    p.innerText = "<h1>This is literal</h1>";
}

paragraphTagUpdater();

let characterClasses = [
    "ninja",
    "phenix",
    "hero",
    "baron",
    "knight",
    "monk"
]

/**
 * Render a list of playable character classes as HTML on a web page.
 * 
 * @param {String[]} targetList Array of strings where each string is one playable character class
 * 
 * @example <caption>How to use the characterClassRendered</caption>
 * 
 * characterClassRendered(["fighter", "barbarian"])
 */
function characterClassRenderer (targetList = characterClasses) {

    let existingList = document.getElementById("playableclasses");
    if (existingList){
        existingList.remove();
    }

    let targetParentContainer = document.querySelector("body");
    let classContainer = document.createElement("section");
    let classList = document.createElement("ul");
    classContainer.id = "playableclasses";
    console.log(classContainer);
    targetParentContainer.appendChild(classContainer);
    classContainer.appendChild(classList);


    // for (let index = 0; index < characterClasses.length; index++) {
    //     const characterClass = characterClasses[index];
    //     console.log(characterClass);
    // }

    // for (const characterClass of characterClasses) {
    //     console.log(characterClass);
    // }
    
    // for (const key in characterClasses) {
    //     // if (!Object.hasOwn(characterClasses, key)) continue;
    //     const element = characterClasses[key];
    //     console.log(element);
    // }

    //forEach is great doing stuff PER item
    // characterClasses.forEach(characterClass => {
    //     console.log(characterClass);
    //     let classCard = document.createElement("section");
    //     classCard.className = "characterclass";
    //     let classTitle = document.createElement("h2");
    //     classTitle.innerText = characterClass;
    //     classCard.append(classTitle);
    //     classContainer.appendChild(classCard);
    // });

    // making a list for fun
    // characterClasses.forEach(characterClass => {
    //     let classListItem = document.createElement("li");
    //     classListItem.innerText = characterClass;
    //     classList.appendChild(classListItem);
    // })

    //map is amazing for doing stuff and saving to new list
    let characterClassCards = targetList.map(characterClass => {
        console.log(characterClass);

        let classCard = document.createElement("section");
        classCard.className = "characterclass";
        let classTitle = document.createElement("h2");
        classTitle.innerText = characterClass;
        classCard.append(classTitle);

        return classCard;
    });

    if (characterClassCards.length != 0){
        classContainer.append(...characterClassCards);
    };
}

// characterClassRenderer();


let classToggleButton = document.getElementById("classToggleButton");
classToggleButton.addEventListener("click", () => characterClassRenderer(characterClasses));

let classSearch = document.getElementById("classSearchField");
classSearch.addEventListener("change", (event) => {
    console.log("Search field has changed.");
    console.log(event.target.value);

    let userSearchTerm = event.target.value;

    // Potential filtering:
    // 1. Find the class content on the page
    // 2. Finding the innerText or classname of each iteam in the found class content
    // 3. Filtering the elements until only the one matching the search is left
    // This way is good because it does not need he array, and can be used with APIs
    // It always finds the freshest page content and filters that

    // If the array is available or seen by this function:
    // 1. Check if the search term is in the array
    // 2. Clear out the rendered class content 
    // 3. Call the class renderer with a new filtered array

    // map gives us an array of the same length despite not matching the search
    // let matchingItems = characterClasses.map((characterClass => {
    //     if (characterClass.includes(userSearchTerm)){
    //         return characterClass;
    //     }
    // }));

    // filter gives us ONLY the search results
    let matchingItems = characterClasses.filter((characterClass => {
        // if (characterClass.includes(userSearchTerm)){
        //     return characterClass;
        // }
        return characterClass.includes(userSearchTerm);
    }));
    console.log(matchingItems);

    characterClassRenderer(matchingItems);
});