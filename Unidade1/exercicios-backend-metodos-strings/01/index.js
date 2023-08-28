const comentario = "Esse COVID é muito perigoso!";


function pesquisaPalavrasBloqueadas(comentario) {
    if (comentario.includes("pandemia") || comentario.toLowerCase().includes("covid")) {
        return "Comentário bloqueado por conter palavras proibidas";
    }
    return "Comentário autorizado";
}

console.log(pesquisaPalavrasBloqueadas(comentario));
