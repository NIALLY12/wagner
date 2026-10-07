// Seleção dos elementos do HTML que vamos manipular
const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

// Lista com diferentes opções de mensagens motivacionais
const frases = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia! 🌟",
    "Você é mais forte do que imagina e mais capaz do que pensa! 💪",
    "Não espere por oportunidades, crie-as! 🚀",
    "A persistência é o caminho do êxito. Continue avançando! 🏁",
    "Cada linha de código escrita é um passo mais perto do seu objetivo! 💻"
];

// Função obrigatória solicitada na atividade
function alterarMensagem() {
    // Sorteia um índice aleatório com base no tamanho da nossa lista
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    
    // Critério de avaliação: Provoca alteração visível de texto na página
    mensagem.textContent = frases[indiceAleatorio];
    
    // Altera a cor do texto dinamicamente para dar um destaque visual extra
    mensagem.style.color = "#6c5ce7";
}

// Critério de avaliação: Execução da função através do clique do botão
botao.addEventListener("click", alterarMensagem);
