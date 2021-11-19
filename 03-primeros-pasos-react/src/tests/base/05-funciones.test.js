import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Prueba 05-funciones.js", () => {
	test("getUser debe retornas un objeto", () => {
		const userTest = {
			uid: "ABC123",
			username: "El_Papi1502",
		};

        const user = getUser();
        expect(user).toStrictEqual(userTest);
	});
    test("getUsuaruioActivo debe retornar un objeto", () => {
		const userTest = "Juan";

        const user = getUsuarioActivo(userTest);
        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: userTest
        });
	});
});
