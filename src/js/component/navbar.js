import React from "react";
import { Link } from "react-router-dom";
export const Navbar = (props) => {

	console.log("parametro ",props.favoritos)
	return (
		<>
		<nav className="navbar navbar-dark bg-dark me-3 ms-3">
			<Link to="/">
				<img src="https://www.pngplay.com/wp-content/uploads/2/Star-Wars-Logo-PNG-Background.png" width="100px" height="100px"/>
			</Link>
			<div className="btn-group dropstart wrapper">
				<button type="button" className="btn btn-info dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="true">
					Favoritos <span className="badge text-bg-secondary">{props.favoritos.length}</span>
				</button>
				<ul className="dropdown-menu" style={{ height: 'auto', width:'220px'}}>
				{props.favoritos.map((element,index)=>{
				return(
					<>
					<div className="text-wrap row mt-1">
					<div className="col-8"><li>{element}</li></div>
					<div className="col-4"><button type="button" onClick={()=>props.borrar(index)} className="btn btn-outline-danger btn-sm"> 🗑️ </button></div>
					</div>
					</>	
				)})
				}
				</ul>
			</div>
		</nav>
		</>
	);
};
