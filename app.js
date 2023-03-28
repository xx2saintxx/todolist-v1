const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require("https");

const app = express();
var tasks = [];

app.set('view engine', 'ejs');
app.use(express.static("/"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req,res){

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var date = today.toLocaleDateString("en-US", options);

    // if(today.getDay() === 6 || today.getDay() === 0){
    //     day = "Weekend"
    //     // res.render("list",{todayIs: currentDay})
    // }else{
    //     day ="Weekday"
    //     // res.render("list",{todayIs:currentDay})
    // }
    res.render('list', {
     type: date,
     taskitem: tasks
    //  todayIs: daysOfWeek[currentDay]
    });
});

app.post("/", function(req,res){
var task = req.body.task;
// var node = document.createElement('li');
// node.appendChild(document.createTextNode(""+task));
// document.getElementById('ul').appendChild(node);
// res.write("<ui id=tasklist> "+"<li> "+ task+"</li>"+"</ul>");
tasks.push(task);
res.redirect("/");
});

app.listen(3000, function(){
console.log("Server started on port 3000");
});
