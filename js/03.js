//esperamos a que cargue el documento
document.addEventListener("DOMContentLoaded",init);

function init(){
    bookletCarousel();
}

bookletCarousel = function(){
    const IMAGENES1 = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15"
    ]

    let html1= "";
    let img1 = document.getElementById("imagenBooklet1");

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual1 = 0;
    let intervalo;

    function renderizarImagen() {
        html1= IMAGENES1[posicionActual1];
        console.log(IMAGENES1[posicionActual1])
        console.log(html1);
        img1.innerHTML = `<img src= "img/disco/booklet/` + html1 + `.webp">`;

    }

    renderizarImagen();

    function pasarFoto() {
        if(posicionActual1 >= IMAGENES1.length - 1) {
            posicionActual1 = 0;
        } else {
            posicionActual1++;
        }

        renderizarImagen();
    }

    intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);

}