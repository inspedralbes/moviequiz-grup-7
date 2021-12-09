CREATE DATABASE IF NOT EXISTS Proyecto;

CREATE TABLE IF NOT EXISTS Proyecto.peliculas (

    id VARCHAR(15) PRIMARY KEY,
    titulo VARCHAR(30),
    imagen VARCHAR(255)
);
CREATE TABLE IF NOT EXISTS Proyecto.usuarios (

    id INT(15) AUTO_INCREMENT PRIMARY KEY,
    correo VARCHAR(50),
    contrasena VARCHAR(30)
)