// Manipulação de Strings

// Função para concatenar strings
function concatStrings() {
    // Define a primeira string
    let str1 = 'Hello';
    // Define a segunda string
    let str2 = 'World';
    // Concatena as duas strings com um espaço entre elas e um ponto de exclamação no final
    let result = str1 + ' ' + str2 + '!';
    // Exibe o resultado concatenado no elemento HTML com o ID 'concatResult'
    document.getElementById('concatResult').innerText = `Resultado: ${result}`;
}

// Função para dividir strings
function splitString() {
    // Define uma string com elementos separados por vírgula e espaço
    let str = 'Apple, Banana, Cherry';
    // Divide a string em um array de substrings usando a vírgula e espaço como separador
    let result = str.split(', ');
    // Exibe o array resultante no elemento HTML com o ID 'splitResult', juntando os elementos com vírgula e espaço
    document.getElementById('splitResult').innerText = `Resultado: [${result.join(', ')}]`;
}

// Função para substituir substring
function replaceString() {
    // Define uma string inicial
    let str = 'Hello World';
    // Substitui a substring 'World' por 'JavaScript' na string inicial
    let result = str.replace('World', 'JavaScript');
    // Exibe a string resultante no elemento HTML com o ID 'replaceResult'
    document.getElementById('replaceResult').innerText = `Resultado: ${result}`;
}

// Manipulação de Datas

// Função para obter a data atual
function currentDate() {
    // Cria um objeto de data representando a data e hora atuais
    let date = new Date();
    // Exibe a data atual no formato de string no elemento HTML com o ID 'currentDateResult'
    document.getElementById('currentDateResult').innerText = `Data Atual: ${date.toDateString()}`;
}

// Função para adicionar dias à data
function addDays() {
    // Cria um objeto de data representando a data e hora atuais
    let date = new Date();
    // Adiciona 5 dias à data atual
    date.setDate(date.getDate() + 5);
    // Exibe a nova data, 5 dias depois, no formato de string no elemento HTML com o ID 'addDaysResult'
    document.getElementById('addDaysResult').innerText = `Data + 5 Dias: ${date.toDateString()}`;
}

// Função para formatar a data
function formatDate() {
    // Cria um objeto de data representando a data e hora atuais
    let date = new Date();
    // Obtém o dia do mês e converte para string, garantindo que tenha pelo menos dois dígitos
    let day = date.getDate().toString().padStart(2, '0');
    // Obtém o mês (lembrando que os meses são indexados a partir de 0, por isso +1) e converte para string, garantindo que tenha pelo menos dois dígitos
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    // Obtém o ano como string
    let year = date.getFullYear();
    // Formata a data no formato 'DD/MM/YYYY'
    let formattedDate = `${day}/${month}/${year}`;
    // Exibe a data formatada no elemento HTML com o ID 'formatDateResult'
    document.getElementById('formatDateResult').innerText = `Data Formatada: ${formattedDate}`;
}
