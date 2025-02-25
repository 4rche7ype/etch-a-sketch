let height = 16;
let width = 16;
let sketchSize = height * width;
let counter = 0;
const sketchPad = document.querySelector("#container");

do {
    let gridTile = document.createElement("div");
    gridTile.setAttribute("id", "tile" + counter.toString());
    gridTile.classList.add("tiles");
    sketchPad.appendChild(gridTile);
    counter++;
} while (counter < sketchSize);

const tileList = document.querySelectorAll(".tiles");

sketchPad.addEventListener("mousedown", () => {
    
    tileList.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.classList.add("paintedTile");
        });
    });
    
});



