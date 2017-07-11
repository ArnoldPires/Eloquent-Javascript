//This function is an example of how to get a button to trigger a function

//variables-1
document.getElementById("varOne").addEventListener('click', function()
{
var ten = 10;(alert('ten * ten'));
alert(ten * ten);
});

//variables-2
document.getElementById("varTwo").addEventListener('click', function()
{
var arnoldsDebt = 140;(alert("Arnold owe's me $140!"));
alert("Arnold pays me $35");
alert("Now he owe's me");
alert(arnoldsDebt = arnoldsDebt - 35);
});

//variables-3
document.getElementById("varThree").addEventListener('click', function()
{
var one = 1, two = 2
alert("one + two equals");
alert(one + two);
});

//Keywords and Reserved words
document.getElementById("javaKeywords").addEventListener('click', function()
{
var listofkeywords = [];
var a = ["break",""]
});

//Control Flow
document.getElementById("clickMe").addEventListener('click', function()
{
var theNumber = Number(prompt("Pick a number", ""));
alert("Your number is the square root of" +
  theNumber * theNumber);
});
