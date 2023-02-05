let arancelCalculado = document.getElementById("arancelCalculado")
let botonCalcular = document.getElementById("botonCalcular")
botonCalcular.addEventListener("click", calculoArancel)

function calculoArancel () {
    let cantidadDias = document.getElementById("diasParaArancel").value;
    let resultado = (`${cantidadDias}`* 150)
    arancelCalculado.innerHTML = `El valor por mes va a ser de : $ ${resultado}`
}






