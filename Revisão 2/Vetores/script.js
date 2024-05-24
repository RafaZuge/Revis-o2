// Função para criar um array
function createArray() {
    let fruits = ['Maçã', 'Banana', 'Laranja'];
    document.getElementById('createArrayResult').innerText = `Array Criado: [${fruits.join(', ')}]`;
}

// Função para adicionar um elemento ao array usando push
function pushExample() {
    let fruits = ['Maçã', 'Banana', 'Laranja'];
    fruits.push('Uva');
    document.getElementById('pushResult').innerText = `Array Após push: [${fruits.join(', ')}]`;
}

// Função para remover o último elemento do array usando pop
function popExample() {
    let fruits = ['Maçã', 'Banana', 'Laranja'];
    fruits.pop();
    document.getElementById('popResult').innerText = `Array Após pop: [${fruits.join(', ')}]`;
}

// Função para mapear os elementos do array usando map
function mapExample() {
    let numbers = [1, 2, 3, 4];
    let squared = numbers.map(num => num * num);
    document.getElementById('mapResult').innerText = `Array Original: [${numbers.join(', ')}] | Array mapeado: [${squared.join(', ')}]`;
}

// Função para filtrar os elementos do array usando filter
function filterExample() {
    let numbers = [1, 2, 3, 4, 5, 6];
    let even = numbers.filter(num => num % 2 === 0);
    document.getElementById('filterResult').innerText = `Array Original: [${numbers.join(', ')}] | Elementos filtrados (pares): [${even.join(', ')}]`;
}
