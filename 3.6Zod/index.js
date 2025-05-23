const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/'));

app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.listen(port);
console.log(`Servidor corriend en http://localhost:${port}`);