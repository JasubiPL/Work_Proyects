// --------------> Submenus Control
const subMenu = document.querySelectorAll(".dev-submenu");
const primarySubmenu = document.getElementById("primary-submenu");
const subMenuBtn = document.querySelectorAll(".dev-sub-menu-btn")

subMenuBtn.forEach((btn, index) => {
  // btn.onmouseover = () => {
  //   subMenu[index].classList.add("d-block");
  // }
  btn.addEventListener("click",  () => {
    subMenu[index].classList.add("d-block");
    primarySubmenu.style.display = "block";
  })

  btn.onmouseout = () => {
    subMenu[index].classList.remove("d-block");
  }
});

subMenu.forEach((menu, index) => {
  menu.onmouseover = () => {
    subMenu[index].classList.add("d-block");
    subMenuBtn[index].classList.add("bg-white");
    subMenuBtn[index].classList.add("dev-text-principal");
    subMenuBtn[index].classList.remove("text-white");
    primarySubmenu.style.display = "block";
  }

  menu.onmouseout = () => {
    subMenu[index].classList.remove("d-block");
    subMenuBtn[index].classList.remove("bg-white");
    subMenuBtn[index].classList.remove("dev-text-principal");
    subMenuBtn[index].classList.add("text-white");
  }
});

primarySubmenu.onmouseover = () => {
  primarySubmenu.style.display = "d-block";
}

primarySubmenu.onmouseout = () => {
  primarySubmenu.style.display = "";
}