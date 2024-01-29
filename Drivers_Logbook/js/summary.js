
const btnGrafic = document.querySelector(".graph-icon").addEventListener("click", openSummary)
const summaryWindow = document.querySelector(".summary")

let switchMenuSummary = false


function openSummary(){
  
if(!switchMenuSummary){
  summaryWindow.style.transform = "translateX(0)"
  switchMenuSummary = true
}else{
  summaryWindow.style.transform = "translateX(-80vw)"
  switchMenuSummary = false
}
}