import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
	// const categories = ["One Punch", "Samurai X", "Dragon ball"];
	const [categories, setCategories] = useState(['Busca un gif']);

	// const handleAdd = () =>{
	//     const element = 'Jei';
	//     // setCategories([...categories,element]); //Una solucion
	//     setCategories( c => [...c, element]);
	// };

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory categories={categories} setCategories={setCategories} />
			<hr />
			{/* <button onClick={handleAdd}>Agregar</button> */}
			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};
