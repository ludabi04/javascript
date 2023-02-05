let arrayDias = document.getElementsByClassName("diasSemana");

for (const dia of arrayDias) {
    let diaElegido = dia.innerHTML;
    console.log(`${diaElegido}`)
    
}


 let botonLunes = document.getElementById(`lunes`)
 botonLunes.addEventListener("click", mostrarActividades)

 function mostrarActividades () {
    let muestraActividad = document.getElementById("visualPorDia")
    visualPorDia.innerHTML = `<div>
    <p>Las actividades que tenemos son:</p>
    <ul>
    <li>actividad 1</li>
    <li>Actividad 2</li>
    <li>Actividad 2</li>
    <li>Actividad 2</li>
    <li>Actividad 2</li></ul>
</div>`
 }


