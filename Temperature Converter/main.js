let celsius = document.getElementById("celsius");
let fahrenite = document.getElementById("fahrenite");
 console.log(celsius, fahrenite);

function celToFar(){
    let output = (parseFloat(celsius.value)*9/5)+32;
    fahrenite.value = parseFloat(output.toFixed(2));
    console.log(output);
}

function farToCel(){
    let output = (parseFloat(fahrenite.value)-32)*5/9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}