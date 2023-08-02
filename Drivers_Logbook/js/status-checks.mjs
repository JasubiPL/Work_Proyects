export const btnDriving = document.getElementById("btn-driving")
const btnPause = document.getElementById("btn-pause")
const btnAuxiliary = document.getElementById("btn-auxiliary")
const btnExceptions = document.getElementById("btn-exceptions")
const btnBreaks = document.getElementById("btn-breaks")
const btnOutService = document.getElementById("btn-outService")
const statusTitle = document.getElementById("status-title")
const btnControls = document.querySelectorAll(".driver-menu-icon")
const statusModal = document.querySelector(".status")

const btnReturn = document.querySelector(".return-icon").addEventListener("click", () =>{
  statusModal.style.transform = "translateX(-100vw)"
  confirm("¿Salir sin guardar cambios?")
})

const btnSave = document.querySelector(".save-icon").addEventListener("click", saveStatus)

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
  statusModal.style.transform = "translateX(0)"
  statusTitle.innerText = "Conduciendo"

}


function activePause(){
  btnControls.forEach(btn =>{
    btn.classList.remove("desactive", "active")
    btn.classList.add("desactive")
  })

  btnPause.classList.add("active")
  statusModal.style.transform = "translateX(0)"
  statusTitle.innerText = "Pausa"

}

function activeAuxiliary(){
  btnControls.forEach(btn =>{
    btn.classList.remove("desactive", "active")
    btn.classList.add("desactive")
  })

  btnAuxiliary.classList.add("active")
  statusModal.style.transform = "translateX(0)"
  statusTitle.innerText = "Actividades Auxiliares"

}

function activeExceptions(){
  btnControls.forEach(btn =>{
    btn.classList.remove("desactive", "active")
    btn.classList.add("desactive")
  })

  btnExceptions.classList.add("active")
  statusModal.style.transform = "translateX(0)"
  statusTitle.innerText = "Casos de Excepcion"

}

function activeBreaks(){
  btnControls.forEach(btn =>{
    btn.classList.remove("desactive", "active")
    btn.classList.add("desactive")
  })

  btnBreaks.classList.add("active")
  statusModal.style.transform = "translateX(0)"
  statusTitle.innerText = "Descanso"
  

}

function activeOutService(){
  btnControls.forEach(btn =>{
    btn.classList.remove("desactive", "active")
    btn.classList.add("desactive")
  })

  btnOutService.classList.add("active")
  statusModal.style.transform = "translateX(0)"
  statusTitle.innerText = "Fuera de Servicio"

}

function saveStatus(){
  confirm("¿Está seguro de grabar los cambios?")
  statusModal.style.transform = "translateX(-100vw)"
}