const multer = require("multer")
const path = require("path");
const removeSpaces = require("./removeSpaces.controller");

const blueprintsFolder = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "src/files/blueprints/");
    },
    filename: function (req, file, cb) {
      const fileName = removeSpaces(file.originalname) 
      cb(null, fileName );
    },
  }),
});

const priceFolder = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "src/files/price/");
    },
    filename: function (req, file, cb) {
      const fileName = removeSpaces(file.originalname) 
      cb(null, fileName );
    },
  }),
});

const templatesFolder = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "src/files/templates/");
    },
    filename: function (req, file, cb) {
      const fileName = removeSpaces(file.originalname) 
      cb(null, fileName );
    },
  }),
});

module.exports = {
  blueprintsFolder,
  templatesFolder,
  priceFolder
}