// =====MOBILE=====

// Hamburger menu toggle
const navbar = document.querySelector("nav"); 
const menu = document.querySelector(".menu-button");
const backgroundShadow = document.querySelector(".nav-background-shadow");
menu.addEventListener('click', ()=>{
  let visibilty = navbar.getAttribute("data-visible");
  if(visibilty==="false"){
    navbar.setAttribute("data-visible","true");
    menu.children[0].src = "images/icon-close-menu.svg";
    backgroundShadow.style.opacity=1;
  } else {
    navbar.setAttribute("data-visible","false");
    menu.children[0].src = "images/icon-menu.svg";
    backgroundShadow.style.opacity=0;
  }
});

// Menu Dropdown
const dropdownButton = document.querySelectorAll(".dropdown-button");
dropdownButton.forEach(elm => {
  elm.addEventListener('click',()=>{
    let dropdownList = elm.nextElementSibling;
    if(dropdownList.classList.contains("dropdown-active")){
      dropdownList.classList.remove("dropdown-active");
    } else {
      dropdownList.classList.add("dropdown-active");
    }
  });
});