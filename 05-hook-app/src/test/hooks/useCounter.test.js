import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Pruebas en la funcion useCounter()", () => {
	let result;
	const funcRep = () => {
		return result.current;
	};
	const fillData = (num = undefined) => {
		({ result } = renderHook(() => useCounter(num)));
	};

	beforeEach(() => fillData());

	test("Deberia retornar los valores por defecto", () => {
		expect(result.current.counter).toBe(0);
		expect(typeof result.current.increment).toBe("function");
		expect(typeof result.current.decrement).toBe("function");
		expect(typeof result.current.reset).toBe("function");
	});

	test("Deberia tener el counter en 100 ", () => {
		const num = 100;
		fillData(num);
		expect(result.current.counter).toBe(num);
	});
	test("Deberia incrementar en num", () => {
		const num = 100;
		const incremented = 15;
		fillData(num);
		const { increment } = result.current;

		act(() => {
			increment(incremented);
		});
		expect(result.current.counter).toBe(num + incremented);
	});

	test("Deberia decrementar en num", () => {
		const num = 100;
		const decremented = 15;
		fillData(num);
		const { decrement } = result.current;

		act(() => {
			decrement(decremented);
		});
		expect(result.current.counter).toBe(num - decremented);
	});
	test("Debe establecer el valor inicial", () => {
		const num = 100;
		const decremented = 10;
		fillData(num);

		act(() => {
			const { reset, decrement } = funcRep();
			decrement(decremented);
			reset();
			decrement(decremented);
			reset();
		});
		// console.log(result.current.counter);
		expect(result.current.counter).toBe(num);
	});
});
