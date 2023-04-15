const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.get('/', (req, res) => {
    let today = new Date();
    let currentDay = today.getDay();

    if (currentDay===6 || currentDay===0)
        res.write("<h1>Yay Today is Weekend !!</h1>");
    else
        res.write("<h1>Boo, I ahve to work !!</h1>");
    // res.send("Hi Just Checking");
    res.send();
})

app.listen(3000, (req, res) => {
    console.log("Server Running in Post 3000");
}
)