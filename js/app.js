var tecla1 = document.getElementById("1");
var tecla2 = document.getElementById("2");
var tecla3 = document.getElementById("3");
var tecla4 = document.getElementById("4");
var tecla5 = document.getElementById("5");
var tecla6 = document.getElementById("6");
var tecla7 = document.getElementById("7");
var tecla8 = document.getElementById("8");
var tecla9 = document.getElementById("9");
var tecla0 = document.getElementById("0");
var display = document.getElementById("display");
var on = document.getElementById("on");
var suma = document.getElementById("mas");
var resta = document.getElementById("menos");
var igual = document.getElementById("igual");
var division = document.getElementById("dividido");
var multiplicacion = document.getElementById("por");
var punto = document.getElementById("punto");
var signo = document.getElementById("sign");
var variable1 = "";
var flag = true;
var operacion = "";
var contador = 0;

var Calculadora = {
    init: function(){
        tecla0.addEventListener("click", function(){

            verificaLimita(0);
        });

        tecla1.addEventListener("click", function(){

            verificaLimita(1);
        });

        tecla2.addEventListener("click", function(){

            verificaLimita(2);
        });

        tecla3.addEventListener("click", function(){

            verificaLimita(3);
        });

        tecla4.addEventListener("click", function(){

            verificaLimita(4);

        });

        tecla5.addEventListener("click", function(){

            verificaLimita(5);

        });

        tecla6.addEventListener("click", function(){

            verificaLimita(6);

        });

        tecla7.addEventListener("click", function(){
            verificaLimita(7);
        });

        tecla8.addEventListener("click", function(){
            verificaLimita(8);
        });

        tecla9.addEventListener("click", function(){
            verificaLimita(9);
        });

        punto.addEventListener("click", function(){
            var valores = display.innerHTML;
            if(contador == 0){
                verificaLimita(".");
                contador += 1;
            }
        });


        on.addEventListener("click", function(){
            display.innerHTML = "0";
            contador = 0;
        });

        suma.addEventListener("click", function(){
            seleccionOperacion("suma");
        });

        menos.addEventListener("click", function(){
            seleccionOperacion("resta");
        });

        por.addEventListener("click", function(){
            seleccionOperacion("multiplicacion");
        });

        division.addEventListener("click", function(){
            seleccionOperacion("division");
        });

        signo.addEventListener("click", function(){
            display.innerHTML *= -1;
        });

        igual.addEventListener("click", function(){
            switch (operacion) {
                case "suma":
                    display.innerHTML = Number(variable1) + Number(display.innerHTML);
                    break;
                case "resta":
                    display.innerHTML = Number(variable1) - Number(display.innerHTML);
                    break;
                case "multiplicacion":
                    display.innerHTML = Number(variable1) * Number(display.innerHTML);
                    break;
                case "division":
                    display.innerHTML = Number(variable1) / Number(display.innerHTML);
                    break;
            }


        });
    }
}





function verificaLimita(numero){
    if(display.innerHTML == "0"){
        display.innerHTML = numero;
    }else if(display.innerHTML != "0" && display.innerHTML.length <= 7 ){
        display.innerHTML += numero
    }else{
        var valor = display.innerHTML.slice(0,8);
        display.innerHTML = valor;
    }

}

function seleccionOperacion(operation){
    operacion = operation;
    variable1 = display.innerHTML;
    display.innerHTML = "";
    contador = 0;
}

Calculadora.init();
