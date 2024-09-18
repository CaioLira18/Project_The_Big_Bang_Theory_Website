document.addEventListener("DOMContentLoaded", function() {
    const botoesPersonagens = document.querySelectorAll(".botao-personagem");

    // Adiciona um event listener para cada botão de personagem
    botoesPersonagens.forEach(function(botao) {
        botao.addEventListener("click", function() {
            // Obtém o número do personagem do atributo 'personagem' do botão
            const personagem = botao.getAttribute("personagem");

            // Atualiza a imagem grande do personagem
            document.getElementById("imagem-personagem").src = `/src/ImagemPersonagem/${personagem}.png`;

            // Substitui o título e a biografia do personagem conforme necessário
            switch (personagem) {
                case "1":
                    document.querySelector(".personagem-title").textContent = "Sheldon";
                    document.querySelector(".personagem-bio").textContent = "Sheldon Cooper, interpretado pelo ator Jim Parsons, é uma das figuras mais distintas e memoráveis de ' The Big Bang Theory '. Ele é um físico teórico extremamente talentoso, porém socialmente desajeitado e muitas vezes egocêntrico. Sheldon é retratado como um gênio excêntrico, com uma mente brilhante e um comportamento peculiar.";
                    break;
                case "2":
                    document.querySelector(".personagem-title").textContent = "Penny";
                    document.querySelector(".personagem-bio").textContent = "Penny, interpretada pela atriz Kaley Cuoco, é uma personagem central na série de comédia ' The Big Bang Theory '. Ela é apresentada como uma bela jovem que se muda para o apartamento ao lado dos físicos Leonard Hofstadter e Sheldon Cooper, dando início a uma relação que se torna o cerne da série.";
                    break;
                case "3":
                    document.querySelector(".personagem-title").textContent = "Leonard";
                    document.querySelector(".personagem-bio").textContent = "Leonard Hofstadter, interpretado pelo ator Johnny Galecki, é um dos personagens principais de ' The Big Bang Theory '. Ele é um físico experimental talentoso e inteligente, com uma personalidade mais equilibrada em comparação com seus colegas de apartamento, Sheldon e Raj, e seu amigo Howard";
                    break;
                case "4":
                    document.querySelector(".personagem-title").textContent = "Raj";
                    document.querySelector(".personagem-bio").textContent = "Rajesh 'Raj' Koothrappali, interpretado pelo ator Kunal Nayyar, é um dos personagens principais e mais carismáticos de 'The Big Bang Theory'. Raj é um astrofísico indiano altamente talentoso, porém inicialmente retratado como extremamente tímido ao redor das mulheres, sofrendo de uma condição chamada mutismo seletivo que o impede de falar com mulheres a menos que esteja sob a influência de álcool";
                    break;
                case "5":
                    document.querySelector(".personagem-title").textContent = "Howard";
                    document.querySelector(".personagem-bio").textContent = "Howard Wolowitz, interpretado por Simon Helberg, é um dos personagens principais de The Big Bang Theory. Ele é um engenheiro aeroespacial que se destaca por seu estilo único, frequentemente usando roupas coloridas e um famoso chapéu. Conhecido por seu senso de humor sarcástico e por suas piadas muitas vezes inusitadas, Howard também é um personagem que tem um grande amor por tecnologia e cultura pop.";
                    break;
                case "6":
                    document.querySelector(".personagem-title").textContent = "Bernadette";
                    document.querySelector(".personagem-bio").textContent = "Bernadette Rostenkowski-Wolowitz, interpretada por Melissa Rauch, é uma das personagens centrais de The Big Bang Theory. Ela é uma microbiologista altamente inteligente e ambiciosa, conhecida por sua voz aguda e seu jeito assertivo. Inicialmente apresentada como colega de trabalho de Howard, sua relação evolui rapidamente para um romance, culminando em seu casamento.";
                    break;
                case "7":
                    document.querySelector(".personagem-title").textContent = "Amy";
                    document.querySelector(".personagem-bio").textContent = "Amy Farrah Fowler, interpretada por Mayim Bialik, é uma personagem fundamental em The Big Bang Theory. Introduzida como uma possível parceira para Sheldon, ela é uma neurocientista brilhante e possui uma personalidade peculiar que combina traços sociais inusitados com uma inteligência aguçada.";
                    break;
                default:
                    // Caso padrão, se não houver correspondência
                    document.getElementById.querySelector("imagem-personagem").textContent = "Imagem Não Selecionada"
                    document.querySelector(".personagem-title").textContent = "Personagem Desconhecido";
                    document.querySelector(".personagem-bio").textContent = "Biografia não encontrada.";
            }
        });
    });
});
