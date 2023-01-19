


function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.saludar = function(){alert(`Hola ${nombre}, soy Gymi... Tu asesor virtual!  \nBienvendido/a \nAhora que se que tienes ${edad} años te voy a estar haciendo algunas preguntas para conocerte mejor y así poder ayudarte a conocer la mejor rutina...\nCOMENCEMOS `)}   
}

let tuEdad = Number(prompt("Cual es tu edad?"))
let tuNombre = prompt("Cual es tu nombre ?")

const persona1 = new Persona (tuNombre, tuEdad)
persona1.saludar()

class Rutinas{
    constructor (hombros, piernas, brazos) {
    this.hombros = hombros;
    this.piernas = piernas;
    this.brazos = brazos;
}}
const adelgazar =  new Rutinas ("press x 2", "prensa x 2", "flexiones x 2")
const agrandar = new Rutinas ("Press Arnold x 3", "Estocadas x 3", "aperturas con mancuerna x 3")

let rutina = prompt("Que tipo de rutina queres conocer? : 1 - Adelgazar 2 - Agrandar")

if (rutina == 1){
    alert(`Genial ${tuNombre} Para ADELGAZAR te recomendamos que hagas la siguiente rutina: \n${adelgazar.hombros}, \n${adelgazar.piernas}, \n${adelgazar.brazos}\n...con esa rutina podes arrancar en tu casa, pero me gustaría que elijas un dia que podes venir a nuestro Gym asi te puedo mostrar cuales son las clases del dia para vos!`) 
    } else {
        alert(`Genial ${tuNombre} Para AGRANDAR tu musculatura te recomendamos que hagas la siguiente rutina: \n$${agrandar.hombros}, \n$${agrandar.piernas}, \n$${agrandar.brazos}\n$... con esa rutina podes arrancar en tu casa, pero me gustaría que elijas un dia que podes venir a nuestro Gym asi te puedo mostrar cuales son las clases del dia para vos! `)
    }


const diasSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]

let diaElegido = Number(prompt("Elegi el dia de la semana que queres consultar contando como 1 el dia Lunes (solo números), por ejemplo: \n1 - Lunes \n2 - Martes \n3 - Miércoles \n4 - Jueves \n y así....  "))

if(!isNaN(diaElegido) && diaElegido != null && diaElegido != "" && diaElegido <= 7 && diaElegido >=1) {
    switch (diaElegido){
        case 1 : 
            document.write(`Los dias ${diasSemana[diaElegido-1]} tenes </br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching `);
            break;
        case 2 :
            document.write(`Los dias ${diasSemana[diaElegido-1]} tenemos estas clases para vos!! </br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching `);
            break;
        case 3 :
            document.write(`Los dias ${diasSemana[diaElegido-1]} tenemos estas clases para vos!! </br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching `);
            break;
        case 4 :
            document.write(`Los dias ${diasSemana[diaElegido-1]} tenemos estas clases para vos!! </br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching `);
            break;
        case 5 :
            document.write(`Los dias ${diasSemana[diaElegido-1]} tenemos estas clases para vos!! </br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching `);
            break;
        case 6 :
            document.write(`Los dias ${diasSemana[diaElegido-1]} el gimnasio permanence cerrado </br></br> :(`);break;
        case 7 :
            document.write(`Los dias ${diasSemana[diaElegido-1]} el gimnasio permanence cerrado </br></br> :(`);break;



    }
}else{
    alert("NO elegiste un número o elegiste un día de la semana superior a 7 (domingo)")
}


