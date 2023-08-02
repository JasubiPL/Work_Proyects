export const btnDriving = document.getElementById("btn-driving")
export const btnPause = document.getElementById("btn-pause")
export const btnAuxiliary = document.getElementById("btn-auxiliary")
export const btnExceptions = document.getElementById("btn-exceptions")
export const btnBreaks = document.getElementById("btn-breaks")
export const btnOutService = document.getElementById("btn-outService")

const btnControls = document.querySelectorAll(".driver-menu-icon")

btnDriving.addEventListener("click", activeDriving)
btnPause.addEventListener("click", activePause)
btnAuxiliary.addEventListener("click", activeAuxiliary)
btnExceptions.addEventListener("click", activeExceptions)
btnBreaks.addEventListener("click", activeBreaks)
btnOutService.addEventListener("click", activeOutService)


function activeDriving(){
  btnControls.forEach(btn =>{
    btn.classList.remove("desactive", "active")
    btn.classList.add("desactive")
  })

  btnDriving.classList.add("active")

}


function activePause(){
  btnControls.forEach(btn =>{
    btn.classList.remove("desactive", "active")
    btn.classList.add("desactive")
  })

  btnPause.classList.add("active")

}

function activeAuxiliary(){
  btnControls.forEach(btn =>{
    btn.classList.remove("desactive", "active")
    btn.classList.add("desactive")
  })

  btnAuxiliary.classList.add("active")

}

function activeExceptions(){
  btnControls.forEach(btn =>{
    btn.classList.remove("desactive", "active")
    btn.classList.add("desactive")
  })

  btnExceptions.classList.add("active")

}

function activeBreaks(){
  btnControls.forEach(btn =>{
    btn.classList.remove("desactive", "active")
    btn.classList.add("desactive")
  })

  btnBreaks.classList.add("active")

}

function activeOutService(){
  btnControls.forEach(btn =>{
    btn.classList.remove("desactive", "active")
    btn.classList.add("desactive")
  })

  btnOutService.classList.add("active")

}