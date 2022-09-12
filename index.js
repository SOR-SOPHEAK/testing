const express = require("express")

const app = express()
const router = app.Router()

router.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(3000, () => {console.log("http://localhost:3000/");})