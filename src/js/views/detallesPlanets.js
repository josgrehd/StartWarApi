import React,  { useState } from "react";
import { useParams } from "react-router-dom";

export const DetallesPlanets = (props) =>{

    const [datos, setDatos] = useState([])
    const [ver, setVer]= useState("1")
    const param =useParams()

    if(ver == "1"){
        setVer("2")
        let request = {
        method: "GET", 
        redirect:"follow"
    	}
		fetch('https://swapi.dev/api/planets/'+param.idPlanets, request)
		.then((resp) => {resp.json()
		.then(result => {setDatos(result)})
		}).catch(error => {
			//manejo de errores
			console.log(error,"este es el error");
		})
	}

    return(
        <>
            <div className="card mb-3 bg-dark text-white" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={"https://starwars-visualguide.com/assets/img/planets/"+(param.idPlanets)+".jpg"} style={{width: '300px'}} className="img-fluid rounded-start" alt="NO HAY IMAGEN QUE MOSTRAR"/>
                    </div>
                <div className="col-md-8 text-center">
                    <div className="card-body">
                        <h5 className="card-title fs-1">{datos.name}</h5>
                        <p className="card-text">
                        Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, 
                        pero la mayoría sufrió alteraciones en alguna manera, ya sea porque 
                        se le agregó humor, o palabras aleatorias que no parecen ni un poco 
                        creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar
                         seguro de que no hay nada avergonzante escondido en el medio del texto. 
                         Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden 
                         a repetir trozos predefinidos cuando sea necesario, haciendo a este el único 
                         generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200
                          palabras provenientes del latín, combinadas con estructuras muy útiles de sentencias,
                           para generar texto de Lorem Ipsum que parezca razonable.
                         Este Lorem Ipsum generado siempre estará libre de repeticiones, 
                         humor agregado o palabras no características del lenguaje, etc.
                        </p>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="mt-5 pb-5 mb-5 text-danger border-bottom border-danger mt-5">
            </div>


            <div className="container mt-5 text-danger text-center">
                <div className="row g-0">
                    <div className="col-md-2">
                        <strong>Name</strong> 
                        <p>{datos.name}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Climate</strong>
                        <p>{datos.climate}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Population</strong>
                        <p>{datos.population}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Orbital Period</strong>
                        <p>{datos.orbital_period}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Rotation Period</strong>
                        <p>{datos.rotation_period}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Diameter</strong>
                        <p>{datos.diameter}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

