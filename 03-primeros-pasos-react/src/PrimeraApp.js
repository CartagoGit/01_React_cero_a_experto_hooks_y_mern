// import React, { Fragment } from "react";
import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo: saludoEntrante, subtitulo }) => {
	const saludo = "Hola Mundo";
	const persona = {
		nombre: "Mario",
		edad: 33
	};

	return (
		// <Fragment> se puede usar en vez de <></>
		<>
			<h1> {saludo} </h1>
			<p>Mi primera aplicación</p>
			<pre>{JSON.stringify(persona, null, 3)}</pre>
			<p>{saludoEntrante}</p>
			<p>{subtitulo}</p>
		</>
	);
};

PrimeraApp.propTypes = {
	saludo: PropTypes.string.isRequired
};
PrimeraApp.defaultProps = {
	subtitulo: "Soy un subtitulo"
};

export default PrimeraApp;
