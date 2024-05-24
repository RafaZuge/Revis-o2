// Função Nomeada
function namedFunctionExample() {
    document.getElementById('namedFunctionResult').innerText = 'Olá! Eu sou uma função nomeada.';
}

// Função Anônima
document.getElementById('anonymousFunctionButton').onclick = function() {
    document.getElementById('anonymousFunctionResult').innerText = 'Olá! Eu sou uma função anônima.';
};

// Arrow Function
const arrowFunctionExample = () => {
    document.getElementById('arrowFunctionResult').innerText = 'Olá! Eu sou uma arrow function.';
};

// Função Imediata (IIFE)
(function() {
    document.getElementById('iifeResult').innerText = 'Olá! Eu sou uma IIFE (Immediately Invoked Function Expression).';
})();
