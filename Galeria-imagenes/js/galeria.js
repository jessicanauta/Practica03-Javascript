//guardas imagenes en el array
var aleatorio = new Array();
aleatorio[0] = "images/imagen1.jpg";
aleatorio[1] = "images/imagen2.jpg";
aleatorio[2] = "images/imagen3.jpg";
aleatorio[3] = "images/imagen4.jpg";
aleatorio[4] = "images/imagen5.jpg";
aleatorio[5] = "images/imagen6.jpg";
aleatorio[6] = "images/imagen7.jpg";
aleatorio[7] = "images/imagen8.jpg";
aleatorio[8] = "images/imagen9.jpg";
aleatorio[9] = "images/imagen10.jpg";

function rand(n) {
    // creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
    return (Math.floor(Math.random() * n + 1));
}

function iniciar() {
    document.getElementById("ia").src = aleatorio[rand(10) - 1];
}

var n = 1;
function siguiente() {
    n++;
    if (n < 5){
        n = 1;
    var foto = document.getElementById("ia");
    foto.src = n + ".jpg";
        }else {
            window.document.getElementById("siguiente").disabled = false;
            window.document.getElementById("anterior").disabled = false;
        }
    

}
function anterior() {
    n--;
    if (n < 1)
        n = 10-5;
    var foto = document.getElementById("ia");
    foto.src = n + ".jpg";
    verificar()
}

function verificar() {
    if (n == 4) {
        window.document.getElementById("siguiente").disabled = true;
        window.document.getElementById("anterior").disabled = false;
    }
    else if (n == 0) {
        window.document.getElementById("anterior").disabled = true;
        window.document.getElementById("siguiente").disabled = false;
    } else {
        window.document.getElementById("siguiente").disabled = false;
        window.document.getElementById("anterior").disabled = false;
    }
}
