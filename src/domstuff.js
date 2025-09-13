console.log("domstuff.js has loaded");

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

function characterClassRenderer () {
    let targetParentContainer = document.querySelector("body");
    let classContainer = document.createElement("section");
    classContainer.id = "classlist";
    console.log(classContainer);
    targetParentContainer.appendChild(classContainer);

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
    characterClasses.forEach(characterClass => {
        console.log(characterClass);
        let classCard = document.createElement("section");
        classCard.className = "characterclass";
        let classTitle = document.createElement("h2");
        classTitle.innerText = characterClass;
        classCard.append(classTitle);
        classContainer.appendChild(classCard);
    });

    // //map is amazing for doing stuff and saving to new list
    // characterClasses.map(characterClass => {
    //     console.log(characterClass);
    // });
}

characterClassRenderer();