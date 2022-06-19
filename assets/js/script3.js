function operation() {

    console.log("Ingresando a la función...");
    // capturamos dato ingresado a través del DOM
    var val1 = document.querySelector('#number1');
    var val2 = document.querySelector('#number2');
    var val3 = document.querySelector('#number3');
    
    // Realizamos concatenación
    var passw = val1.value + val2.value + val3.value;
    console.log("password : " + passw);

    // Realizamos bifurcación que despliega mensaje según password 
    if (passw == "911") {
        message.innerHTML = "Password 1 es " + passw + " y es correcta!";
    } else if (passw == "714") {
        message.innerHTML = "Password 2 es " + passw + " y es correcta!";
    } else {
        message.innerHTML = "Password " + passw + " es Incorrecta!";
    }
}