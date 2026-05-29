//esperamos a que cargue el documento
document.addEventListener("DOMContentLoaded",init);

function init(){
    //quita el elemento 00 del array
    proyects.shift();

    sortLinks();
    printLinks();
    showDesc();
}

//función para imprimir los links
function printLinks(){
    //Introduce en el html la lista de proyectos
    let html = "";
    

    
    for(i=0; i<proyects.length; i++){
        html += `<a href="` + proyects[i].id + `.html" id="`+ proyects[i].id + `"> »` + proyects[i].id + `-` + proyects[i].title + `</a>`
        //console.log("title is " + html);
        document.getElementById("proyectList").innerHTML = html;
    }
}

//función para ordenar los links
function sortLinks(){
    let switchOrder = document.getElementById("switch"); //get switch button
    //let icon = document.getElementById("iconSwitch"); //get icon
    let order = "ascending";
    switchOrder.innerHTML = '<img src="img/icons/order-' + order + '.svg" style="width: 24px;"></img>';
    proyects.sort(function(a, b){return a.id - b.id});

    switchOrder.addEventListener("click", function(){
        if (order == "ascending"){
            order = "descending";
        }
        else{
            order = "ascending";
        }

        proyects.reverse();
        printLinks();
        showDesc();

        switchOrder.innerHTML = '<img src="img/icons/order-' + order + '.svg" style="width: 24px;"></img>'; //change button text
    })

    const sortCard = document.getElementById("sort"); //get sort menu button
    const idSort = document.getElementById("ID-sort"); //get ID sort
    const nameSort = document.getElementById("name-sort"); //get name sort
    const yearSort = document.getElementById("year-sort"); // get year sort
    let sortType = "ID";
    sortCard.innerHTML = sortType;

    idSort.addEventListener("click", function(){
        sortType = "ID"

        proyects.sort(function(a, b){return a.id - b.id});
        if (order == "descending"){
            proyects.reverse();
        }

        printLinks();
        showDesc();
        sortCard.innerHTML = sortType; //change button text
        })

    nameSort.addEventListener("click", function(){
        sortType = "nombre";

        proyects.sort(function(a,b){
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        })
        if (order == "descending"){
            proyects.reverse();
        }

        printLinks();
        showDesc();
        sortCard.innerHTML = sortType; //change button text
    })

    yearSort.addEventListener("click", function(){
        sortType = "año";

        proyects.sort(function(a, b){return a.date - b.date});
        if (order == "descending"){
            proyects.reverse();
        }

        printLinks();
        showDesc(); 
        sortCard.innerHTML = sortType; //change button text
        })
}

//función para que cada link muestre su preview
function showDesc(){
    let htmlText = "";
    let htmlImg = "";
    let desc = document.getElementById("previewText");
    let img = document.getElementById("previewImg");

    let functions = [];
    let link = [];
    let link00 = document.getElementById("00");

    /*let link01 = document.getElementById(proyects[0].id);
    
    link01.addEventListener("mouseover", function(){
        htmlText = proyects[0].title + ` Año:` + proyects[0].year + `<br>` + proyects[0].description;
        htmlImg = `<img src="img/preview/` + proyects[0].img + `.webp"></img>`;
        console.log(htmlText);
        desc.innerHTML = htmlText;
        img.innerHTML = htmlImg;
        console.log("You hovered over 01");
    })*/

    for(let i=0; i<proyects.length; i++){
        link.push(document.getElementById(proyects[i].id));

        functions.push(function(){
            console.log("ur mom" + i);

            link[i].addEventListener("mouseenter", function(){
                console.log("Mouse Enter " + i);
                htmlText = `<strong>` + proyects[i].title + `</strong> <br> Año:` + proyects[i].year + `<br>` + proyects[i].description;
                htmlImg = `<img src="img/preview/` + proyects[i].img + `.webp"></img>`;
                //console.log(htmlText)
                desc.innerHTML = htmlText;
                img.innerHTML = htmlImg;
            })

            link[i].addEventListener("mouseleave", function(){
                console.log("Mouse Leave " + i);
                htmlText = "<b>Nombre proyecto: []</b> <br> Año: [] <br> Descripción: []"
                htmlImg = `<img src="img/preview/empty.webp">`;
                desc.innerHTML = htmlText;
                img.innerHTML = htmlImg;
            })
        })
    }

    for(let i=0; proyects[i].length;i++){
        functions[i]();
    }

    functions[0]();
    functions[1]();
    functions[2]();
    functions[3]();
    functions[4]();

    link00.addEventListener("mouseenter", function(){
        htmlText= `<strong>Motion graphics collection</strong> <br> Año: 2022-2026<br>`;
        htmlImg = `<img src="img/preview/motion.webp"></img>`;
        desc.innerHTML = htmlText;
        img.innerHTML = htmlImg;
    });

    link00.addEventListener("mouseleave",function(){
        htmlText = "<b>Nombre proyecto: []</b> <br> Año: [] <br> Descripción: []"
        htmlImg = `<img src="img/preview/empty.webp">`;
        desc.innerHTML = htmlText;
        img.innerHTML = htmlImg;
    });

    console.log(functions);
}