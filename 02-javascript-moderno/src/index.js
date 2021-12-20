const activo = true;

let mensaje = '';
if (activo) mensaje = 'Activo';
else mensaje = 'Inactivo';

// const mensajeTernario = (activo) ? 'Activo' : 'Inactivo';
// const mensajeTernario = (activo) ? 'Activo' : null;
const mensajeTernario = (!activo) && 'Activo';


console.log(mensaje, mensajeTernario);