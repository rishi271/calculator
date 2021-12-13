var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("The result is "+result);
});
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){
    var height=parseFloat(req.body.height);
    var weight=parseFloat(req.body.weight);
    var bmi=weight/(height**2);
    res.send("The result is "+bmi);
});
app.listen(3000);