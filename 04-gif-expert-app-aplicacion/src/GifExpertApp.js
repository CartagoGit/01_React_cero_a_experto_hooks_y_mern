import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({defaultCategories = 'Busca un gif' }) => {
	// const categories = ["One Punch", "Samurai X", "Dragon ball"];
	const [category, setCategories] = useState(defaultCategories);

	// const handleAdd = () =>{
	//     const element = 'Jei';
	//     // setCategories([...categories,element]); //Una solucion
	//     setCategories( c => [...c, element]);
	// };

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory categories={category} setCategories={setCategories} />
			<hr />
			{/* <button onClick={handleAdd}>Agregar</button> */}
			<ol>
				{/* {categories.map((category) => (
					<GifGrid key={category} category={category} />
				))} */}
				<GifGrid key={category} category={category} />
			</ol>
		</>
	);
};
