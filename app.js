const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let items = [];

app.get('/', (req, res) => {
    let today = new Date();
    let currentDay = today.getDay();
    let option = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }
    let day = today.toLocaleDateString("en-US", option);
    console.log(day);
    // if (currentDay === 0)
    //     day = "Sunday";
    // else if (currentDay === 1)
    //     day = "Monday";
    // else if (currentDay === 2)
    //     day = "Tuesday";
    // else if (currentDay === 3)
    //     day = "Wednesday";
    // else if (currentDay === 4)
    //     day = "Thursday";
    // else if (currentDay === 5)
    //     day = "Friday";
    // else
    //     day = "Saturday";
    
    res.render("list2", { kindOfDay : day, listOfItems: items });
    res.send();
})
app.post('/', function (req, res) {
    let todoitem = req.body.todoitem;
    items.push(todoitem);
    res.redirect('/');
  })
app.listen(3000, (req, res) => {
    console.log("Server Running in Post 3000");
}
)