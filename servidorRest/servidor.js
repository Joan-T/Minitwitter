
// ------------------------------------------------------
// servidor.js 
// ver: http://expressjs.com/4x/api.html
// ------------------------------------------------------

// .......................................................
// requires
// .......................................................

var fs = require('fs');
var express = require('express'); 
//instalar el npm!!!!
var laLogica = require('../logica/logica.js'); //Importar la logica

var servidorExpress = express();//pagina web (capturar peticiones HTTP)

// ------------------------------------------------------
// ------------------------------------------------------
// servidorExpress.use (bodyParser());
// Esto es para copiar lo que haya en el cuerpo
// de la peticion HTTP al cambo "body"  de "req"
// y que se pueda consultar luego.
//
servidorExpress.use (function(req, res, next) { //NO TOCAR NADA!
//Para que se pueda consultar la carga de la petición HTTP
    var data='';
    req.setEncoding('utf8');
    req.on('data', function(chunk) { 
       data += chunk;
    }); 
    req.on('end', function() {
        req.body = data; //consultar el cuerpo de la petición

        next(); // la petición continúa
    });
}); //NO TOCAR NADA!

// ------------------------------------------------------
// reglas de peticiones REST
// ------------------------------------------------------

// .......................................................
// buscarUsuario()
// ej. GET /usuario/12341234
// devuelve en el cuerpo los datos del usuario en formato JSON
// .......................................................

// Que hacer cuando llega el GET (regla)
servidorExpress.get('/tweet/:nombre/:cuantos', function(request, response){
//'/usuario/:elTelefono' es el nombre del recurso al que el cliente quiere acceder
//parte fija /usuario/, parte variable :elTelefono => GET /usuario/686749325

	// se ejecuta cuanto llega una petición GET de cliente http
	console.log (" * GET /tweet/:nombre/:cuantos  -> " + request.url );

	var nombre = request.params.nombre; //para saber la parte variable de la petición (RECETA)
	var cuantos = request.params.cuantos;
	
	
	//se llama a la función de la logica que queramos activar (si tenemos GET USUARIO llamamos a buscar usuario, por ejemplo)
	laLogica.pedirTweets(nombre, cuantos, function (err, resultado) { 
		console.log("dins la funcio pedirTwitt");
		if (err) {
			//No se ha hecho la busqueda
			console.log("409");
			response.writeHead(409, {'Content-Type': 'text/plain'}); //responder, añadir lineas a la cabecera de la respuesta (409 = conflict)
			//https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP
			response.end();
			return;
		}

		if (resultado == undefined) {
			//La busqueda se ha hecho pero no ha encontrado el telefono
			console.log("404");
			response.writeHead(404, {'Content-Type': 'text/plain'}); //404 = NOT FOUND
			response.end();
			return;
		}
		
		response.writeHead(200, {'Content-Type': 'text/plain'}); //200 = OK, si que se encuentra el telefono
		console.log("200");
		response.write ( JSON.stringify (resultado) + "\n"); //write = escribir en la zona de carga
		response.end();
		
	});

});

//POST
servidorExpress.post('/tweet/:nombre/:password', function(request, response){
//'/usuario/:elTelefono' es el nombre del recurso al que el cliente quiere acceder
//parte fija /usuario/, parte variable :elTelefono => GET /usuario/686749325

	// se ejecuta cuanto llega una petición GET de cliente http
	console.log (" * POST /tweet/:nombre/:password " + request.url );

	var nombre = request.params.nombre; //para saber la parte variable de la petición (RECETA)
	var password = request.params.password;
	var tweet = request.body;
	//convertir a json
	console.log("nombre = " + nombre, "password = " + password, "texto = " + tweet)
	var postear = {"nombre":nombre, "password":password, "texto":tweet};
	
	
	//se llama a la función de la logica que queramos activar (si tenemos GET USUARIO llamamos a buscar usuario, por ejemplo)
	laLogica.guardarTweet(postear, function (err, resultado) { 

		if (err) {
			//No se ha hecho la busqueda
			response.writeHead(409, {'Content-Type': 'text/plain'}); //responder, añadir lineas a la cabecera de la respuesta (409 = conflict)
			//https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP
			response.end();
			return;
		}

		if (resultado == undefined) {
			//La busqueda se ha hecho pero no ha encontrado el telefono
			response.writeHead(404, {'Content-Type': 'text/plain'}); //404 = NOT FOUND
			response.end();
			return;
		}
		
		response.writeHead(200, {'Content-Type': 'text/plain'}); //200 = OK, si que se encuentra el telefono
		response.write ( JSON.stringify (resultado) + "\n"); //write = escribir en la zona de carga
		response.end();
		
	});

});
// .......................................................
// "main()"
// ....................................................... NO TOCAR NADA!

servidorExpress.listen (8080); //puerto donde se quiere arrancar el servidor

console.log ("todo preparado, espero en 8080 (http)");

