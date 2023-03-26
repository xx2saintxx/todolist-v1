const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req,res){

    var today = new Date();
    var currentDay = today.getDay();

    if(today.getDay() === 6 || today.getDay() === 0){
        res.write("<h1>Yay it's the weekend!<h1>")
    }else{
        res.sendFile(__dirname + "/index.html")
        res.send();
    }
});

app.listen(3000, function(){
console.log("Server started on port 3000");
});
