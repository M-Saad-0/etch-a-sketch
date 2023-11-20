generateRandomColors();
function generateRandomColors() {
    const sec1 = document.querySelector(".sec1");
    let elem = [];
    for(let i=0; i<20; i++)
    {
        elem[i] = document.createElement("div");
        elem[i].classList.add("color")
        let color = Math.floor(Math.random() * 16777215);
        elem[i].style.backgroundColor = "#" + color.toString(16);
        sec1.appendChild(elem[i]);
    }
}

const colorChanger = document.querySelector("button");
colorChanger.addEventListener("click", () => {
    const toRemove = document.querySelectorAll(".color");
    for(let i=1; i<21; i++)
    {
        toRemove[i].remove();
    }
    generateRandomColors();
})