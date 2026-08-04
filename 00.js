const videos = //array de videos
    [
        {
        id: "00.1",
        name: "Funny Bunny Hat // Kevin Kempt PMV",
        year: "2022",
        date: "202205",
        link: "https://player.vimeo.com/video/1194159258?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        },
        {
        id: "00.2",
        name: "She's my collar // Gorillaz",
        year: "2026",
        date: "202603",
        link: "https://player.vimeo.com/video/1196597435?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        },
        {
        id: "00.3",
        name: "Mutant Muscow // Lyric Video",
        year: "2025",
        date: "202504",
        link: "https://player.vimeo.com/video/1194157681?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        }
    ]

document.addEventListener("DOMContentLoaded", init);

function init(){
    sortVideos();
    printVideos();
}

function printVideos(){
    let html = "";

    for(i=0; i<videos.length; i++){
        if(i%2 == 0){
            html+= `<div class="content">
                    <div class="threeFour">
                        <iframe src="` + videos[i].link + `"></iframe>
                    </div>
                    <div class="oneFour">
                        <h1 id="name">`+ videos[i].id + `-` + videos[i].name + `</h1>
                        <p>Año: ` + videos[i].year + `</p>
                    </div>
                </div>`
        }
        else{
            html+= `<div class="content">
                    <div class="oneFour">
                        <h1 id="name">`+ videos[i].id + `-` + videos[i].name + `</h1>
                        <p>Año: ` + videos[i].year + `</p>
                    </div>
                    <div class="threeFour">
                        <iframe src="` + videos[i].link + `"></iframe>
                    </div>
                </div>`
        }
    }

    document.getElementById("showVideos").innerHTML = html;
}

function sortVideos(){
    let switchOrder = document.getElementById("switch"); //get switch button
    //let icon = document.getElementById("iconSwitch"); //get icon
    let order = "ascending";
    switchOrder.innerHTML = '<img src="img/icons/order-' + order + '.svg" style="width: 24px;"></img>';
    videos.sort(function(a, b){return a.id - b.id});

    switchOrder.addEventListener("click", function(){
        if (order == "ascending"){
            order = "descending";
        }
        else{
            order = "ascending";
        }

        videos.reverse(); //da la vuelta al orden de los videos
        printVideos(); //muestra los videos
        switchOrder.innerHTML = '<img src="img/icons/order-' + order + '.svg" style="width: 24px;"></img>'; //change button text
    })

    let sortVideos = document.getElementById("sort"); //get sort menu button
    let idSort = document.getElementById("ID-sort"); //get ID sort
    let nameSort = document.getElementById("name-sort"); //get name sort
    let yearSort = document.getElementById("year-sort"); // get year sort
    let sortType = "ID";
    sortVideos.innerHTML = sortType;

    idSort.addEventListener("click", function(){
        sortType = "ID"

        videos.sort(function(a, b){return a.id - b.id});
        if (order == "descending"){
            videos.reverse();
        }

        printVideos();
        sortVideos.innerHTML = sortType; //change button text
        })

    nameSort.addEventListener("click", function(){
        sortType = "nombre";

        videos.sort(function(a,b){
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        })
        if (order == "descending"){
            videos.reverse();
        }

        printVideos();
        sortVideos.innerHTML = sortType; //change button text
    })

    yearSort.addEventListener("click", function(){
        sortType = "año";

        videos.sort(function(a, b){return a.date - b.date});
        if (order == "descending"){
            videos.reverse();
        }

        printVideos();
        sortVideos.innerHTML = sortType; //change button text
        }) 
}