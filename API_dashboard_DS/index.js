import express from "express"

const PORT = process.env.PORT || 7000
const app = express()

app.get("/", (req, res) =>{
  res.json({"Ruta no valida": "Mira al documentacion de la API en https://jasubip.vercel.app"})
})

app.post("/api", (req, res) =>{
  
})

app.listen(PORT, () =>{
  console.log(`Escuchando en el puerto ${ PORT }`)
})