document.addEventListener("DOMContentLoaded",init);

function init(){
    printNav();
    printMenu();
}

function printNav(){
    //Detecta en que pagina se encuentra y asigna a que paginas dirige la navegación
    var thisName = document.getElementById("name").innerText;
    var thisId = thisName.substring(0,2);
    console.log(thisName);
    console.log(thisId);

    var prev; 
    var next;

    for(i=0; i<proyects.length; i++){
        if (thisId == proyects[i].id ){
            if (thisId == "00"){
                prev = proyects[(proyects.length)-1].id;
                next = proyects[i+1].id;
            }
            else if (thisId == "99"){
                prev = proyects[i-1].id;
                next = proyects[0].id;            
            }
            else{
                prev = proyects[i-1].id;
                next = proyects[i+1].id;
            }
        }
    }
    
    //comrpueba links
    console.log(prev);
    console.log(next);

    //print la navegacion
    let html = "";
    let nav = document.getElementById("nav");

    html = `<a href="` + prev + `.html"> <img src="img/icons/flecha-izq.svg"> <p>PREV</p> </a>
            <a href="` + next + `.html"> <p>NEXT</p> <img src="img/icons/flecha-der.svg"> </a>`
    nav.innerHTML = html;

}

function printMenu(){
    let html = "";
    let menu = document.getElementById("menu")

    for(i=0; i<proyects.length; i++){
        html += `<a href="` + proyects[i].id + `.html">` + proyects[i].id + `-` + proyects[i].title + `</a>`
    }

    html+= `<a href="about.html"> about </a>`
    console.log(html)
    menu.innerHTML = html;
}