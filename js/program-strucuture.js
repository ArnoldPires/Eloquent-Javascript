//This function is an example of how to get a button to trigger a function

//variables
document.getElementById("tenex").addEventListener('click', function()
{
var ten = 10;(alert('ten * ten'));
alert(ten * ten);
});


//Control Flow
document.getElementById("clickMe").addEventListener('click', function()
{
var theNumber = Number(prompt("Pick a number", ""));
alert("Your number is the square root of" +
  theNumber * theNumber);
});
