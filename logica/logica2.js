// importar la bilbioteca para acceder a bases de datos SQLite
// (antes:  npm install sqlite3)
// documentación: https://github.com/mapbox/node-sqlite3/wiki/API
var sqlite3 = require("sqlite3");

//  conectar con la base de datos
var laBaseDeDatos = new sqlite3.Database("../bd/twitterdb.db");

//
exports.pruebaDeSQL = function (user) {
	console.log ( " soy la funcion de prueba SQL" )
	console.log ( user.nombre )

	var consulta = select * from usuario;
	laBaseDeDatos.get ("select * from Usuario;") 
	console.log ( consulta)
}


