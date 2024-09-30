const { nombre , apellido, edad } = require('./datos');
const obtenerDatos = require('./obtenerdatos');

console.log(obtenerDatos('nombre', 'apellido', 'edad'));
