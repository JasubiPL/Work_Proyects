export const btnDriving = document.getElementById("btn-driving")
const btnPause = document.getElementById("btn-pause")
const btnAuxiliary = document.getElementById("btn-auxiliary")
const btnExceptions = document.getElementById("btn-exceptions")
const btnBreaks = document.getElementById("btn-breaks")
const btnOutService = document.getElementById("btn-outService")

const noteOptions = document.getElementById("note-options")
const pauseOptions = document.getElementById("pause-options")
const exceptionsOptions = document.getElementById("exceptions-options")
const auxiliaryOptions = document.getElementById("auxiliary-options")
const statusTitle = document.getElementById("status-title")

const statusModal = document.querySelector(".status")
const btnControls = document.querySelectorAll(".driver-menu-icon")
const formOptions = document.querySelectorAll(".status-form-options")


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

  formOptions.forEach(option =>{
    option.style.display = "none"
  })

  btnDriving.classList.add("active")
  statusModal.style.transform = "translateX(0)"
  statusTitle.innerText = "Conduciendo"
  noteOptions.style.display = "block"

}


function activePause(){
  btnControls.forEach(btn =>{
    btn.classList.remove("desactive", "active")
    btn.classList.add("desactive")
  })

  formOptions.forEach(option =>{
    option.style.display = "none"
  })

  btnPause.classList.add("active")
  statusModal.style.transform = "translateX(0)"
  statusTitle.innerText = "Pausa"
  pauseOptions.style.display = "block"
}

function activeAuxiliary(){
  btnControls.forEach(btn =>{
    btn.classList.remove("desactive", "active")
    btn.classList.add("desactive")
  })

  formOptions.forEach(option =>{
    option.style.display = "none"
  })

  btnAuxiliary.classList.add("active")
  statusModal.style.transform = "translateX(0)"
  statusTitle.innerText = "Actividades Auxiliares"
  auxiliaryOptions.style.display = "block"

}

function activeExceptions(){
  btnControls.forEach(btn =>{
    btn.classList.remove("desactive", "active")
    btn.classList.add("desactive")
  })

  formOptions.forEach(option =>{
    option.style.display = "none"
  })

  btnExceptions.classList.add("active")
  statusModal.style.transform = "translateX(0)"
  statusTitle.innerText = "Casos de Excepcion"
  exceptionsOptions.style.display = "block"
}

function activeBreaks(){
  btnControls.forEach(btn =>{
    btn.classList.remove("desactive", "active")
    btn.classList.add("desactive")
  })

  formOptions.forEach(option =>{
    option.style.display = "none"
  })

  btnBreaks.classList.add("active")
  statusModal.style.transform = "translateX(0)"
  statusTitle.innerText = "Descanso"
  noteOptions.style.display = "block"

}

function activeOutService(){
  btnControls.forEach(btn =>{
    btn.classList.remove("desactive", "active")
    btn.classList.add("desactive")
  })

  formOptions.forEach(option =>{
    option.style.display = "none"
  })

  btnOutService.classList.add("active")
  statusModal.style.transform = "translateX(0)"
  statusTitle.innerText = "Fuera de Servicio"
  noteOptions.style.display = "block"
}

function saveStatus(){
  confirm("¿Está seguro de grabar los cambios?")
  statusModal.style.transform = "translateX(-100vw)"
}