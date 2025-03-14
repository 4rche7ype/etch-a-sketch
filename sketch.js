const sketchPad = document.querySelector("#container");
const newGrid = document.querySelector("#newGridBtn");

createGrid();
let tileList = document.querySelectorAll(".tiles");

newGrid.addEventListener("click", customGrid);
sketchPad.addEventListener("mousedown", paintTile);
sketchPad.addEventListener("mouseup", stopPainting);

function createGrid() {
    let outerCounter = 0;
    let innerCounter = 0;
    do {
        let generatedDiv = document.createElement("div");
        generatedDiv.classList.add("generatedDivs");
        do {
            let gridTile = document.createElement("div");
            gridTile.classList.add("tiles");
            generatedDiv.appendChild(gridTile);
            innerCounter++;
        }while (innerCounter < 16);
        innerCounter = 0;
        sketchPad.appendChild(generatedDiv);
        outerCounter++;
    } while (outerCounter < 16);
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
    if (newGridSize >= 1 && newGridSize <= 100 && newGridSize != null && newGridSize != NaN) {
        sketchPad.textContent = "";
        let outerCounter = 0;
        let innerCounter = 0;   
        do {
            let generatedDiv = document.createElement("div");
            generatedDiv.classList.add("generatedDivs");
            do {
                let gridTile = document.createElement("div");
                gridTile.classList.add("tiles");
                generatedDiv.appendChild(gridTile);
                innerCounter++;
            }while (innerCounter < newGridSize);
            innerCounter = 0;
            sketchPad.appendChild(generatedDiv);
            outerCounter++;
        } while (outerCounter < newGridSize);
        tileList = document.querySelectorAll(".tiles");
    } else {
        alert("Invalid Input.\nPlease enter a number from 1 to 100.");
    }
}
