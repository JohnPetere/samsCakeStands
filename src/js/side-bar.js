
// // FROM https://codepen.io/chris__sev/pen/RwKWXpJ

window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    
// grab everything we need
console.log("side-bar.js loaded")
const btn = document.querySelector(".mobile-menu-button")
console.log("Button selection",btn)
const sidebar = document.querySelector(".sidebar");

// add our event listener for the click
btn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});
});