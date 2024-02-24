const express = require("express")
const { blueprintsFolder } = require("../controllers/multerRouteManagement.controller")

//create route
const saveFiles = express.Router()


saveFiles.post("/save-blueprints", blueprintsFolder.single("document"), (req, res, next) =>{
  const {fileName, category} = req.body
  const file = req.file
  console.log( fileName, category, file)

  res.json({"message": "conected"})
})

module.exports = saveFiles