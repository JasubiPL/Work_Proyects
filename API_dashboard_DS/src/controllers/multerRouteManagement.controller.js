const multer = require("multer")
const path = require("path")

const blueprintsFolder = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "src/blueprints/");
    },
    filename: function (req, file, cb) {
      const extension = path.extname(file.originalname);
      const fileName = path.basename(file.originalname, extension);
      cb(null, fileName +  extension);
    },
  }),
});

module.exports = {
  blueprintsFolder
}