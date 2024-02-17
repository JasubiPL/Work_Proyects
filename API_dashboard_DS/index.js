import express from "express"
import cors from "cors"
import multer from "multer"

const PORT = process.env.PORT || 7000
const blueprintsFolder = multer({dest: "blueprints/"})
const app = express()


app.use(cors({origin: "*"}))
app.use(express.json());

app.get("/", (req, res) =>{
  res.json({"Ruta no valida": "Mira al documentacion de la API en https://jasubip.vercel.app"})
})

app.get("/api",  (req, res, next) =>{
  res.send("<h1>Bienvenido a la API</h1>")

  res.json({"message": "conected"})
})

app.post("/api", blueprintsFolder.single("document"), (req, res, next) =>{
  console.log(req.body)
  console.log(req.file)

  res.json({"message": "conected"})
})

app.listen(PORT, () =>{
  console.log(`Escuchando en el puerto ${ PORT }`)
})