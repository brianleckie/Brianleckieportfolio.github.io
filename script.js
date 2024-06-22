var a = prompt("Por favor, ingresa un nmro para A")
var b = prompt("Por favor, ingresa un nmro para B")
var c = prompt("Por favor, ingresa un nmro para C")
if (a>b && a>c){
    console.log("La variable ingresada de mayor valor es A: ",a);
}
    if (a<b && b>c){
        console.log("La variable ingresada de mayor valor es B: ",b);
    }
    else console.log("La variable ingresada de mayor valor es C: ",c);7
    /*(a>b && a>c) ? console.log("La variable ingresada de mayor valor es A: ",a) : 0;
    (a<b && b>c) ? console.log("La variable ingresada de mayor valor es B: ",b) : 0;
    (c>b && a<c) ? console.log("La variable ingresada de mayor valor es C: ",c) : 0;*/