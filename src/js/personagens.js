document.addEventListener("DOMContentLoaded", function() {
    const botoesPersonagens = document.querySelectorAll(".botao-personagem");

    // Adiciona um event listener para cada botão de personagem
    botoesPersonagens.forEach(function(botao) {
        botao.addEventListener("click", function() {
            // Obtém o número do personagem do atributo 'personagem' do botão
            const personagem = botao.getAttribute("personagem");

            // Atualiza a imagem grande do personagem
            document.getElementById("imagem-personagem").src = `/src/ImagemGrande/${personagem}.png`;

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
                    document.querySelector(".personagem-bio").textContent = "Howard Bio";
                    break;
                case "6":
                    document.querySelector(".personagem-title").textContent = "Bernadette";
                    document.querySelector(".personagem-bio").textContent = "Bernadette Bio";
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
