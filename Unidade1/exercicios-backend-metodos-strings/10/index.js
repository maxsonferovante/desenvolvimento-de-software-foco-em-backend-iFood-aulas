const nomeArquivo = 'Foto da Familia.pdf';


function obterExtensao(nomeArquivo) {
    return nomeArquivo.split('.')[1];
}

function validadorExtensao(nomeArquivo) {
    const extensoes = ['jpg', 'png', 'jpeg', 'gif']

    const extensaoDoArquivo = obterExtensao(nomeArquivo);

    for (let extensao of extensoes) {
        if (extensao !== extensaoDoArquivo) {
            return "Arquivo inválido";
        }
    }
    return "Arquivo válido";
}

console.log(validadorExtensao(nomeArquivo));