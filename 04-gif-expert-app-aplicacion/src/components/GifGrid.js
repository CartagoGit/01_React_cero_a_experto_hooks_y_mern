// import React, { useState, useEffect } from "react";
import React from "react";
import { useFetchGif } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
	// const [count, setCount] = useState(0);
	// const [images, setImages] = useState([]);

	// useEffect(() => {
	// 	getGifs(category).then((imgs) => setImages(imgs));
	// 	//// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [category]);

	const { data: images, loading } = useFetchGif(category);

	return (
		<>
			<h3>{category}</h3>
            {loading && <p>Cargando...</p>}

			

			<div className='cardGrid'>
				{/* { <h3>{count}</h3> } */}
				{/* <button onClick={ () => setCount(count+1)}></button> */}

				{images.map((img) => (
					// <li key={id}> {title}</li>
					// <GifGridItem key={img.id} img ={img}/>
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
