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

 let botonMartes = document.getElementById(`martes`)
 botonMartes.addEventListener("click", mostrarActividadesMartes)

 function mostrarActividadesMartes () {
    let muestraActividad = document.getElementById("visualPorDia")
    visualPorDia.innerHTML = `<div>
    <p>Las actividades que tenemos son:</p>
    <ul>
    <li>actividad 5</li>
    <li>Actividad 6</li>
    <li>Actividad 7</li>
    <li>Actividad 8</li>
    <li>Actividad 9</li></ul>
</div>`
 }

 let botonMiercoles = document.getElementById(`miercoles`)
 botonMiercoles.addEventListener("click", mostrarActividadesMiercoles)

 function mostrarActividadesMiercoles () {
    let muestraActividad = document.getElementById("visualPorDia")
    visualPorDia.innerHTML = `<div>
    <p>Las actividades que tenemos son:</p>
    <ul>
    <li>actividad 10</li>
    <li>Actividad 11</li>
    <li>Actividad 12</li>
    <li>Actividad 13</li>
    <li>Actividad 14</li></ul>
</div>`
 }

 let botonJueves = document.getElementById(`jueves`)
 botonJueves.addEventListener("click", mostrarActividadesJueves)

 function mostrarActividadesJueves () {
    let muestraActividad = document.getElementById("visualPorDia")
    visualPorDia.innerHTML = `<div>
    <p>Las actividades que tenemos son:</p>
    <ul>
    <li>actividad 15</li>
    <li>Actividad 16</li>
    <li>Actividad 17</li>
    <li>Actividad 18</li>
    <li>Actividad 19</li></ul>
</div>`
 }

 let botonViernes = document.getElementById(`viernes`)
 botonViernes.addEventListener("click", mostrarActividadesViernes)

 function mostrarActividadesViernes () {
    let muestraActividad = document.getElementById("visualPorDia")
    visualPorDia.innerHTML = `<div>
    <p>Las actividades que tenemos son:</p>
    <ul>
    <li>actividad 19</li>
    <li>Actividad 20</li>
    <li>Actividad 21</li>
    <li>Actividad 22</li>
    <li>Actividad 23</li></ul>
</div>`
 }

 let botonSabado = document.getElementById(`sabado`)
 botonSabado.addEventListener("click", mostrarActividadesSabado)

 function mostrarActividadesSabado () {
    let muestraActividad = document.getElementById("visualPorDia")
    visualPorDia.innerHTML = `<div>
    <p>El gimnasio está cerrado los sabados</p>
   
</div>`
 }

 let botonDomingo = document.getElementById(`domingo`)
 botonDomingo.addEventListener("click", mostrarActividadesDomingo)

 function mostrarActividadesDomingo () {
    let muestraActividad = document.getElementById("visualPorDia")
    visualPorDia.innerHTML = `<div>
    <p>El gimnasio está cerrado los domingos</p>
   
</div>`
 }

