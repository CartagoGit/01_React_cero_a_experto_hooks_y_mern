import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas en useForm", () => {
	const initialForm = {
		name: "Mario",
		email: "email@gmail.com"
	};
	let result;
	let formValues;
	let handleInputChange;
	let reset;

	const fillData = (name = initialForm.name, email = initialForm.email) => {
		({ result } = renderHook(() => useForm({ name, email })));
		[formValues, handleInputChange, reset] = result.current;
		// console.log(result, result.current);
	};

	beforeEach(() => fillData());

	test("Deberia regresar un formulario por defecto", () => {
		expect(formValues).toEqual(initialForm);
		expect(typeof handleInputChange).toBe("function");
		expect(typeof reset).toBe("function");
	});

	test("Deberia cambiar el valor del formulario (cambiar name)", () => {
		act(() => {
			handleInputChange({ target: { name: "name", value: "Olga" } });
		});
		const [formValues] = result.current;
		expect(formValues.name).toEqual("Olga");
		expect(formValues).toEqual({ ...initialForm, name: "Olga" });
	});

	test("Deberia restablecer el formulario con reset", () => {
		act(() => {
			handleInputChange({ target: { name: "name", value: "Olga" } });
		});
		let [formValues] = result.current;
		expect(formValues.name).toEqual("Olga");
		expect(formValues).toEqual({ ...initialForm, name: "Olga" });
		act(() => {
			reset();
		});
		[formValues] = result.current;
		expect(formValues).toEqual(initialForm);
	});
});
