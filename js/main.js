let actividades = document.getElementById("actividades")
let nombreCliente = prompt("Ingesa tu nombre")
let esCliente = confirm("Ya sos cliente de nuestro Gimnasio?");
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
    console.log("Formulario Enviado");    
}

let enviarNombre = document.getElementById("enviarNombre")
enviarNombre.addEventListener("click", enviarNombres)
function enviarNombres(){
    document.getElementsByClassName("pedirNombre");
    pedir.className = "displayNone";
}

if (esCliente === true){
    actividades.innerHTML = `Consulta las actividades que queres ${nombreCliente}`;
    if (confirm("ya entregaste tu apto físico?") === true){
        alert("genial! recordá que lo tenes que renovar anualmente")
    }else{
        alert("recorda que hasta que no lo tengas no podrás acceder al gym")
}
}else{
    body.className = "no-cliente";
    header.className = "no-cliente";
    nav.className = "no-cliente";
    main.className = "no-cliente";
    
    alert("CONOCE TODAS LAS ACTIVIDADES Y ARANCELES")
}




    