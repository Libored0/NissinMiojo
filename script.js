document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'R') {
        window.location.href = 'https://www.nissin.com.br/receitas/';
    } else if (event.ctrlKey && event.key === 'c') {
        window.location.href = 'https://www.nissin.com.br/fale-conosco/';
    } else if (event.ctrlKey && event.key === 'b') {
        window.location.href = 'https://www.nissin.com.br/sobre-nos/';
    } else if (event.ctrlKey && event.key === 'i') {
        // Substitua o link abaixo pelo link original da sua imagem
        window.open('https://www.nissin.com.br/receita/tacolamenpicante/', '_blank');
    } else if (event.ctrlKey && event.key === 'm') {
        document.getElementById('message').focus();
    }
});

// Lidando com a submissão do formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado normalmente
    // Aqui você pode adicionar a lógica para processar o formulário, como enviar uma requisição AJAX
    alert('Mensagem enviada!');
    // Resetando o formulário após o envio
    document.getElementById('message').value = '';
});

// JavaScript para o carrossel de imagens
// JavaScript para o carrossel de imagens
// JavaScript para o carrossel de imagens
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');

let counter = 1;
const size = slides[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Função para mover para o próximo slide
const nextSlide = () => {
    if (counter >= slides.length - 1) {
        counter = 1;
        slider.style.transition = "none";
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    counter++;
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
};

// Função para mover para o slide anterior
const prevSlide = () => {
    if (counter <= 0) {
        counter = slides.length - 2;
        slider.style.transition = "none";
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    counter--;
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
};

// Função para rolar automaticamente as imagens em loop
const autoSlide = () => {
    setInterval(() => {
        nextSlide();
    }, 3000); // Altere o tempo de rolagem aqui (em milissegundos)
};

autoSlide();



