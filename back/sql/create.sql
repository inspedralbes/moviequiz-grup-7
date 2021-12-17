CREATE DATABASE IF NOT EXISTS Proyecto;

CREATE TABLE IF NOT EXISTS Proyecto.peliculas (

    id VARCHAR(15) PRIMARY KEY,
    titulo VARCHAR(30),
    imagen VARCHAR(255),
    año VARCHAR(4)
);
CREATE TABLE IF NOT EXISTS Proyecto.usuarios (
    correo VARCHAR(50) PRIMARY KEY,
    contrasena VARCHAR(30)
);
CREATE TABLE IF NOT EXISTS Proyecto.valoracion (
    id VARCHAR(15),
    usuario VARCHAR(50),
    valoracion INT(11),
    comentario VARCHAR(10000),
    PRIMARY KEY(id, usuario),
    FOREIGN KEY(id) REFERENCES peliculas(id),
    FOREIGN KEY(id) REFERENCES usuarios(correo)
);