const target = document.querySelector(".target");
const zone = document.querySelector(".target-zone");


function moveTarget(){
    const x = Math.random() * (zone.clientWidth - target.clientWidth);
    const y = Math.random() * (zone.clientHeight - target.clientHeight);

    target.style.left = x + "px";
    target.style.top = y + "px";
}

target.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    moveTarget();
});

target.addEventListener("dragstart", (event) => {
    event.preventDefault();
});

document.addEventListener("selectstart", (event) => {
    event.preventDefault();
});

moveTarget();