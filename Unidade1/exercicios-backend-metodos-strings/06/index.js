const celular = 9182299627;


function formatarCelular(celular) {
    celular = celular.toString();

    if (celular.length == 8) {
        celular = "9" + celular;
    }
    else if (celular.length == 10) {
        celular = celular.substring(0, 2) + "9" + celular.substring(2, 10);
    }


    if (celular.length == 11) {
        // (71) 9 9991-8888
        return `(${celular.substring(0, 2)}) ${celular.substring(2, 3)} ${celular.substring(3, 7)}-${celular.substring(7, 11)}`;
    }
    else if (celular.length == 9) {
        // 9 9991-8888
        return `(${celular.substring(0, 1)}) ${celular.substring(1, 5)}-${celular.substring(5, 9)}`;
    }
}

console.log(formatarCelular(celular));