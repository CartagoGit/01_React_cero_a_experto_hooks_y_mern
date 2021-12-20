import React from "react";
import { HeroesList } from "../heroes/HeroesList";

export const MarvelScreen = () => {
	return (
		<div>
			<HeroesList publisher={"Marvel Comics"} />
		</div>
	);
};
