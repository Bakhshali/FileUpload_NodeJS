const express = require("express")
const fileUpload = require("express-fileupload")
var path = require("path")

const { v4: uuidv4 } = require("uuid")

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("images/", express.static(path.join(__dirname, "images")))

app.use(fileUpload())

app.post("/api/upload", (req, resp) => {

    let extName = path.extname(req.files.profileImg.name);


    if (extName == ".jpeg" || extName == ".jpg" || extName == ".png") {
        req.files.profileImg.mv(__dirname + "/images/" + uuidv4() + extName)
        resp.send('OK')
    }
    else {
        resp.status(500).send("Ext error");
    }
})

app.listen(4747, () => { console.log("Server running..."); })
