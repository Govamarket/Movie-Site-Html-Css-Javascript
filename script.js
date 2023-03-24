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
  
  const setIcon = document.querySelector(".fa-solid");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const roundUp = document.querySelector(".roundup")

  setIcon.addEventListener("click", (event) => {
    if (setIcon.value === null) {
      setIcon.appendChild("dropdown-menu").add
      dropdownMenu.style.display = "flex";
    }else{
      dropdownMenu.style.display = "none";
    }
    
  })



  // Working on toggle format
 
  const btn = document.getElementById("btn");
  btn.addEventListener("click", (event) => {
    alert("Still working on toggle format funtion kindly exercise patient...");
  });
  

  