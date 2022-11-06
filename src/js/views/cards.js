import React,  { useState } from "react";
import { Link } from "react-router-dom";

 export const Card = ({addFav})=>{
    const [datos, setDatos] = useState([])
	const [planets,setPlanets]=useState([])
    const [ver, setVer]= useState("1")

    if(ver == "1"){
        setVer("2")
        let request = {
        method: "GET", 
        redirect:"follow"
    	}
		fetch('https://swapi.dev/api/people/', request)
		.then((resp) => {resp.json()
		.then(result => {setDatos(result)})
		}).catch(error => {
			//manejo de errores
			console.log(error,"este es el error");
		})
	}
	if(ver == "1"){
        setVer("2")
        let request = {
        method: "GET", 
        redirect:"follow"
    	}
		fetch('https://swapi.dev/api/planets/', request)
		.then((resp) => {resp.json()
		.then(result => {setPlanets(result)})
		}).catch(error => {
			//manejo de errores
			console.log(error,"este es el error");
		})
	}

	return(
		<>
		<div className="relative flex items-center">
			<div className=" overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
				{datos?.results?.map((element,key)=>{
				return(
					<>
					<div className='inline-block m-5'>
						<img  src={"https://starwars-visualguide.com/assets/img/characters/"+(key+1)+".jpg"} style={{width: '250px'}}alt="/" />
						<div  className="card-body">
							<h3  className="card-title fw-bold">{element?.name}</h3>
							<p  className="card-text">Gender : {element?.gender}</p>
							<p  className="card-text">Hair Color : {element?.hair_color}</p>
							<p  className="card-text">Eye Color : {element?.eye_color}</p>
						</div>
						<div>
						<Link to={"/detalles/"+(key+1)}>
						<button type="button" className="btn btn-outline-primary col-6" align="left" style={{ height: '60px'}}>Learn More!</button>
						</Link>	
							<button type="button" onClick={()=>addFav(element.name)} className="btn btn-outline-warning col-6" align="right" style={{ height: '60px'}}>❤️</button>
						</div>
					</div>
					</>	
				)})
				}
			</div>
		</div>

		<div className="relative flex items-center">
			<div id="slider" className=" overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
				{planets?.results?.map((element,key)=>{
				return(
					<>
					<div className='inline-block m-5' style={{width: '250px'}} >
						<img  src={"https://starwars-visualguide.com/assets/img/planets/"+(key+1)+".jpg"} alt="SIN IMAGEN" />
						<div  className="card-body text-wrap" style={{height:'150px'}} >
							<h3  className="card-title fw-bold">{element?.name}</h3>
							<p  className="card-text">Pupulation : {element?.population}</p>
							<p  className="card-text ">Terrain : {element?.terrain}</p>
						</div>
						<div>
							<Link to={"/planet/"+(key+1)}>
							<button type="button" className="btn btn-outline-primary col-6" align="left" style={{ height: '60px'}}>Learn More!</button>
							</Link>
							<button type="button" onClick={()=>addFav(element.name)} className="btn btn-outline-warning col-6" align="right" style={{ height: '60px'}}>❤️</button>
						</div>
					</div>
					</>	
				)})
				}
			</div>
		</div>
		
		</>
		
		);

};

