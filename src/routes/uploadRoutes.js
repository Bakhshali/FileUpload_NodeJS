const express = require("express")
const { uploadController } = require("../controllers/uploadController")

const uploadRoutes = express.Router()

uploadRoutes.post("/", uploadController.upload)

module.exports = { uploadRoutes }