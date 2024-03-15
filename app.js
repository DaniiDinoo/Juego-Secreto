let numeroMaximo = 10;
let listaNumerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
mensajesIniciales();


function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function generarNumeroSecreto() 
{
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);

    if(listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p','Ya se sortearon todos los número posibles');
    }else
    {
        if(listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }else
        {
            listaNumerosSorteados.push(numeroGenerado);
            console.log(listaNumerosSorteados);
            return numeroGenerado;
        }
    }


}


function limpiarCaja()
{
    document.querySelector('#valorUsuario').value = '';
}



function verificarIntento()
{
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroSecreto === numeroUsuario);  //El triple igual === se utiliza para verificar que sean idénticos en valor y tipo de dato
    if(numeroSecreto === numeroUsuario)
    {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? `vez` : `veces`}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else //El usuario no acertó 

    {
        if(numeroUsuario > numeroSecreto)
        {
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }

        intentos++;
        limpiarCaja();

    }
    
    return;
}



function mensajesIniciales()
{
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Teclea un número del 1 al ${numeroMaximo}` );
}


function reiniciarJuego() 
{
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de inicio
    mensajesIniciales();
    //Generar un nuevo número secreto
    numeroSecreto = generarNumeroSecreto();
    //Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');  
    //Inicializar el número de intentos
    intentos = 1;
}





