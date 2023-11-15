
const trainingTopText = document.getElementsByClassName("top-text-1");
trainingTopText[0].innerText = "want to become a";
let courses = document.getElementById("courses");
courses.innerText = "software Engineer?"
const trainingDescription = document.getElementById("training-description");
trainingDescription.innerText =
"Jumps tart your journey in tech with our courses in Computer Science, Full-Stack Web development,\
 Data Engineering and UI/UX Design. Get hands-on experience and gain essential skills for a successful\
 tech career.";

var speed = 50; // Adjust the speed of the animation (milliseconds per character)

function animateText() {
   var container = document.getElementById("animatedText");
   container.innerHTML = ''; // Clear previous content
   var i = 0;

   // Function to show text from left to right
   function typeWriter() {
     if (i < courses.length) {
       container.innerHTML += courses.charAt(i);
       i++;
       setTimeout(typeWriter, speed);
     } else {
       // Start the function to hide text from right to left after a delay
       setTimeout(eraseText, 1000);
     }
   }

   // Function to hide text from right to left
   function eraseText() {
     if (i >= 0) {
       container.innerHTML = courses.substring(0, i - 1);
       i--;
       setTimeout(eraseText, speed);
     } else {
       // Restart the animation after a delay
       setTimeout(animateText, 1000);
     }
    }

   // Start the animation
typeWriter();
}

 // Start the animation when the page loads
 window.onload = animateText;
 
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

setInterval(changeColor, 3500);