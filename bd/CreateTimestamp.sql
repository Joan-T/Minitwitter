	--CREATE TABLE mensajes (
    	--nombre text not null,
    	--instante TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	--texto text not null,	
	--PRIMARY KEY(nombre, instante),
	--FOREIGN KEY(nombre) REFERENCES usuario(nombre)
	--);

	

	
	--INSERT INTO mensajes(nombre,texto) VALUES('Jtomas','Hola twitter, soc Joan');
	--INSERT INTO mensajes(nombre,texto) VALUES('Ssoria','Hola twitter, soc Sonia');
	--SELECT * FROM mensajes;
	
	
	SELECT nombre, texto, instante FROM mensajes where nombre = 'Jtomas' limit 10;