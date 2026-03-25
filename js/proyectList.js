//js base de datos
const proyects = //array de objectos con información de los proyectos
    [
        /*{
        id: "00",
        img: "motion",
        imgHover: "motion-hover",
        title: "Motion Design Collection",
        year:"2023-2026",
        date: "202603",
        description: "Incluye mi demoreel y proyectos de motion graphics realizados a lo largo de los años, no dudes en echarle un ojo ;)",
        },*/
        {
        id: "03",
        img: "soria",
        imgHover:"soria-hover",
        title: "Cartel Certamen Cortos de Soria",
        year: "2023",
        date: "202309",
        description: "Propuesta de cartel para el Certamen de Cortos de Soria XVI.",
        },
        {
        id: "01",   
        img: "1984",
        imgHover:"1984-hover",
        title: "Portada 1984",
        year:"2022",
        date: "202210",
        description: "Propuesta de portada para la novela 1984 de George Orwell.",
        },
        {
        id: "04",
        img: "disco",
        imgHover: "disco-hover",
        title: "In Rainbows: Special edition",
        year:"2024",
        date: "202406",
        description: "Propuesta para una edición especial del album In Rainbows.",
        },
        {
        id: "05",
        img: "romantica",
        imgHover:"romantica-hover",
        title: "Romántica ilustración",
        year:"2022",
        date: "202211",
        description: "Propuesta de ilustración de prensa para el artículo Romántica de Marta Sanz.",
        },
        {
        id: "06",
        img: "carteleria",
        imgHover: "carteleria-hover",
        title: "Diseño gráfico y cartelería",
        year: "2024",
        date: "202409",
        description: "",
        }
    ]

//test array + objects
let card = "";

    for(let i = 0; i<proyects.length; i++){
        card = proyects[i].id + ", " + proyects[i].title + ", " + proyects[i].year + ", " + proyects[i].description;
        //card = proyects[i].id

        console.log(card)
    }