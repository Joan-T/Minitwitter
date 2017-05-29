SELECT password FROM usuario WHERE nombre = 'Jtomas';

SELECT * FROM mensajes;

SELECT mensajes.texto
	FROM usuario, mensajes
	WHERE usuario.nombre = 'Jtomas'
	AND usuario.nombre = mensajes.nombre;
	
SELECT mensajes.texto
	FROM usuario, mensajes
	WHERE usuario.nombre = 'Ssoria'
	AND usuario.nombre = mensajes.nombre;
	

