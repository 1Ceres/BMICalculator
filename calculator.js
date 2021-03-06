const express = require('express');
const bodyParser = require('body-Parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.listen(3000, function(){
  console.log("Server started at port 3000");
});
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){
  num1=Number(req.body.num1);
  num2=Number(req.body.num2);
  result=num1+num2;
  res.send("The result of calculation is " + result);
});

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res){
  weight = Number(req.body.weight);
  height = Number(req.body.height);
  bmi = weight / (height*height);
  res.send("Your BMI is " + bmi);
})
