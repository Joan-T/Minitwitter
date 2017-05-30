
// ejecutar: node test.js

console.log ( "******* haciendo tests *******");

// --------------------------------------------------------------------
// --------------------------------------------------------------------
//  importar
var laLogica = require('./logica.js');
//var laLogica2 = require('./logica2.js');

// --------------------------------------------------------------------
// --------------------------------------------------------------------
//objeto JSON
var usuario1 = { "nombre": "Jtomas", "password": "Joan00" };
var usuario2 = { "nombre": "Ssoria", "password": "Sonia00" };
var usuario3 = { "nombre": "asd\\' or 1=1 ;--", "password": "Joan00" };

var usuario4 = { "nombre": "Jtomas", "texto": "Provant sense contraseña" };
var usuario5 = { "nombre": "Jtomas", "password": "Joan00","texto": "Provant comprovant contraseña" };

var usuario6 = { "nombre": "Jtomas", "cuantos": "2"};

var nombre = "Jtomas";
var cuantos = "2";

//---------------------------------------------------------------------
//console.log ( usuario1.password )
//console.log ( usuario2.password )
//---------------------------------------------------------------------
//la funcion muestra el nombre dek usuario dado
//laLogica.funcionDePrueba(usuario1)
//laLogica.funcionDePrueba(usuario2)



//laLogica2.pruebaDeSQL(usuario1)

laLogica.comprobarPassword(usuario1, function (err, resultados){
	console.log("err comprobar password =" + err);
	console.log("resultados comprobar password =" + resultados);
})

laLogica.guardarTweet(usuario5, function(err, resultado){
	console.log("err guardar tweet = " + err);
	console.log("resultados guardar twitt =" + resultado);
})

laLogica.pedirTweets(nombre, cuantos, function(err, resultado){
	console.log("err pedir tweet = " + err);
	console.log("resultados pedir twitt = " + resultado);
})

