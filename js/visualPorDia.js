let eleccionNumero = Number(prompt("que cantidad de dias queres venir al gimnasio? (elegi un numero menor a 30)"))
for (i = eleccionNumero; i <= 30; i++) {
    document.write("el valor de " + i + " dias es de" + " $" + (i * 200) + "<br>")
    
}