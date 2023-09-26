document.addEventListener("DOMContentLoaded", function () {
    var fileInput = document.getElementById("fileInput");
    var validateButton = document.getElementById("validateButton");
    var result = document.getElementById("result");

    validateButton.addEventListener("click", function () {
        var name = fileInput.value;
        var Extension = name.split('.').pop().toLowerCase();

        // Expresión regular para validar las extensiones de archivo permitidas
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if (!allowedExtensions.exec(name)) {
            result.textContent = "Error: El archivo seleccionado no es una imagen válida.";
            result.style.color = "red";
        } else {
            result.textContent = "El archivo seleccionado es una imagen válida.";
            result.style.color = "green";
        }
    });
});