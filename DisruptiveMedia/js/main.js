//DOM ELEMENTS
const logo = document.getElementById("logo")
const MenuItems = document.querySelectorAll(".menu_list")
const btnSearch = document.getElementById("btn_search")
const search = document.getElementById("search")
const inputSearch = document.getElementById("input_search")
const btnOpenMenu = document.getElementById("btn_menu")
const btnCloseMenu = document.getElementById("btn_close_menu")
const principalMenu = document.getElementById("principal_menu")
const costumersSection = document.getElementById("costumers")
const portfolioSection = document.getElementById("porfolio_section");
const brandingSection = document.getElementById("branding_section")
const digitalSection = document.getElementById("digital_section")
const aboutUsCard = document.querySelector(".about_us_center")
const counterNumber1 = document.querySelector(".counter_number_1")
const counterNumber2 = document.querySelector(".counter_number_2")
const counterNumber3 = document.querySelector(".counter_number_3")
const counterNumber4 = document.querySelector(".counter_number_4")

//EVENTS LISTENER
btnSearch.addEventListener('click', showSearch)
btnOpenMenu.addEventListener('click', showMenu)
btnCloseMenu.addEventListener('click', hiddenMenu)

//VARIABLES
let switchSearch = false
let switchMenu = false

//FUNCTIONS
MenuItems.forEach((item) => {
  item.addEventListener('click', () =>{
      MenuItems.forEach(item =>{
        item.classList.remove('select')
      })

    item.classList.add('select')
    
  })
});

function showSearch(){
  if(window.innerWidth <= 500){
    if(!switchSearch){
      search.style.backgroundColor = "#fff"
      search.style.padding = "10px"
      search.style.width = "100%"
      inputSearch.style.width = "100%"
      logo.style.display = "none"
      switchSearch = true
    }else{
      search.style.background = "none"
      search.style.padding = "0"
      inputSearch.style.width = "0px"
      logo.style.display = "block"
      switchSearch = false
    }

  }else{
    if(!switchSearch){
      search.style.border = "1px solid #004cfa"
      search.style.padding = "10px 20px"
      inputSearch.style.width = "auto"
      switchSearch = true
    }else{
      search.style.border = "none"
      search.style.padding = "0"
      inputSearch.style.width = "0px"
      switchSearch = false
    }
  }
}

function showMenu(){
  const screenWidth = window.innerWidth

  if(screenWidth <= 820 && screenWidth >= 450){
    principalMenu.style.width = "50vw"
    principalMenu.style.padding = "20px"
  }else{
    principalMenu.style.width = "100vw"
    principalMenu.style.padding = "20px"
  }
}

function hiddenMenu(){
  principalMenu.style.width = "0px"
  principalMenu.style.padding = "0px"
}



//Lazy load
const observerOptions = {
  root: null,
  threshold: .5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entrie =>{
    if(entrie.isIntersecting){
      entrie.target.classList.add("visible")
      console.log("in view")
    }
  }) 

}, observerOptions);


//Counter efect
function counterStart(){
  initialNumber = 0;

  setInterval(() =>{
    if(initialNumber >=6){
      initialNumber = 0
    }
    initialNumber++

    counterNumber1.innerText = initialNumber + 1
    counterNumber2.innerText = initialNumber
    counterNumber3.innerText = initialNumber + 2
    counterNumber4.innerText = initialNumber + 3
  },50)
}

//exectute functions
observer.observe(portfolioSection);
observer.observe(costumersSection);
observer.observe(aboutUsCard);
observer.observe(brandingSection);
observer.observe(digitalSection);
counterStart()
