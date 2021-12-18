/* 
    Rutas de usuarios /Auth
    host + /api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const { validarCampos } = require("../middlewares/fillValidators");
const {
	crearUsuario,
	loginUsuario,
	revalidarToken
} = require("../controllers/auth");

const {validateJWT} =require('../middlewares/jwtValidator')

router.post(
	"/new",
	[
		check("name", "El nombre es obligatorio").not().isEmpty(),
		check("name", "El nombre tiene que tener más de 3 letras").isLength({
			min: 3
		}),
		check("name", "El nombre tiene que tener menos de 20 letras").isLength({
			max: 20
		}),
		check("email", "El email es obligatorio").isEmail(),
		check("password", "El password debe tener mínimo 6 caracteres").isLength({
			min: 6
		}),
		validarCampos
	],
	crearUsuario
);

router.post(
	"/",
	[
		check("email", "El email es obligatorio").isEmail(),
		check("password", "El password debe tener mínimo 6 caracteres").isLength({
			min: 6
		}),
		validarCampos
	],
	loginUsuario
);
router.get("/renew", validateJWT, revalidarToken);

module.exports = router;
