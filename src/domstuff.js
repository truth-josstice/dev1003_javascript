console.log("domstuff.js has loaded");

function paragraphTagUpdater () {
    let p = document.querySelector("P");
    console.log(p)
    //innerHTML parses the string as valid HTML
    // p.innerHTML = "<h1>This is an actual heading</h1>"
    p.innerText = "<h1>This is literal</h1>";
}

paragraphTagUpdater();