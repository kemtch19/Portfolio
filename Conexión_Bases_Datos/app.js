// Llamamos la base de datos de memei con todos los datos
// Luego cojemos los datos que esta trayendo del servidor y los parsea en formato json de uno en uno 


let tbody=document.getElementById('tabla')
let resultado= fetch("https://memin.io/public/api/users")
.then(response=>{
    return response.json()
}).then(data=>{
    data.forEach(function(element){
        // crea las tr
        let tr=document.createElement('tr');
        tbody.appendChild(tr);

        // crea El ID
        let td=document.createElement('td');
        td.classList.add('border','border-2');
        td.innerText=element.id;
        tr.appendChild(td);

        // crea el Nombre
        let td2=document.createElement('td');
        td2.classList.add('border','border-2');
        td2.innerText=element.name;
        tr.appendChild(td2);

        // crea el Nombre
        let td3=document.createElement('td');
        td3.classList.add('border','border-2');
        td3.innerText=element.email;
        tr.appendChild(td3);

        let td4=document.createElement('td');
        td4.classList.add('border', 'border-2');
        let a1=document.createElement('a');
        a1.innerText='Actualizar';
        a1.className=('btn btn-success p-0')
        a1.setAttribute('href', '#');
        a1.setAttribute('onclick', 'actualizar(this)');
        tr.appendChild(td4);
        td4.appendChild(a1)

        let a2=document.createElement('a');
        a2.innerText='Eliminar';
        a2.className=('btn btn-danger p-0 m-2')       
        a2.setAttribute('href', '#');
        tr.appendChild(td4);
        td4.appendChild(a2);

        let a3=document.createElement('a');
        a3.innerText='Detallitos';
        a3.className=('btn btn-info p-0')
        a3.setAttribute('href', '#');
        a3.setAttribute('data-bs-toggle', 'modal');
        a3.setAttribute('data-bs-target', '#exampleModal');
        a3.addEventListener('click', function(){
            detalles(element.id)
        })
        tr.appendChild(td4);
        td4.appendChild(a3);

        a2.addEventListener('click', () => {
            let variable= (a2.parentElement).parentElement;
            id=variable.children[0].innerText;
            console.log(id);
            fetch(`https://memin.io/public/api/users/${id}`, {method: 'DELETE'}).then(alert('Se elimino el campo'))        
        });
    });
}); 
function detalles(userId){
    fetch('https://memin.io/public/api/users/'+userId)
    .then(response =>{
        return response.json()
    }).then(data =>{
        let modal=document.getElementById('modalprueba')
        for(let datos in data){
            let p =document.createElement('p');
            p.textContent=`${datos}:${data[datos]}`
            modal.appendChild(p);
            console.log(datos);
            console.log(data);
        }
    });
};

function actualizar(element){
    let name=document.getElementById('name');
    let correo=document.getElementById('correo');
    let variable= (element.parentElement).parentElement;
    name.value=variable.children[1].innerText;
    correo.value=variable.children[2].innerText;
    if(variable.children[0].innerText){
        localStorage.setItem('rico', variable.children[0].innerText);
    }
}

function TieneID(){
    datos_nuevos={
        name:document.getElementById('name').value,
        email:document.getElementById('correo').value
    }
    let rico=localStorage.getItem('rico');
    if(rico){
        fetch("https://memin.io/public/api/users/"+rico,{method: 'PUT',
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(datos_nuevos)
    }).then(
        alert('SE ACTUALIZO EL USUARIO')
    )
    }else{
        fetch("https://memin.io/public/api/users/",{method: 'POST',
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(datos_nuevos)
    }).then(
        alert('SE CREO EL USUARIO')
    )}
    localStorage.clear();
    document.getElementById('name').value=''
    document.getElementById('correo').value=''
}