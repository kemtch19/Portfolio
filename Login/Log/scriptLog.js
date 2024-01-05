// Obtenemos los datos que mandamos del index principal y el span
let nombre = localStorage.getItem('nombre');
let genero = localStorage.getItem('genero');
let persona = document.getElementById('Persona');
let imagenes = document.getElementById('Imagen')
let body=document.querySelector('body');

// Mandamos el nombre al span
persona.innerText = nombre;

// Se sale del Logeo del usuario
function salir() {
    localStorage.clear();
    window.location.href = '../index.html';
}

// Si existe un nombre o no hay nombre cuando inicie sesion 
if (!nombre) {
    window.location.href = '../index.html';
}

// Cambiamos el fondo según el genero de la persona
imagenes.classList.remove('masculino');
imagenes.classList.remove('femenino-imagen');
body.classList.remove('masculino');
body.classList.remove('femenino')


if(genero=='Masculino'){
    body.classList.add('masculino');
    imagenes.classList.add('masculino-imagen');    
}else if(genero=='Femenino'){
    body.classList.add('femenino')
    imagenes.classList.add('femenino-imagen');
}