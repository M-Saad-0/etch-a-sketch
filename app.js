createCanvas(64);
slider();
getColor();
function slider() {
    const sld = document.querySelector(".slider");
    const txt = document.querySelector(".size");
    sld.onchange = (e)=>{
        removeChildren();
        createCanvas(e.target.value);
        txt.innerHTML = `${e.target.value}x${e.target.value}`
    };
}

function createCanvas(size) {
    const board = document.querySelector(".sec2");
    const blockNumber = 65 - size;
    console.log(blockNumber);
    console.log(board);
    board.style.gridTemplateColumns = `repeat(${blockNumber}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${blockNumber}, 1fr)`;
    for(let i=0; i<blockNumber*blockNumber; i++)
    {
        const block = document.createElement("div");
        block.classList.add("block");
        board.appendChild(block);
    }

}

function removeChildren() {
    const parent = document.querySelector('.sec2');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let color;
function getColor() {
    const colors = document.querySelectorAll(".c");
    for(let i=0; i<colors.length; i++) {
        colors[i].addEventListener("click", (e)=>{
            color = e.target.classList[0];
        });
    }
}

const colors1 = document.querySelector(".colorPicker");
const container = document.querySelector(".container");
function pickAcolor() {
    container.classList.add("blur");
    colors1.style.display = "grid";
    colors1.style.gridTemplateColumns = `repeat(15, 1fr)`;
    colors1.style.gridTemplateRows = `repeat(15, 1fr)`;
    for(let i=0; i<15*15; i++) {
        const colorToChoose = document.createElement("div");
        let rand = Math.floor(Math.random()*16777215);
        color = `#${rand.toString(16)}`;
        colorToChoose.style.backgroundColor = color;
        colorToChoose.classList.add(color);
        colorToChoose.classList.add("p");
        colors1.appendChild(colorToChoose);
    }
}

function getColorFromColorPicker() {
    const colors = document.querySelectorAll(".p");
    console.log(colors);
    for(let i=0; i<15*15; i++) {
        colors[i].addEventListener("click", (e)=>{
            e.stopPropagation();
            color = e.target.classList[0];
        });
    }
    container.classList.remove("blur");
    colors1.style.display = "none"
}

const button = document.querySelector("button");
button.addEventListener("click", (e)=>{
    pickAcolor();
    getColorFromColorPicker();
});

function painting() {
    
}