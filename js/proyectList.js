//js base de datos
const proyects = //array de objectos con información de los proyectos
    [
        /*{
        id: "00",
        img: "motion",
        title: "Motion Design Collection",
        year:"2023-2026",
        date: "202603",
        description: "Incluye mi demoreel y proyectos de motion graphics realizados a lo largo de los años, no dudes en echarle un ojo ;)",
        },*/
        {
        id: "01",   
        img: "1984",
        title: "Portada 1984",
        year:"2022",
        date: "202210",
        description: "Propuesta de portada para la novela 1984 de George Orwell.",
        },
        {
        id: "02",
        img: "aletheia",
        title: "Cartel ALETHEIA: Deadman",
        year: "2026",
        date: "202601",
        description: "Cartel para el corto ALETHEIA: Deadman, de Horokuk Studios.",
        },
        {
        id: "03",
        img: "disco",
        title: "In Rainbows: Special edition",
        year:"2024",
        date: "202406",
        description: "Propuesta para una edición especial del album In Rainbows.",
        },
        {
        id: "04",
        img: "soria",
        title: "Cartel Certamen Cortos de Soria",
        year: "2023",
        date: "202309",
        description: "Propuesta de cartel para el Certamen de Cortos de Soria XVI.",
        },
        /*{
        id: "05",
        img: "romantica",
        title: "Romántica ilustración",
        year:"2022",
        date: "202211",
        description: "Propuesta de ilustración de prensa para el artículo Romántica.",
        },*/
        {
        id: "99",
        img: "carteleria",
        title: "Archivo diseño   ",
        year: "2024",
        date: "202409",
        description: "Colección de diseños que no son tan interesantes pero a mi me molan lo suficiente para ponerlo aquí.",
        },
    ]

const motion = //array de objetos con información de los videos de motion
	  [
		  {
			  id: ".1",
			  name:"Funny Bunny Hat AMV",
			  link:"",
		  },
		  {
			  id: ".2",
			  name:"She's My Collar",
			  link: "",
		  },
		  {
			  id: ".3",
			  name: "Mutant Moscow",
			  link: "",
		  }
	  ]

const design = //array de objetos con información de los trabajos de diseño puntuales
	  [
		  {
			  id:".1",
			  name: "Cartelería: Romance and Solitude",
			  
		  }
	  ]
//test array + objects
let card = "";

    for(let i = 0; i<proyects.length; i++){
        card = proyects[i].id + ", " + proyects[i].title + ", " + proyects[i].year + ", " + proyects[i].description;
        //card = proyects[i].id

        console.log(card)
    }