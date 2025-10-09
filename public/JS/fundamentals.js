/*
Fundamentals Code
Shift Alt F tidies page with prettier extension
*/

function myFunction(p1, p2){
    return p1 * p2;
}

function Initialize() {
  window.alert("Hello World");
  document.getElementById("printhere").innerHTML = "Hello World";

    let x = "20"
    let y = "25"
    document.getElementById("datetypes").innerHTML =parseInt(x) + parseInt(y);

//booleans and conditionals
 x = 5;
 y = 9;
 if(x != y){document.getElementById("booleans").innerHTML = "Its true " + x + " != " + y}


my_array = ["item1", "item2", "item3"];
document.getElementById("array").innerHTML = my_array[1];
my_array[0] = "newItem1"
document.getElementById("changearray").innerHTML = my_array[0];
document.getElementById("fullarray").innerHTML = my_array;
document.getElementById("arraylength").innerHTML = my_array.length;

let text = "";
for(i = 0; i < 5; i++)
{
    text += "The number is " + i + "<br>";
}
document.getElementById("forloop").innerHTML = text;

document.getElementById("function").innerHTML = myFunction(5,4);


//debug

let X = 20;
let Y = 8;
let Z = X + Y;
console.log(Z);
}

//Function
function dateTime() {
  document.getElementById("datetime").innerHTML = Date();
}
