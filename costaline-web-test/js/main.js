// <---------- Nav Control -------------------->

// <--- DOM Elements ------>
const principalMenu = document.getElementById("__principal-menu");
const secundaryMenu = document.getElementById("secundary-menu");
const dotersBanner = document.getElementById("doters-banner");
//const searchInputs = document.querySelectorAll(".__search-content_input-container");
//const btnSearch = document.getElementById("btn-search");
//const btnOpenSearch = document.getElementById("btn-open-search");
const body = document.querySelector("body");
const windowWidth = window.innerWidth;

// <--- BTN ------>
const btnMoreOptions = document.getElementById("more-options-icon").addEventListener("click", openSubMenu);
const btnOpenMenu = document.getElementById("principal-menu-icon").addEventListener("click", showPrincipalMenu);
const btnCloseMenu = document.getElementById("__close-menu-icon").addEventListener("click", closePrincipalMenu);
const btnCloseSubMenu = document.getElementById("__close-submenu-icon").addEventListener("click", openSubMenu);
const btnDoters = document.getElementById("doters-icon").addEventListener("click", openDotersBanner);
//btnOpenSearch.addEventListener("click", openSearch);

// <--- Globals Variables------>
let switchSubMenu = false; 
let switchDotersBanner = false;
//let switchSerch = false;

// <--- Functions ------>

//<--- Menu Controls ------>
function showPrincipalMenu(){
  principalMenu.style.display = "flex";
  setTimeout(() =>{
    principalMenu.style.top ="0"
  },100);
}

function closePrincipalMenu(){
  setTimeout(() =>{
    principalMenu.style.display = "none";
  },300);
  principalMenu.style.top ="-100vh"
}

function openSubMenu(){
  if(windowWidth <= 820){
    if(!switchSubMenu){
      switchSubMenu = true;
      secundaryMenu.style.display ="flex"
      secundaryMenu.style.padding = "10px 0px";
      setTimeout(() =>{
        secundaryMenu.style.left = "0vw";
      },300);
    }else{
      secundaryMenu.style.left = "-100vh";
      setTimeout(() =>{
        secundaryMenu.style.display = "none"
      },300);
      switchSubMenu = false;
      secundaryMenu.style.padding = "0px";
    }
  }else{
    if(!switchSubMenu){
      switchSubMenu = true;
      //secundaryMenu.style.left = "-80px"
      secundaryMenu.style.display ="flex"
      secundaryMenu.style.height = "auto"
    }else{
      switchSubMenu = false;
      //secundaryMenu.style.left = "-80px"
      secundaryMenu.style.display = "none";
      secundaryMenu.style.padding = "0px";
    }
  }
}

//<--- Login baner Doters ------>
function openDotersBanner(){
  if(!switchDotersBanner){
    dotersBanner.style.height = "60px"
    dotersBanner.style.padding = "10px"
    switchDotersBanner = true;
  }else{
    dotersBanner.style.height = "0px"
    dotersBanner.style.padding = "0px"
    switchDotersBanner = false;
  }
}

/*---- Search
function openSearch(){
  if(!switchSerch){
    searchInputs.forEach(input =>{
      input.style.display = "flex";
    })
    btnSearch.style.display = "block"
    btnOpenSearch.style.display = "none"
    switchSerch = true;
  }else{
    searchInputs.forEach(input =>{
      input.style.display = "none";
    })
    btnSearch.style.display = "none"
    switchSerch = false;
  }
}
*/

//<--- update resize width ------>
window.addEventListener('resize', () => {
  const anchoPantalla = window.innerWidth;
  console.log(`El ancho de la pantalla es ${anchoPantalla}px`);
});