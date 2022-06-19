function imgBorder() {
    // Buscamos las propiedades de la imagen en el DOM
    ImgColor = document.querySelector('#image').style.borderColor;
    ImgWidth = document.querySelector('#image').style.borderWidth;
    
    // Evaluamos si imagen posee valores distintos a borde rojo y 2px ancho
    if (ImgColor != "red" && ImgWidth != "2px") {
        image.style.borderColor = "red";
        image.style.borderWidth = "2px";
        image.style.borderStyle = "solid"; 
    } else {
        image.style.borderColor = 'white';
        image.style.borderWidth = "0px";
    }
}