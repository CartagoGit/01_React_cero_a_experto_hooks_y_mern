import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ categories, setCategories }) => {
	const [inputValue, setInputValue] = useState(categories);
	// console.log(categories);
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length > 0) {
			// setCategories((c) => [inputValue, ...c]);
			setCategories((c) => [inputValue]);
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
