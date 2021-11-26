import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGridItem } from "../../src/components/GifGridItem";

describe("Pruebas en el componente GifGridItem", () => {
	let wrapper;
	test("Debe mostrar el componente correctamente ", () => {
		wrapper = shallow(
			<GifGridItem id={123} title={titulo} url={"https://algo"} />
		);
        expect(wrapper).toMatchSnapshot();
	});
});
