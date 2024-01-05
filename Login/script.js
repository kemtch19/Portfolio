let nombreLocal= localStorage.getItem('nombre');

if(nombreLocal){
    window.location.href='./Logeo/indexLogeo.html'
}

// Declaramos el array con los usuarios y sus inicios de sesión
let datos = [{ nombre: 'Maicol', correo: 'm@correo.com', password: 'password1', genero: 'Masculino' }, {nombre: 'Fernando', correo: 'f@correo.com', password:'password2', genero: 'Masculino'}, {nombre: 'Angelica', correo:'a@correo.com', password:'password3', genero: 'Femenino'},{nombre: 'Santiago', correo: 's@correo.com', password: 'password4'}, {nombre: 'Alejandra', correo: 'ale@correo.com', password: 'password5', genero: 'Femenino'}];

function validar(){    
    // Tomamos las variables que necesitamos para nuestras validaciones
    let correo=document.getElementById('correo');
    let password= document.getElementById('contraseña');
    let contCorreo=0;
    let contPassword=0;
    
    // recorremos el array para poder 
    datos.forEach(element => {
        // Comparamos el correo        
        if(element.correo === correo.value){  
            contCorreo++;
        }
        // Comparamos la contraseña
        if(element.password === password.value){
            contPassword++;
        }
    });   

    // Si existe dentro del array vamos a darle su respectiva validación que es con el correo
    if(contCorreo >= 1){ /*  */
        correo.classList.add('is-valid');
        correo.classList.remove('is-invalid');
    }else{
        correo.classList.add('is-invalid');
        correo.classList.remove('is-valid');
    }

    // Si existe le hacemos la validación con la password
    if(contPassword >= 1){
        password.classList.add('is-valid');
        password.classList.remove('is-invalid');
    }else{
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
    }
    
    // Mandamos a la otra página si el correo y la password son correctos
    datos.forEach(element => {
        if((element.correo==correo.value)&&(element.password==password.value)){
            window.location.href='./Log/indexLog.html'
            localStorage.setItem('nombre', element.nombre);
            localStorage.setItem('genero', element.genero);
        }
    });    
}
