let height = 16;
let width = 16;
let sketchSize = height * width;
let counter = 0;
const sketchPad = document.querySelector("#container");

const newGrid = document.querySelector("#newGridBtn");
newGrid.addEventListener("click", customGrid);

createGrid();

let tileList = document.querySelectorAll(".tiles");

sketchPad.addEventListener("mousedown", paintTile);
sketchPad.addEventListener("mouseup", stopPainting);

function createGrid() {
    do {
        let gridTile = document.createElement("div");
        gridTile.classList.add("tiles");
        sketchPad.appendChild(gridTile);
        counter++;
    } while (counter < sketchSize);
}

function paintTile() {
    tileList.forEach((item) => {
        item.addEventListener("mousemove", applyPaint)
    });
}

function stopPainting() {    
    tileList.forEach((item) => {
        item.removeEventListener("mousemove", applyPaint)
    });
}

function applyPaint(e) {
    let targetTile = e.target;
    targetTile.classList.add("paintedTile");
}

function customGrid() {
    let newGridSize = prompt ("Enter a number from 1 to 100 (tiles per row) for new grid size")
    Number(newGridSize);
    let tileSize = Math.round(100 / newGridSize);
    
    if (newGridSize >= 1 && newGridSize <= 100 && newGridSize != null && newGridSize != NaN) {
        sketchSize = newGridSize * newGridSize;
        sketchPad.textContent = "";
        do {
            let gridTile = document.createElement("div");
            gridTile.classList.add("customTiles");
            gridTile.style.flex = "0 0 " + tileSize + "%";
            sketchPad.appendChild(gridTile);
            counter++;
        } while (counter < sketchSize);
        tileList = document.querySelectorAll(".customTiles");
        counter = 0;
    } else {
        alert("Invalid Input.\nPlease enter a number from 1 to 100.");
    }
}
