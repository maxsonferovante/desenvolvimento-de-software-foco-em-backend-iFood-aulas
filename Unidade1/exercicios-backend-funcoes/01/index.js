const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ],
    corrigirProva: function () {
        let nota = 0;
        let acertos = 0;
        for (let i = 0; i < this.questoes.length; i++) {
            if (this.questoes[i].resposta === this.questoes[i].correta) {
                nota += 2;
                acertos++;
            }
        }
        //O aluno(a) João acertou 3 questões e obteve nota 6
        console.log(`O aluno(a) ${this.aluno} acertou ${acertos} ${acertos === 1 ? "questão" : "questões"} e obteve nota ${nota}`);
    }
};

prova.corrigirProva();


