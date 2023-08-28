const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";



const posicaoNaEstante = livros.findIndex((livro) => {
    return livro === nomeDoLivro;
});

if (posicaoNaEstante === -1) {
    console.log("Livro não encontrado");
}
else {
    console.log("Livro encontrado na posição: ", posicaoNaEstante + 1);
}
