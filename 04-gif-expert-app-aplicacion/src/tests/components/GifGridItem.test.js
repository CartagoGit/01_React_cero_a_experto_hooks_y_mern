import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en el componente <GifGridItem />>", () => {
	let wrapper;
	let data = { id: 0, title: "", url: "" };
	const fillWrapper = (
		id = 0,
		title = "un titulo",
		url = "https://unaurl.com"
	) => {
		data = { id, title, url };
		wrapper = shallow(<GifGridItem id={id} title={title} url={url} />);
	};

	beforeEach(() => fillWrapper());

	test("Debe mostrar el componente correctamente ", () => {
		fillWrapper(123, "jei", "http");
		// console.log(1, wrapper.html());
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de tener un parrafo con el texto del titulo", () => {
		// console.log(2, wrapper.html());
		const p = wrapper.find("p").text().trim();
		expect(p).toBe(data.title);
	});

	test('Debe tener la imagen = al url y alt de los props y el id en el contenedor', () => {
		const img = wrapper.find('img').at(0);
		const card = wrapper.find('.card').at(0);
		// console.log(img.props());
		expect(img.prop('src')).toBe(data.url);
		expect(img.prop('alt')).toBe(data.title);
		// console.log(card.props().id);
		expect(card.props().id).toBe(data.id);
	});

	test('Debe tener animate__tada', () => {
		const clase = wrapper.find('div').at(0);
		const search = 'animate__tada';
		const className= clase.props().className;
		expect(className.includes(search)).toBe(true);
		expect(className).toContain(search);
	});
	
	
});
