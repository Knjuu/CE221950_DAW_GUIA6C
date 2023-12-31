document.addEventListener("DOMContentLoaded", function () {
    var boton = document.getElementById("validar");

    boton.addEventListener("click", function () {
        var tipo = document.frmdatos.seltipo.options[frmdatos.seltipo.selectedIndex].value;
        var dato = document.frmdatos.txtdato.value;
        var validar = false;
        var re = null;

        if (dato == null || dato == "" || dato.length == 0) {
            alert("No se ha ingresado ningún valor");
            return 0;
        }

        switch (tipo) {
            case "ipv4":
                re = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
                if (re.test(dato)) {
                    validar = true;
                }
                break;
            case "url":
                re = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
                if (re.test(dato)) {
                    validar = true;
                }
                break;
            case "email":
                re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (re.test(dato)) {
                    validar = true;
                }
                break;
            default:
                alert("El tipo de dato seleccionado no puede ser procesado");
                break;
        }

        if (validar == true) {
            alert("El valor " + dato + " de " + tipo + " ingresado es válido");
        } else if (validar == false) {
            alert("El valor " + dato + " de " + tipo + " ingresado es inválido");
        }
    });
});