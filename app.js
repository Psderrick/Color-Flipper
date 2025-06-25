const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');


btn.addEventListener('click', (btn) => {
let random = randomColour();
document.body.style.background = colors[random];
color.textContent = colors[random];
color.style.color = colors[random];

})

    function randomColour(){
    return Math.floor(Math.random() * colors.length);
}