 let nombre = prompt("Indicanos tu nombre?")
 let diasActividades = prompt("Que día podes venir al gimnasio?")
 
    if (diasActividades == "lunes" || diasActividades == "Lunes" || diasActividades == "LUNES"){
    
        document.write("BIENVENIDO " + nombre + " te pasamos los horarios de actividades de los dias: " + diasActividades + "</br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching ")
        }else if 
            (diasActividades == "martes" || diasActividades == "Martes" || diasActividades == "MARTES"){
    
        document.write("BIENVENIDO " + nombre + " te pasamos los horarios de actividades de los dias: " + diasActividades + "</br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching ")

        }else if 
            (diasActividades == "miercoles" || diasActividades == "Miercoles" || diasActividades == "MIERCOLES" || diasActividades == "miércoles" || diasActividades == "Miércoles" || diasActividades == "MIÉRCOLES"){
    
        document.write("BIENVENIDO " + nombre + " te pasamos los horarios de actividades de los dias: " + diasActividades + "</br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching ")

        }else if 
            (diasActividades == "jueves" || diasActividades == "Jueves" || diasActividades == "JUEVES"){
    
        document.write("BIENVENIDO " + nombre + " te pasamos los horarios de actividades de los dias: " + diasActividades + "</br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga<br> -12:00 - Stretching </br> -14:00 - Aerolocal<br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching ")

        }else if 
            (diasActividades == "viernes" || diasActividades == "Viernes" || diasActividades == "VIERNES"){
    
        document.write("BIENVENIDO " + nombre + " te pasamos los horarios de actividades de los dias: " + diasActividades + "</br> </br> -08:00 - Musculacion<br> -09:00 - Zumba </br> -11:00 - Yoga</br> -12:00 - Stretching </br> -14:00 - Aerolocal</br> -16:00 - Aerobox </br> -18:00 - Yoga<br> -20:00 - Stretching ")

        }else if 
            (diasActividades == "sabado" || diasActividades == "Sabado" || diasActividades == "SABADO" || diasActividades == "sábado" || diasActividades == "Sábado" || diasActividades == "SÁBADO"){
    
        alert("BIENVENIDO " + nombre + " te comentamos que los dias: " + diasActividades + " el gimnasio permanence cerrado")

        }else if 
            (diasActividades == "domingo" || diasActividades == "Domingo" || diasActividades == "DOMINGO"){
    
        alert("BIENVENIDO " + nombre + " te comentamos que los dias: " + diasActividades + " el gimnasio permanence cerrado")

        }else{
            alert("ingresá un día de la semana válido:   \n\n -Lunes  \n -Martes \n -Miércoles  \n -Jueves  \n -Viernes  \n  \n RECORDÁ QUE SABADOS Y DOMINGOS EL GIMNASIO PERMANECE CERRADO")
        }
