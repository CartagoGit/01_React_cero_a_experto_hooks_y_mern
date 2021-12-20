import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ categories="", setCategories }) => {
	const [inputValue , setInputValue] = useState(categories);
	// console.log(inputValue);

	const handleInputChange = (e) => {
		console.log("-> handleInputChange");
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		console.log("-> handleSubmit",inputValue);
		e.preventDefault();

		if (inputValue.trim().length > 0) {
			// setCategories((c) => [inputValue, ...c]);
			setCategories(() => inputValue);
			setInputValue("");
		} else setInputValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' value={inputValue} onChange={handleInputChange} />
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired
};
