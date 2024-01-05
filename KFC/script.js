// Cambio de color con los inputs y agregando la clase necesaria para darle el color al mismo
function cambioColor() {
    let body = document.getElementById('body');
    let theme = document.getElementById('select').value;
    if (theme === 'Dark') {
        body.classList.add('theme-Dark');
        body.classList.remove('theme-Light');
        body.classList.remove('theme-Blue');
        localStorage.setItem('GuardarDatos', 'Dark');
    } else if (theme === 'Blue') {
        body.classList.add('theme-Blue');
        body.classList.remove('theme-Light');
        body.classList.remove('theme-Dark');
        localStorage.setItem('GuardarDatos', 'Blue');
    } else if (theme === 'Light') {
        body.classList.add('theme-Light');
        body.classList.remove('theme-Blue');
        body.classList.remove('theme-Dark');
        localStorage.setItem('GuardarDatos', 'Light');
    }
}

// Local Storage para poder mantener constante el tema que se eligio y recuperarlo cada vez que se actualiza la página
try {
    let dato = localStorage.getItem('GuardarDatos');
    if (dato === 'Dark') {
        body.classList.add('theme-Dark');
        body.classList.remove('theme-Light');
        body.classList.remove('theme-Blue');
    } else if (dato === 'Blue') {
        body.classList.add('theme-Blue');
        body.classList.remove('theme-Light');
        body.classList.remove('theme-Dark');
    } else if (dato === 'Light') {
        body.classList.add('theme-Light');
        body.classList.remove('theme-Blue');
        body.classList.remove('theme-Dark');
    }
} catch { }

// Traductor a Inglés
function Traductor() {
    let parrafo1 = document.getElementById('parrafo1');
    let parrafo2 = document.getElementById('parrafo2');
    let parrafo3 = document.getElementById('parrafo3');
    let parrafo4 = document.getElementById('parrafo4');
    let parrafo5 = document.getElementById('parrafo5');
    let parrafo6 = document.getElementById('parrafo6');
    let parrafo7 = document.getElementById('parrafo7');
    let parrafo8 = document.getElementById('parrafo8');
    let opcion = document.getElementById('opcionTraductor').value
    
    let traducionIngles = {
        parrafo1: '1 Sandwich BBQ Crunch (1 Breaded chicken fillet)',
        parrafo2: '1 Kentucky Burger / Sandwich (1 Breaded chicken breast fillet, pickels,...',
        parrafo3: '1 Sandwich BBQ Crunch (1 Breaded Chicken Fillet) + 1 Small Potato + 1 PET Soda...',
        parrafo4: '1 Sandwich Coronel Burger / 1 Breaded Chicken Breast Fillet, Salad...',
        parrafo5: '1 Kentucky Burger/ Sandwich (1 breaded chicken breast fillet, pickles,...',
        parrafo6: '1 Kentucky Coronel Burger/ Sandwich(1 breaded chicken breast fillet, pickles,...',
        parrafo7: '1 Sandwich Crispy BBQ (1 extra large breast fillet, triple breaded, crispy onion...',
        parrafo8: '1 Sandwich Crispy BBQ (1 extra large breast fillet, triple breaded, crispy onion...'
    }

    let traducionEspañol = {
        parrafo1: '1 Sandwich BBQ Crunch (1 Filete de pollo apanado)',
        parrafo2: '1 Kentucky hamburguesa / Sandwich (1filete de pechuga de pollo apanado, pepinillos,...',
        parrafo3: '1 Sandwich BBQ Crunch (1 Filete de pollo apanado) +1 Papa Pequeña + 1 Gaseosa PET...',
        parrafo4: '1 Sandwich Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...',
        parrafo5: '1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos,...',
        parrafo6: '1 Kentucky Coronel hamburguesa / Sandwich(1 Filete de pechuga de pollo apanado, Ensalada...',
        parrafo7: '1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...',
        parrafo8: '1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...'
    }

    if(opcion=='Ingles'){
        parrafo1.innerText=traducionIngles.parrafo1;
        parrafo2.innerText=traducionIngles.parrafo2;
        parrafo3.innerText=traducionIngles.parrafo3;
        parrafo4.innerText=traducionIngles.parrafo4;
        parrafo5.innerText=traducionIngles.parrafo5;
        parrafo6.innerText=traducionIngles.parrafo6;
        parrafo7.innerText=traducionIngles.parrafo7;
        parrafo8.innerText=traducionIngles.parrafo8;
    }else if(opcion=='Español'){
        parrafo1.innerText=traducionEspañol.parrafo1;
        parrafo2.innerText=traducionEspañol.parrafo2;
        parrafo3.innerText=traducionEspañol.parrafo3;
        parrafo4.innerText=traducionEspañol.parrafo4;
        parrafo5.innerText=traducionEspañol.parrafo5;
        parrafo6.innerText=traducionEspañol.parrafo6;
        parrafo7.innerText=traducionEspañol.parrafo7;
        parrafo8.innerText=traducionEspañol.parrafo8;
    }
}