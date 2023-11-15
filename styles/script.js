// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(function() {
//         let overlay = document.getElementsByClassName('overlay')[0];
//         if (overlay) {
//             overlay.style.backgroundColor = 'rgba(157, 109, 219, 0.9)';
//         }
//     }, 1000);
// });

const colors = [
    "rgba(51, 235, 168, 0.9)",
    "rgba(157, 109, 219, 0.9)",
    "rgba(248, 89, 147, 0.9)"
];

let currentColorIndex = 0;

function changeColor() {
    const overlay = document.getElementById("colorChangeOverlay");
    overlay.style.backgroundColor = colors[currentColorIndex];

    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

setInterval(changeColor, 5000);