const eventHistoryModal = document.querySelector(".event-history")
const btnDetail = document.getElementById("btn-detail")
const btnData = document.getElementById("btn-data")
const btnSignature = document.getElementById("btn-signature")
const btnRoute = document.getElementById("btn-route")
const detailModal = document.getElementById("detail-modal")
const dataModal = document.getElementById("data-modal")
const SignatureModal = document.getElementById("signature-modal")
const routeModal = document.getElementById("route-modal")

const eventsMenuOptions = document.querySelectorAll(".events-menu_options")
const eventContent = document.querySelectorAll(".event-content")
const eventsRows = document.querySelectorAll(".history-info")

const btnEventsReturn = document.querySelector(".event-return-icon").addEventListener("click", () => {
  eventHistoryModal.style.transform = "translateX(-100vw)"
})

btnDetail.addEventListener("click", showDetailModal)
btnData.addEventListener("click", showDataModal)
btnSignature.addEventListener("click", showSignatureModal)
btnRoute.addEventListener("click", showRouteModal)

eventsRows.forEach(row =>{
  row.addEventListener("click", () =>{
    eventHistoryModal.style.transform = "translateX(0)"
  })
})

function showDetailModal(){
  eventsMenuOptions.forEach(option =>{
    option.style.color = "var(--gray-3)"
  })
  eventContent.forEach(modal =>{
    modal.style.display = "none"
  })

  btnDetail.style.color = "var(--primary-color)"
  detailModal.style.display = "flex"

}

function showDataModal(){
  eventsMenuOptions.forEach(option =>{
    option.style.color = "var(--gray-3)"
  })
  eventContent.forEach(modal =>{
    modal.style.display = "none"
  })

  btnData.style.color = "var(--primary-color)"
  dataModal.style.display = "flex"
}


function showSignatureModal(){
  eventsMenuOptions.forEach(option =>{
    option.style.color = "var(--gray-3)"
  })
  eventContent.forEach(modal =>{
    modal.style.display = "none"
  })

  btnSignature.style.color = "var(--primary-color)"
  SignatureModal.style.display = "flex"
}


function showRouteModal(){
  eventsMenuOptions.forEach(option =>{
    option.style.color = "var(--gray-3)"
  })
  eventContent.forEach(modal =>{
    modal.style.display = "none"
  })

  btnRoute.style.color = "var(--primary-color)"
  routeModal.style.display = "flex"
}

