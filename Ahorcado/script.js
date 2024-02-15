let frase="coder";
let fraseArray=frase.split("");
let vidas=5;

salir:while(vidas>0){
    let letra=prompt("Ingrese una letra: ").toLowerCase();
    console.log(letra)
    if(fraseArray.includes(letra)){
        if(fraseArray.indexOf(letra)!=-1){
            fraseArray.splice(fraseArray.indexOf(letra),1);  
        }
        console.log(fraseArray);
        if(fraseArray.length==0){
            console.log(`Felicidades, la palabra era: `+frase+ ` y quedaste con ${vidas} vidas`);
            break salir;
        }
    }else{
        vidas-=1;
    }
    console.log(`Te quedan: ${vidas} vidas`)
}    