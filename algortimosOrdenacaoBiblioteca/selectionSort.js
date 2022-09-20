const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livro, atual);
    
    let livroAtual = livros[atual];
    console.log(atual);
    console.log(menor);
    console.log("livro atual é ", livros[atual]);
    let livroMenorPreco = livros[menor];
    console.log("livro menor preço é ", livros[menor]);

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual

    
}

console.log(livros);