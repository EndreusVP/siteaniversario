let coracao = "\u2764"
let slides = [
    "imagens/imagem1.jpg",
    "imagens/imagem2.jpg",
    "imagens/imagem3.jpg",
    "imagens/imagem4.jpg",
    "imagens/imagem6.jpg",
    "imagens/imagem7.jpg",
    "imagens/imagem8.jpg",
    "imagens/imagem9.jpg",
    "imagens/imagem10.jpg",
];
const versos = [
    "Dois anos, meu amor…",
    "e mesmo longe, te sinto aqui.",
    "Cada palavra tua me abraça,",
    "teu “oi” me faz sorrir.",
    "",
    "A gente não se vê sempre,",
    "mas nunca deixo de te sentir.",
    "Nosso amor é feito de presença,",
    "mesmo sem poder te ouvir.",
    "",
    "Tem quem duvide do amor à distância,",
    "mas o nosso é tão real.",
    "Você é minha paz, meu sonho,",
    "meu acaso mais especial.",
    "",
    "Que venham mais anos juntos,",
    "mais formas de nos amar.",
    "Mesmo longe dos teus braços,",
    "te tenho em qualquer lugar."
];

let poema = document.getElementById("poema")
let texto = "Feliz Aniversario";
let texto2 = "Pessoinha" + coracao;
const cumprimento = document.getElementById("cumprimento");
let cumprimento2 = document.getElementById("cumprimento2");
let imagemSlide = document.getElementById("imagemSlide");
let index = 0;
let indexPoema = 0;
let indexSlide = 0;

function escreverGradualmente() {
    if (index < texto.length) {
        cumprimento.textContent += texto.charAt(index);
        cumprimento2.textContent += texto2.charAt(index);
        index++;
        setTimeout(escreverGradualmente, 100);
    }
}

const escreverPoema = () => {
    if (indexPoema < versos.length) {
        poema.innerHTML += versos[indexPoema] + "<br>";
        indexPoema++;
        setTimeout(escreverPoema, 100);
    }
}

const proximoSlide = () => {
    if (indexSlide < slides.length) {
        imagemSlide.src = slides[indexSlide];
        indexSlide++;
    } else {
        indexSlide = 0;
        imagemSlide.src = slides[indexSlide];
    }

}

const voltarSlide = () => {
    indexSlide--;
    if (indexSlide < 0) {
        indexSlide = slides.length - 1;
    }
    imagemSlide.src = slides[indexSlide];
}

escreverPoema();
escreverGradualmente();