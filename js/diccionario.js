document.addEventListener("DOMContentLoaded", function () {
    var wordL = document.getElementById("wordList");
    var search = document.getElementById("searchInput");
    var btnDefinicion = document.getElementById("showDefinitionButton");
    var txtDefinicion = document.getElementById("definition");

    // Definir el diccionarioo con palabras y definiciones
    var diccionario = {
        'Antropología': 'Ciencia que estudia los aspectos físicos y las manifestaciones sociales y culturales de las comunidades humanas.',
        'Añejo': ' Que tiene mucho tiempo',
        'Bamba': 'Ritmo bailable iberoamericano.',
        'Bohemio': 'Dicho de un modo de vida',
        'Carracuca': 'Para ponderar la situación angustiosa o comprometida de alguien.',
        'Corán': 'Libro en que se contienen las revelaciones de Dios a Mahoma',
        'DNA': 'Del ingl. DNA, sigla de deoxyribonucleic acid, ácido desoxirribonucleico.',
        'DVD': 'Disco óptico capaz de contener en forma codificada gran cantidad de imágenes, sonidos o datos.',
        'Melómano': 'Amante de la música',
        'Paráclito': 'En la religión cristiana, Espíritu Santo, enviado para consolar a los fieles.',
        // Agrega más palabras y definiciones aquí...
    };

    // Cargar las palabras en el cuadro de lista
    for (var word in diccionario) {
        wordL.options[wordL.options.length] = new Option(word);
    }

    // Función para mostrar la definición al hacer doble clic en una palabra
    wordL.addEventListener("dblclick", function () {
        var sltdWord = wordL.value;
        var definition = diccionario[sltdWord];

        if (definition) {
            txtDefinicion.textContent = definition;
        } else {
            txtDefinicion.textContent = "No se encontró una definición para esta palabra.";
        }
    });

    btnDefinicion.addEventListener("click", function () {
        var sltdWord = wordL.value;
        var definition = diccionario[sltdWord];

        if (definition) {
            txtDefinicion.textContent = definition;
        } else {
            txtDefinicion.textContent = "No se encontró una definición para esta palabra.";
        }
    });

    search.addEventListener("keyup", function () {
        var searchText = search.value.trim().toLowerCase();

        wordL.options.length = 0; // Limpiar la lista

        if (searchText === "") {
            for (var word in diccionario) {
                wordL.options[wordList.options.length] = new Option(word);
            }
        } else {
            for (var word in diccionario) {
                if (word.toLowerCase().includes(searchText)) {
                    wordL.options[wordList.options.length] = new Option(word);
                }
            }
        }
    });
});
