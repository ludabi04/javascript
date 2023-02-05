let actividades = document.getElementById("actividades")
let nombreCliente = document.getElementById("ingresarNombre")
let body = document.body
let header = document.getElementById("header")
let nav = document.getElementById("nav")
let main = document.getElementById("main")
let visualPorDia = document.getElementById("div")


let botones = ["divBoton","divBoton1", "divBoton2", "divBoton3"]

for (const element of botones) {
    boton = document.getElementById(element)
    boton.onclick = () => alert("vas a ser redireccionado")
}

let envioForm = document.getElementById("submit")
envioForm.addEventListener("click", mensajeEnviado)
function mensajeEnviado(){
    let capturarNombre = document.getElementById("formNombre").value;
    let capturarApellido = document.getElementById("formMail").value;
    console.log(capturarApellido, capturarNombre);    
    let apellidoUsuario = localStorage.setItem(`nombre`, `${capturarNombre}`)
    // let NombreUsuario = localStorage.setItem(`apellido`, `${capturarApellido}`)
    // let apellidoGuardado = localStorage.getItem(`${apellidoUsuario}`)
    console.log(capturarApellido)
}


let enviarNombre = document.getElementById("enviarNombre")
enviarNombre.addEventListener("click", enviarNombres)

function enviarNombres(){
    const nombreUsuario = document.getElementById("ingresarNombre").value;
    localStorage.setItem('usuario', `${nombreUsuario}`);
    let saludo =  localStorage.getItem(`${nombreUsuario}`);
    const enJSON    = JSON.stringify(nombreUsuario);
    document.getElementsByClassName("pedirNombre");
    let nombre = document.getElementById("ingresarNombre").value;
    let pedirNombre = document.getElementById("pedir")
    pedirNombre.innerHTML = `<div class="bienvenida"><p> Hola ${enJSON}</p> 
        <p>Sos cliente del gimnasio?</p>
        <div class="botones">
        <button id="botonSi" class="botonSi">Si</button>
        <button id="botonNo" class="botonNo">No</button>
        </div>
        </div>`   
        let clickSiBoton = document.getElementById("botonSi");
        clickSiBoton.addEventListener("click", clickBotonSi);
        function clickBotonSi (){
            let cambioCliente = document.getElementById("nav");
            cambioCliente.innerHTML =  `<div>
            <a href="./pages/rutinas.html"><div id="divBoton2" class="visualPorDia">Rutinas (Nuevo) </div></a>
            
            <a href="./pages/consultaDias.html"><div id="divBoton1" class="consultaDias">Días</div></a> 
        </div>`
    }
    
    let clickNoBoton = document.getElementById("botonNo");
    clickNoBoton.addEventListener("click", clickBotonNo);
    function clickBotonNo () {
        let cambioCliente = document.getElementById("nav");
    cambioCliente.innerHTML =  `<div>
    <a href="./pages/calcularArancel.html"><div id="divBoton" class="consultaDias click">Calcular arancel</div></a> 
    <a href="./pages/visualPorDia.html"><div id="divBoton3" class="visualPorDia">Valor por Día</div></a>
</div>
`

    }
    }

    

const obtenerDatos = () => {
    console.log(capturarDatos)
}



class nuevoUsuario {
    constructor (nombreCliente, apellido, fechaNac){
        this.nombreCliente = nombreCliente;
        this.apellido = apellido;
        this.fechaNac = fechaNac

    }
  
}

