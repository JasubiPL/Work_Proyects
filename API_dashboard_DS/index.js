import express from "express"
import cors from "cors"

const PORT = process.env.PORT || 7000
const app = express()

app.use(cors({origin: "*"}))
app.use(express.json());

app.get("/", (req, res) =>{
  res.json({"Ruta no valida": "Mira al documentacion de la API en https://jasubip.vercel.app"})
})

app.post("/api", (req, res) =>{
  console.log(req.body)

  res.json({"message": "conected"})
})

app.listen(PORT, () =>{
  console.log(`Escuchando en el puerto ${ PORT }`)
})