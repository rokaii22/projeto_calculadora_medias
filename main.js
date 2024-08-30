const form = document.getElementById('form-atividade');
const imgAprovado = './images/aprovado.png'; // Caminho correto para a imagem de "aprovado"
const imgReprovado = './images/reprovado.png'; // Caminho correto para a imagem de "reprovado"
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">reprovado</span>';
const notaMinima = parseFloat(prompt("digite a nota minima:"));


form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionarLinha();
    atualizaMediaFinal();
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value)); // Converte a string para número

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td><img src="${parseFloat(inputNotaAtividade.value) >= notaMinima ? spanAprovado : spanReprovado}" alt="${parseFloat(inputNotaAtividade.value) >= 7 ? 'Aprovado' : 'Reprovado'}"></td>`;
    linha += '</tr>';

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML += linha;

    linhas +- linha;
    }

  
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? 'Aprovado' : 'Reprovado';
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}
