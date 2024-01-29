const btnDriving = document.getElementById("btn-driving")
const btnPause = document.getElementById("btn-pause")
const btnAuxiliary = document.getElementById("btn-auxiliary")
const btnExceptions = document.getElementById("btn-exceptions")
const btnBreaks = document.getElementById("btn-breaks")
const btnOutService = document.getElementById("btn-outService")
const btnAddReason = document.getElementById("btn-add-reason")

const noteOptions = document.getElementById("note-options")
const pauseOptions = document.getElementById("pause-options")
const exceptionsOptions = document.getElementById("exceptions-options")
const auxiliaryOptions = document.getElementById("auxiliary-options")
const formDate = document.getElementById("status-form-date")
const statusTitle = document.getElementById("status-title")

const statusModal = document.querySelector(".status")
const reasonModal = document.querySelector(".add-reason-modal")
const outServiceModal = document.querySelector(".outServices-modal")
const btnControls = document.querySelectorAll(".driver-menu-icon")
const formOptions = document.querySelectorAll(".status-form-options")
const btnShowAddReasonModal = document.querySelectorAll(".add-reason")


const btnReturn = document.querySelector(".return-icon").addEventListener("click", returnStatus)

const btnSave = document.querySelector(".save-icon").addEventListener("click", saveStatus)

btnDriving.addEventListener("click", activeDriving)
btnPause.addEventListener("click", activePause)
btnAuxiliary.addEventListener("click", activeAuxiliary)
btnExceptions.addEventListener("click", activeExceptions)
btnBreaks.addEventListener("click", activeBreaks)
btnOutService.addEventListener("click", activeOutService)
btnAddReason.addEventListener("click", saveReason)

btnShowAddReasonModal.forEach(btn =>{
  btn.addEventListener("click", ShowAddReasonModal)
})


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
  formDate.style.display = "none"
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
  pauseOptions.style.display = "flex"
  formDate.style.display = "block"
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
  auxiliaryOptions.style.display = "flex"
  formDate.style.display = "none"
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
  exceptionsOptions.style.display = "flex"
  formDate.style.display = "none"
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
  formDate.style.display = "block"
}

// function activeOutService(){
//   btnControls.forEach(btn =>{
//     btn.classList.remove("desactive", "active")
//     btn.classList.add("desactive")
//   })

//   formOptions.forEach(option =>{
//     option.style.display = "none"
//   })

//   btnOutService.classList.add("active")
//   statusModal.style.transform = "translateX(0)"
//   statusTitle.innerText = "Fuera de Servicio"
//   noteOptions.style.display = "block"
//   formDate.style.display = "none"
// }

function activeOutService(){
    btnControls.forEach(btn =>{
     btn.classList.remove("desactive", "active")
     btn.classList.add("desactive")
   })

   formOptions.forEach(option =>{
     option.style.display = "none"
   })

   btnOutService.classList.add("active")
   outServiceModal.style.display = "block"

}

function saveStatus(){
  let reasonValue = document.getElementById("reason-value")
  const newReason = document.querySelectorAll(".new-reason")

  confirm("¿Está seguro de grabar los cambios?")
  statusModal.style.transform = "translateX(-100vw)"

  reasonModal.style.display = "none"
  reasonValue.value = ""
  newReason.forEach(reason =>{
    reason.style.display = "none"
    reason.innerText = ""
  })

  
}

function returnStatus(){
  let reasonValue = document.getElementById("reason-value")
  const newReason = document.querySelectorAll(".new-reason")

  statusModal.style.transform = "translateX(-100vw)"
  confirm("¿Salir sin guardar cambios?")

  reasonModal.style.display = "none"
  reasonValue.value = ""
  newReason.forEach(reason =>{
    reason.style.display = "none"
    reason.innerText = ""
  })
}

function ShowAddReasonModal(e){
  e.preventDefault()
  reasonModal.style.display = "flex"
}

function saveReason(){
  let reasonValue = document.getElementById("reason-value").value
  const newReason = document.querySelectorAll(".new-reason")

  reasonModal.style.display = "none"
  newReason.forEach(reason =>{
    reason.style.display = "block"
    reason.innerText = reasonValue
  })


}