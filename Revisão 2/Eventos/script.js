document.addEventListener('DOMContentLoaded', (event) => {
    // Evento de Load
    document.getElementById('loadMessage').innerText = 'A página foi carregada!';
});

// Evento de Clique
document.getElementById('clickButton').addEventListener('click', () => {
    document.getElementById('clickMessage').innerText = 'Botão foi clicado!';
});

// Evento de Mouseover
document.getElementById('hoverDiv').addEventListener('mouseover', () => {
    document.getElementById('hoverMessage').innerText = 'Mouse está sobre a área!';
});

document.getElementById('hoverDiv').addEventListener('mouseout', () => {
    document.getElementById('hoverMessage').innerText = '';
});

// Evento de Keydown
document.getElementById('keyInput').addEventListener('keydown', (event) => {
    document.getElementById('keyMessage').innerText = `Você pressionou a tecla: ${event.key}`;
});

// Evento de Scroll
window.addEventListener('scroll', () => {
    document.getElementById('scrollMessage').innerText = 'Você está rolando a página!';
});
