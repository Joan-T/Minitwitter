// importar la bilbioteca para acceder a bases de datos SQLite
// (antes:  npm install sqlite3)
// documentación: https://github.com/mapbox/node-sqlite3/wiki/API

var sqlite3 = require('sqlite3');

//  conectar con la base de datos
var laBaseDeDatos = new sqlite3.Database('../bd/twitterdb.db');
//var laBaseDeDatos = window.sqlitePlugin.openDatabase({name: "twitterdb.db"});




// funcion comprobarPassword
exports.comprobarPassword = function (usuario, callback){
	var consulta = "select password from usuario where nombre = '"+ usuario.nombre +"' limit 1";
	//consulta guarda la query no el resultado de password, consulta.password no existe
	//resultados[0].password seria la forma correcta siempre que resultados tenga un elemento
	
	//console.log("consulta: "+consulta);
	//var consulta = "select" + usuario.nombre
	laBaseDeDatos.all(consulta, function(err, resultados){
		console.log(resultados);
		if(err){
			callback (new Error ("Query erronea" + err), null); 
		}
		if(resultados.length>0&&resultados[0].password == usuario.password){
			callback(null, true);
		}else{
			callback(null, false);
		}
	})
	
}


//DANI 656875539

// funcion guardarTwitt
exports.guardarTweet = function (usuario, callback){
	var tweet = "INSERT INTO mensajes(nombre,texto) VALUES('"+ usuario.nombre +"','"+ usuario.texto +"')";
	exports.comprobarPassword(usuario, function(err, resultados){
		if(err){
			callback (new Error ("Query erronea" + err), null);
			callback (null, false);//no hay error y el resultado es falso
			return;
		}
		if(!resultados){
			callback (new Error("Usuario o contraseña erroneo"),null);
			return;
		}else{
			laBaseDeDatos.run(tweet, function(err, resultados){
		if(err){
			callback (new Error ("Query erronea" + err), null);
				return;
		}
		callback(null,true);//no hay error y se a guardado el tweet
	})
			
		}
	})	
}

//funcion pedirTwitts
exports.pedirTweets = function (nombre, cuantos, callback){
	var consulta = "SELECT nombre, texto, instante FROM mensajes where nombre = '"+ nombre +"'  limit "+ cuantos +"";
	laBaseDeDatos.all(consulta, function(err, resultados){
		console.log(resultados);
		if(err){
			callback (new Error ("Query erronea" + err), null); 
			return;
		}
			callback (null, resultados);
		})
}
