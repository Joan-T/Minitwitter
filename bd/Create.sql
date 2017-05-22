	CREATE TABLE usuario (
    	nombre text not null,
    	password text not null,
	PRIMARY KEY(nombre));

	CREATE TABLE mensajes (
    	nombre text not null,
    	instante text not null,
	texto text not null,
	PRIMARY KEY(nombre, instante),
	FOREIGN KEY(nombre) REFERENCES usuario(nombre));

	insert into usuario values('Jtomas', 'Joan00');
	insert into usuario values('Ssoria', 'Sonia00');

	insert into mensajes values('Jtomas', '22/05/2017_19:02', 'Hola twitter, soc Joan');
	insert into mensajes values('Ssoria', '22/05/2017_19:03', 'Hola twitter, soc Sonia');
	