

function troca (array, indice){
    let itemAnalise = array[indice];
    let itemAnterior = array[indice - 1];

    array[indice] = itemAnterior
    array[indice - 1] = itemAnalise
}

module.exports = troca;