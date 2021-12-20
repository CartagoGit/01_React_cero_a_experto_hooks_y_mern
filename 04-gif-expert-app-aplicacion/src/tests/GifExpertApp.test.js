import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import {GifExpertApp} from '../GifExpertApp';

describe("Pruebas en GifExpertApp.js", () => {
	let wrapper;

	const fillWrapper = () => {
		wrapper = shallow(<GifExpertApp />);
	};
	beforeEach(() => fillWrapper());

	test("Deberia hacer match con snapshoot", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
