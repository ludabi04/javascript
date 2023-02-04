
let diasActividades = prompt("Que día queres venir al gimnasio?")
 
    if (diasActividades == "LUNES"){
    
        document.write("BIENVENIDO " + nombre + " te pasamos los horarios de actividades de los dias: " + diasActividades + "</br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching ")
        }else if 
            (diasActividades == "MARTES"){
    
        document.write("BIENVENIDO " + nombre + " te pasamos los horarios de actividades de los dias: " + diasActividades + "</br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching ")

        }else if 
            (diasActividades == "MIERCOLES" || diasActividades == "MIÉRCOLES"){
    
        document.write("BIENVENIDO " + nombre + " te pasamos los horarios de actividades de los dias: " + diasActividades + "</br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching ")

        }else if 
            (diasActividades == "JUEVES"){
    
        document.write("BIENVENIDO " + nombre + " te pasamos los horarios de actividades de los dias: " + diasActividades + "</br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching ")

        }else if 
            (diasActividades == "VIERNES"){
    
        document.write("BIENVENIDO " + nombre + " te pasamos los horarios de actividades de los dias: " + diasActividades + "</br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga</br> -12:00 - Stretching </br> -14:00 - Aerolocal</br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching ")

        }else if 
            (diasActividades == "SABADO" || diasActividades == "SÁBADO"){
    
        alert("BIENVENIDO " + nombre + " te comentamos que los dias: " + diasActividades + " el gimnasio permanence cerrado")

        }else if 
            (diasActividades == "DOMINGO"){
    
        alert("BIENVENIDO " + nombre + " te comentamos que los dias: " + diasActividades + " el gimnasio permanence cerrado")

        }else{
            alert("ingresá un día de la semana válido:   \n\n -Lunes  \n -Martes \n -Miércoles  \n -Jueves  \n -Viernes  \n  \n RECORDÁ QUE SABADOS Y DOMINGOS EL GIMNASIO PERMANECE CERRADO")
        }
