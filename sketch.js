let height = 16;
let width = 16;
let sketchSize = height * width;
let counter = 0;
const sketchPad = document.querySelector("#container");

do {
    let gridTile = document.createElement("div");
    gridTile.classList.add("tiles");
    sketchPad.appendChild(gridTile);
    counter++;
} while (counter < sketchSize);

const tileList = document.querySelectorAll(".tiles");

sketchPad.addEventListener("mousedown", paintTile);
sketchPad.addEventListener("mouseup", stopPainting);

function paintTile() {
    tileList.forEach((item) => {
        item.addEventListener("mouseover", applyPaint)
    });
}

function stopPainting() {    
    tileList.forEach((item) => {
        item.removeEventListener("mouseover", applyPaint);
    });
}

function applyPaint(e) {
    let targetTile = e.target;
    targetTile.classList.add("paintedTile");
}

