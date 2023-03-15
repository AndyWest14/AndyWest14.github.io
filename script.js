//Sección para manejar la aparición del menu lateral
var visible = "no";
var bar = document.getElementById("nav-bar");
bar.onclick = function () {
    if (visible == "no") {
        document.getElementById("nav").className = "active";
        visible = "si";
    } else {
        document.getElementById("nav").className = "";
        visible = "no";
    }
}


//Detecto el scrolling para cambiar el color de fondo del header cuando se alcanza los 50px
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.background = "white";
        /*document.getElementById("header").style.boxShadow = "2px 2px 10px #ccc";*/
    } else {
        document.getElementById("header").style.background = "transparent";
        document.getElementById("header").style.boxShadow = "none";
    }
}


//Función que coloca la linea debajo de la opcion seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  span');
    opciones[0].className = "linea";
    opciones[1].className = "linea";
    opciones[2].className = "linea";
    opciones[3].className = "linea";
    opciones[4].className = "linea";
    opciones[link].className = "linea seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";

    //vuelvo la variable visible que maneja el nav-bar a  "no"
    visible = "no";
}


//Sección Porfolio
let elementos = document.getElementById("galeria");
let imgs = elementos.getElementsByTagName("img");
let proyectos = elementos.getElementsByClassName("proyecto");
//Función que visualiza los proyectos en base a la categoría elegida
function cambiarCategoria(categoria, num) {
    var cat = document.querySelectorAll('#categorias a');
    cat[0].className = "";
    cat[1].className = "";
    cat[2].className = "";
    cat[num].className = "activada";

    //quitamos todas la clase de las animaciones
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].className = "";
    }
    //Este código es necesario para que se ejeuta la animación en los proyectos cada vez que se recargen
    window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
            if (categoria != "all") {
                for (var i = 0; i < proyectos.length; i++) {
                    if (proyectos[i].className != "proyecto " + categoria) {
                        proyectos[i].style.display = "none";
                    } else {
                        proyectos[i].style.display = "inline";
                        imgs[i].className = "animacion";
                    }
                }
            } else {
                for (var i = 0; i < proyectos.length; i++) {
                    proyectos[i].style.display = "inline";

                    imgs[i].className = "animacion";

                }
            }
        });
    });
}

// function scrollToTop() {
//     window.scrollTo(0, 0);
// }

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}