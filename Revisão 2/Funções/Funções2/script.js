// Função Nomeada para calcular a média
function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    const media = calcularNotaMedia(nota1, nota2, nota3, nota4);
    const status = determinarStatus(media);

    document.getElementById('resultado').innerText = `Média: ${media.toFixed(2)} - ${status}`;
}

// Função Nomeada para calcular a média das notas
function calcularNotaMedia(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4;
}

// Arrow Function para determinar o status do aluno
const determinarStatus = (media) => {
    if (media >= 7) {
        return media > 7 ? 'Aprovado! Parabéns!' : 'Aprovado Satisfatoriamente';
    } else if (media >= 5) {
        return 'Em Recuperação';
    } else {
        return 'Reprovado';
    }
};

// Função Imediata (IIFE) para exibir uma mensagem no console quando a página carrega
(function() {
    console.log('Página de cálculo de média carregada com sucesso!');
})();
