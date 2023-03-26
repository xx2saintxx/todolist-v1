const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req,res){

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    if(today.getDay() === 6 || today.getDay() === 0){
        day = "Weekend"
        // res.render("list",{todayIs: currentDay})
    }else{
        day ="Weekday"
        // res.render("list",{todayIs:currentDay})
    }
    res.render('list', {
     type: day,
     todayIs: daysOfWeek[currentDay]
    });
});

app.listen(3000, function(){
console.log("Server started on port 3000");
});
