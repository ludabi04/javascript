

let botonAgrandar = document.getElementById("botonAgrandar");
botonAgrandar.addEventListener("click", agrandar);

function agrandar() {
    console.log("hiciste")
    let paraAgrandar = document.getElementById("bodyRutinas");
    paraAgrandar.innerHTML = ` <p>Estas son las rutinas para agrandar</p>
    <p>press x 2", "prensa x 2", "flexiones x 2</p>
    <button id="volverAtras"> Volver </button>`;
    
    let botonVolver = document.getElementById("volverAtras")
    botonVolver.addEventListener("click", volver)
    
    function volver () {
        let paraAdelgazar = document.getElementById("bodyRutinas");
        paraAdelgazar.innerHTML = `
        <h1>Rutinas</h1>
        <button id="botonAgrandar">Agrandar</button>
        <button id="botonAdelgazar">Adelagazar</button>
        <label for="eleccionDia">Elegi el dia que queres consultar</label>
        <ul>
        <li ><button id="lunes">Lunes</button></li>
        <li ><button id="martes">Martes</button></li>
        <li ><button id ="miercoles">Miercoles</button></li>
        <li ><button id="jueves">jueves</button></li>
        <li ><button id ="viernes">Viernes</button></li>
        <li>Sabado (Cerrado)</li>
        <li>Domingo (Cerrado</li>
        </ul>`
    }
    
}

let botonAdelgazar = document.getElementById("botonAdelgazar");
botonAdelgazar.addEventListener("click", adelgazar);
function adelgazar() {
    console.log("hiciste")
    let paraAdelgazar = document.getElementById("bodyRutinas");
    paraAdelgazar.innerHTML = `
    <p>Estas son las rutinas para Adelgazar </p>
    <p>press x 2", "prensa x 2", "flexiones x 2</p>
    <button id="volverAtras"> Volver </button>`
    
    let botonVolver = document.getElementById("volverAtras")
    botonVolver.addEventListener("click", volver)
    
    function volver () {
        let paraAdelgazar = document.getElementById("bodyRutinas");
        paraAdelgazar.innerHTML = `
        <h1>Rutinas</h1>
        <button id="botonAgrandar">Agrandar</button>
        <button id="botonAdelgazar">Adelagazar</button>
        <label for="eleccionDia">Elegi el dia que queres consultar</label>
        <ul>
            <li ><button id="lunes">Lunes</button></li>
            <li ><button id="martes">Martes</button></li>
            <li ><button id ="miercoles">Miercoles</button></li>
            <li ><button id="jueves">jueves</button></li>
            <li ><button id ="viernes">Viernes</button></li>
            <li>Sabado (Cerrado)</li>
            <li>Domingo (Cerrado</li>
        </ul>`
    }
    
}

let botonRutinas = document.getElementById("consultarRutinas")
botonRutinas.addEventListener("click", consultaRutinasGral)


function consultaRutinasGral () {
    for (const consultaRuti of adelgazar1) {
        console.log(adelgazar1[consultaRuti])
        
    }
}

class Rutinas{
    constructor (hombros, piernas, brazos) {
    this.hombros = hombros;
    this.piernas = piernas;
    this.brazos = brazos;
}}
const adelgazar1 =  new Rutinas ("press x 2", "prensa x 2", "flexiones x 2")
const agrandar1 = new Rutinas ("Press Arnold x 3", "Estocadas x 3", "aperturas con mancuerna x 3")

    



// let rutina = prompt("Que tipo de rutina queres conocer? : 1 - Adelgazar 2 - Agrandar")

// if (rutina == 1){
//     alert(`Genial ${tuNombre} Para ADELGAZAR te recomendamos que hagas la siguiente rutina: \n${adelgazar.hombros}, \n${adelgazar.piernas}, \n${adelgazar.brazos}\n...con esa rutina podes arrancar en tu casa, pero me gustaría que elijas un dia que podes venir a nuestro Gym asi te puedo mostrar cuales son las clases del dia para vos!`) 
//     } else {
//         alert(`Genial Para AGRANDAR tu musculatura te recomendamos que hagas la siguiente rutina: \n$${agrandar.hombros}, \n$${agrandar.piernas}, \n$${agrandar.brazos}\n$... con esa rutina podes arrancar en tu casa, pero me gustaría que elijas un dia que podes venir a nuestro Gym asi te puedo mostrar cuales son las clases del dia para vos! `)
//     }


// const diasSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]

// let diaElegido = Number(prompt("Elegi el dia de la semana que queres consultar contando como 1 el dia Lunes (solo números), por ejemplo: \n1 - Lunes \n2 - Martes \n3 - Miércoles \n4 - Jueves \n y así....  "))

// if(!isNaN(diaElegido) && diaElegido != null && diaElegido != "" && diaElegido <= 7 && diaElegido >=1) {
//     switch (diaElegido){
//         case 1 : 
//             document.write(`Los dias ${diasSemana[diaElegido-1]} tenes </br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching `);
//             break;
//         case 2 :
//             document.write(`Los dias ${diasSemana[diaElegido-1]} tenemos estas clases para vos!! </br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching `);
//             break;
//         case 3 :
//             document.write(`Los dias ${diasSemana[diaElegido-1]} tenemos estas clases para vos!! </br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching `);
//             break;
//         case 4 :
//             document.write(`Los dias ${diasSemana[diaElegido-1]} tenemos estas clases para vos!! </br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching `);
//             break;
//         case 5 :
//             document.write(`Los dias ${diasSemana[diaElegido-1]} tenemos estas clases para vos!! </br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching `);
//             break;
//         case 6 :
//             document.write(`Los dias ${diasSemana[diaElegido-1]} el gimnasio permanence cerrado </br></br> :(`);break;
//         case 7 :
//             document.write(`Los dias ${diasSemana[diaElegido-1]} el gimnasio permanence cerrado </br></br> :(`);break;



//     }
// }else{
//     alert("NO elegiste un número o elegiste un día de la semana superior a 7 (domingo)")
// }


// const alta = [
//     {nombre: 'Hombros', cantidad: 15, repeticiones: 3}, 
//     {nombre: 'Trapecio', cantidad: 15, repeticiones: 3},
//     {nombre: 'Biceps', cantidad: 15, repeticiones: 3},
//     {nombre: 'Triceps', cantidad: 15, repeticiones: 3},
// ]


// const abdominales = [
//     {nombre: 'Bajos', cantidad: 15, repeticiones: 3}, 
//     {nombre: 'Medios', cantidad: 15, repeticiones: 3},
//     {nombre: 'Oblicuos', cantidad: 15, repeticiones: 3},
//     {nombre: 'Altos', cantidad: 15, repeticiones: 3},
//     {nombre: 'Tabla', cantidad: 15, repeticiones: 3}
// ]

// const baja = [
//     {nombre: 'cuadriceps', cantidad: 15, repeticiones: 3}, 
//     {nombre: 'gemelos', cantidad: 15, repeticiones: 3},
//     {nombre: 'gluteos', cantidad: 15, repeticiones: 3},
//     {nombre: 'aducotores', cantidad: 15, repeticiones: 3},
// ]


// const zonaAlta = alta.map((el) => el.nombre)
// const media = abdominales.map((el) => el.nombre)
// const zonaBaja = baja.map((el) => el.nombre)


// let eleccionDeZona = prompt("elegi que zona queres saber entre : \n- ALTA \n- BAJA \n- ABDOMINALES ")
// console.log(eleccionDeZona)

//     switch(eleccionDeZona){
//     case "ALTA": 
//     alert(`Se pueden entrenar las siguientes zonas : ${zonaAlta}`);
//     break;
//     case "ABDOMINALES": 
//     alert(`los tipos de abdominales que se pueden hacer son : ${media}`);
//     break;
//     case "BAJA": 
//     alert(`los tipos de abdominales que se pueden hacer son : ${zonaBaja}`);
//     break;
//     }
