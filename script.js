const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  // the toggle navigation
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 7 + 1.5
        }s`;
      }
    });
    // Burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();

const ALparts = () => {
  const setIcon = document.querySelector(".fa-solid");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const roundUp = document.querySelector(".roundup");
  const body = document.querySelector("body");
  const btn = document.getElementById("btn");
  const header = document.querySelector("header");
  const lightCo = document.querySelector("co");
  const darkCo = document.querySelector("col");
  const main = document.querySelector(".main");

  setIcon.addEventListener("click", (event) => {
    if (dropdownMenu) {
      dropdownMenu.style.visibility = "visible";
    } else {
      dropdownMenu.style.visibility = "hidden";
    }
  });

  roundUp.addEventListener("click", (event) => {
    if (roundUp) {
      body.style.background = "black";
      header.style.background = "black";
      header.style.border = "1px solid #ccc";
      dropdownMenu.style.background = "black";
      dropdownMenu.style.border = "1px solid #ccc";
      dropdownMenu.style.color = "red";
    } else {
      body.style.background = "#303030";
    }
  });

  btn.addEventListener("click", (event) => {
    alert(
      "Still working on the javascript funtions, Kindly exercise patiently with us..."
    );
  });
};

ALparts();

// Working on toggle functions

// Now the implementation
//declare a variable first or create a new instance button to control
//header.style.background = "#c5cae9";
// header.style.color = "black";
// body.style.background = "#c5cae9";
// dropdownMenu.style.background = "#c5cae9";
