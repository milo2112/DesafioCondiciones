function operation() {

    // capturamos dato ingresado a través del DOM
    var val1 = document.querySelector('#qty-sticker1');
    var val2 = document.querySelector('#qty-sticker2');
    var val3 = document.querySelector('#qty-sticker3');

    // Validamos que el usuario no ingrese numeros negativos
    if ( ((val1.value) < 0) || ((val2.value) < 0) || ((val3.value) < 0) ) {
        alert("No puede haber numeros negativos");
        return false;
      }
    
    // Realizamos suma  
    var total = (Number(val1.value) + Number(val2.value) + Number(val3.value));
    
    // Realizamos bifurcación que despliega mensaje según número de stickers
    if (total < 10) {
        message.innerHTML = "Llevas " + total + " stickers!";
    } else {
        message.innerHTML = "Llevas demasiados stickers...";
    }
}