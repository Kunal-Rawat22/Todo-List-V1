const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//returned date function from date.js
const date = require(__dirname + '/date.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('Public'));

let items = [];
let workItems = [];

app.get('/', (req, res) => {
    // let day = date();
    // let Date = date.getDate();
    let Day = date.getDay();
    res.render("list4", { listTitle : Day, listOfItems: items });
    res.send();
})

app.post('/', function (req, res) {
    let todoitem = req.body.todoitem;
    // console.log(req.body);
    if (req.body.List === "Work")
    {
        workItems.push(todoitem);
        res.redirect('/work');
    }
    else
    {
        items.push(todoitem);
        res.redirect('/');
    }
})

app.get('/work', function (req, res) {
    res.render("list4", { listTitle: "Work", listOfItems: workItems });
    res.send();
});

app.listen(3000, (req, res) => {
    console.log("Server Running in Post 3000");
}
)
