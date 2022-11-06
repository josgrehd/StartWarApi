import React,  { useState } from "react";
import { useParams } from "react-router-dom";

export const Detalles = (props) =>{

    const [datos, setDatos] = useState([])
    const [ver, setVer]= useState("1")
    const param =useParams()

    if(ver == "1"){
        setVer("2")
        let request = {
        method: "GET", 
        redirect:"follow"
    	}
		fetch('https://swapi.dev/api/people/'+param.idDetalles, request)
		.then((resp) => {resp.json()
		.then(result => {setDatos(result)})
		}).catch(error => {
			//manejo de errores
			console.log(error,"este es el error");
		})
	}

    return(
        <>
            <div className="card mb-3 bg-dark text-white">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={"https://starwars-visualguide.com/assets/img/characters/"+(param.idDetalles)+".jpg"} style={{width: '300px'}} className="img-fluid rounded-start" alt="..."/>
                    </div>
                <div className="col-md-8 text-center">
                    <div className="card-body">
                        <h5 className="card-title fs-1">{datos.name}</h5>
                        <p className="card-text">
                        Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
                         simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la
                          literatura del Latin, que data del año 45 antes de Cristo, haciendo que 
                          este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor 
                          de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras 
                          más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir 
                          leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 
                          1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito 
                          en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular 
                        durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
                        viene de una linea en la sección 1.10.32
                        </p>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="h4 pb-2 mb-4 text-danger border-bottom border-danger mt-5">
            </div>


            <div className="container mt-5 text-danger text-center">
                <div className="row g-0">
                    <div className="col-md-2">
                        <strong>Name</strong> 
                        <p>{datos.name}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Birth Year</strong>
                        <p>{datos.birth_year}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Eye Color</strong>
                        <p>{datos.eye_color}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Hair Color</strong>
                        <p>{datos.hair_color}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Skin Color </strong>
                        <p>{datos.skin_color}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Height</strong>
                        <p>{datos.height}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

