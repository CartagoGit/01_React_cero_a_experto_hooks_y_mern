import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs Fetch", () => {
	test("Debe de traer 10 elementos", async () => {
		const gifs = await getGifs("Algo");
		expect(gifs.length).toBe(10);
	});

    test("Debe de traer 10 elementos", async () => {
		const gifs = await getGifs('');
		expect(gifs.length).toBe(0);
	});
});
