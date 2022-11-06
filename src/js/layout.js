import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "../styles/main.css";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import {Card} from "./views/cards"
import {Detalles} from "./views/detallesCharacters"
import { DetallesPlanets } from "./views/detallesPlanets";

//create your first component
const Layout = () => {
	const [favoritos, setFavoritos]= useState([])

	const addFavoritos = (fav)=>{
		setFavoritos([...favoritos, fav])
	}
	const borrar =(index)=>{
		setFavoritos(favoritos.filter((favoritos,elm)=> elm!==index))
	}
	useEffect(()=>{
		addFavoritos
		borrar
	},[favoritos])

	return (
		<div>
			<BrowserRouter>
				<ScrollToTop>
					<Navbar favoritos={favoritos} borrar={borrar}/>
					<Switch>
						<Route exact path="/">
							<Card addFav={addFavoritos}/>
						</Route>
						<Route exact path="/detalles/:idDetalles">
							<Detalles/>
						</Route>
						<Route exact path="/planet/:idPlanets">
							<DetallesPlanets/>
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
