createCanvas(45);
slider();
getColor();
pickAcolor();
getColorFromColorPicker();
painting();

function slider() {
    const sld = document.querySelector(".slider");
    const txt = document.querySelector(".size");
    sld.onchange = (e)=>{
        removeChildren();
        createCanvas(e.target.value);
        txt.innerHTML = `${e.target.value}x${e.target.value}`;
        painting();
    };
}

function createCanvas(size) {
    const board = document.querySelector(".sec2");
    const blockNumber = 65 - size;
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

let color = "black";
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
    const colors1 = document.querySelector(".colorPicker");
    colors1.style.gridTemplateColumns = `repeat(15, 1fr)`;
    colors1.style.gridTemplateRows = `repeat(15, 1fr)`;
    for(let i=0; i<15*15; i++) {
        const colorToChoose = document.createElement("div");
        let rand = Math.floor(Math.random()*16777215);
        let color = `#${rand.toString(16)}`;
        colorToChoose.style.backgroundColor = color;
        colorToChoose.classList.add(color);
        colorToChoose.classList.add("p");
        colors1.appendChild(colorToChoose);
    }
}

function getColorFromColorPicker() {
    const colors = document.querySelectorAll(".p");
    for(let i=0; i<colors.length; i++) {
        colors[i].addEventListener("click", (e)=>{
            color = e.target.classList[0];
            container.classList.remove("blur");
            colors1.style.display = "none";
        });
    }
    
}

const button = document.querySelector("button");
button.addEventListener("click", (e)=>{
    colors1.style.display = "grid";
    container.classList.add("blur");
});

function painting() {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach(b => {
        b.addEventListener("mouseover", (e)=> {
            e.stopPropagation();
            if (color==="rainbow")
            b.style.backgroundColor = `#${(Math.floor(Math.random()*16777215)).toString(16)}`;
            else
                b.style.backgroundColor = color;
        });
    });
}
