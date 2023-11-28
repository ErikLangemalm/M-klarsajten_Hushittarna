var menuIcon = document.getElementById("menu-icon");

var nav = document.querySelector("nav");



menuIcon.addEventListener("click", toggleNav);



function toggleNav() {

  if (nav.style.display === "" || nav.style.display === "none") {

    nav.style.display = "block";

    menuIcon.innerHTML = "&#10006;"; // Cross icon

  } else {

    nav.style.display = "none";

    menuIcon.innerHTML = "&#9776;"; // Hamburger icon

  }

}
function säljaBostad() {

  // Add functionality for "Sälja Bostad" button

  alert("Sälja Bostad button clicked");

}



function köpaBostad() {

  // Add functionality for "Köpa Bostad" button

  alert("Köpa Bostad button clicked");

}