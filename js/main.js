


let esCliente = confirm("Ya sos cliente de nuestro Gimnasio?");

if (esCliente === true){
    if (confirm("ya entregaste tu apto físico?") === true){
        alert("genial! recordá que lo tenes que renovar anualmente")
    }else{
        alert("recorda que hasta que no lo tengas no podrás acceder al gym")
}
}else{
    console.log("no es cliente")
}


    