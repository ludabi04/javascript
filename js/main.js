let actividades = document.getElementById("actividades")
let nombreCliente = prompt("Ingesa tu nombre")
let esCliente = confirm("Ya sos cliente de nuestro Gimnasio?");
let body = document.body
let header = document.getElementById("header")
let nav = document.getElementById("nav")
let main = document.getElementById("main")

let visualPorDia = document.getElementById("div")




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




    