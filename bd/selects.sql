SELECT mensajes.texto
	FROM usuario, mensajes
	WHERE usuario.nombre = 'Jtomas'
	AND usuario.nombre = mensajes.nombre;
	