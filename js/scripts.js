

let edadUsuario = parseInt(prompt('Debés ser mayor de 18 años para continuar usando el sitio, por favor indica tu edad'));
/*if (isNaN(edadUsuario)==true || /^[1-9]\d$/.test(edadUsuario)==false ) {alert ('Edad no valida'); todoCorrecto=false;}*/
if (isNaN(edadUsuario)==true) {
    alert ('Edad no valida');
    document.location.href = "../error.html";
    } 
    else if (edadUsuario <= 17) {
    document.location.href = "../error.html";
    }
    else alert ('Bienvenido!');

    