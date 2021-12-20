CREATE DATABASE IF NOT EXISTS Proyecto;

CREATE TABLE IF NOT EXISTS Proyecto.peliculas (

    id VARCHAR(15) PRIMARY KEY,
    titulo VARCHAR(30),
    imagen VARCHAR(255),
    ano VARCHAR(4)
);
CREATE TABLE IF NOT EXISTS Proyecto.usuarios (
    correo VARCHAR(50) PRIMARY KEY,
    contrasena VARCHAR(30)
);
CREATE TABLE IF NOT EXISTS Proyecto.valoracion (
    id VARCHAR(15),
    usuario VARCHAR(50),
    valoracion INT(11),
    favorito INT,
    comentario VARCHAR(10000),
    PRIMARY KEY(id, usuario),
    FOREIGN KEY(id) REFERENCES peliculas(id),
    FOREIGN KEY(usuario) REFERENCES usuarios(correo)
);
CREATE TABLE IF NOT EXISTS Proyecto.partida (
    id_partida INT AUTO_INCREMENT PRIMARY KEY,
    nom_partida VARCHAR(30),
    usuario VARCHAR(50),
    respuesta VARCHAR(300)
);