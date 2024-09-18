document.addEventListener("DOMContentLoaded", function() {
    const botoesTemporadas = document.querySelectorAll(".botao-temporadas");

    // Adiciona um event listener para cada botão de temporada
    botoesTemporadas.forEach(function(botao) {
        botao.addEventListener("click", function() {
            // Obtém o número da temporada do atributo 'data-temporada' do botão
            const numeroTemporada = botao.getAttribute("data-temporada");

            // Atualiza a imagem grande e o texto da temporada
            document.getElementById("imagem-grande").src = `/src/ImagemGrande/${numeroTemporada}.png`;
            document.getElementById("titulo-temporada").textContent = `Temporada ${numeroTemporada}`;

            // Substitua as sinopses conforme necessário
            switch (numeroTemporada) {
                case "1":
                    document.getElementById("sinopse-temporada").textContent = "Leonard e Sheldon são físicos brilhantes que entendem como o universo funciona. Mas nada dessa inteligência ajuda os dois a interagir com as pessoas. Tudo isso começa a mudar quando uma jovem bela e liberal chamada Penny se muda para o apartamento ao lado. Sheldon, o colega de quarto de Leonard, contenta-se a passar as noites jogando com os amigos socialmente disfuncionais dos dois, os cientistas Wolowitz e Koothrappali. Mas Leonard vê em Penny todo um novo universo de possibilidades... incluindo o amor.";
                    break;
                case "2":
                    document.getElementById("sinopse-temporada").textContent = "Enquanto Sheldon (Jim Parsons) continua satisfeito e contente em passar suas noites jogando Klingon Boggle com Howard (Simon Helberg) e Raj (Kunal Nayyar), Leonard (Johnny Galecki) interpreta a chegada de Penny (Kaley Cuoco) como um novo universo de possibilidades, inclusive as românticas...";
                    break;
                case "3":
                    document.getElementById("sinopse-temporada").textContent = "Após retornarem de uma temporada de pesquisas no Polo Norte, Leonard (Johnny Galecki) começa um relacionamento com Penny (Kaley Cuoco) e Howard (Simon Helberg) engata um namoro com Bernadette (Melissa Rauch). Enquanto isso, Sheldon (Jim Parsons) reencontra seu arqui-inimigo: o famoso Wil Wheaton.";
                    break;
                case "4":
                    document.getElementById("sinopse-temporada").textContent = "Na Quarta temporada, Leonard e Penny tentam reacender seu relacionamento, mas encontram vários obstáculos. Sheldon lida com sua obsessão pelo controle enquanto tenta manter seu status quo. Howard se envolve em um relacionamento sério com Bernadette, enquanto Raj tenta superar sua timidez com mulheres. A temporada termina com Leonard e Penny se beijando, indicando uma possível retomada de seu romance.";
                    break;
                case "5":
                    document.getElementById("sinopse-temporada").textContent = "A Relação entre Leonard e Penny enfrenta altos e baixos, enquanto Sheldon e Amy começam a explorar seu relacionamento de uma maneira mais profunda. Howard e Bernadette se preparam para o casamento, enquanto Raj começa a desenvolver alguma autonomia em sua vida amorosa. A temporada culmina com o casamento de Howard e Bernadette."
                    break;
                case "6":
                    document.getElementById("sinopse-temporada").textContent = "Esta temporada explora as consequências do relacionamento entre Sheldon e Amy, que se torna mais profundo, mas ainda repleto de desafios. Leonard e Penny enfrentam os altos e baixos de seu romance, enquanto Howard e Bernadette se preparam para o casamento. A temporada também introduz novas dinâmicas, como a relação de amizade entre Raj e uma nova personagem, e as consequências do espaço entre os amigos."
                    break;
                case "7":
                    document.getElementById("sinopse-temporada").textContent = "Com o casamento de Howard e Bernadette, os personagens começam a lidar com a vida a dois. Sheldon luta com suas inseguranças em relação ao relacionamento e ao conceito de mudanças, enquanto Leonard e Penny finalmente se comprometem. Raj começa a superar sua dificuldade em relacionamentos e a série traz novas situações engraçadas e emocionais, explorando a evolução dos laços entre os amigos."
                    break;
                case "8":
                    document.getElementById("sinopse-temporada").textContent = "A Temporada é marcada por desafios e mudanças nos relacionamentos. Sheldon enfrenta a dificuldade de lidar com a ausência de Amy, enquanto Leonard e Penny se preparam para o casamento. Howard e Bernadette enfrentam as complicações da vida de casados, especialmente com a chegada de um novo membro na família. Novos personagens e histórias contribuem para o humor e o desenvolvimento dos arcos narrativos."
                    break;
                case "9":
                        document.getElementById("sinopse-temporada").textContent = "A Nona temporada foca nas consequências do relacionamento de Sheldon e Amy após um hiato, enquanto Leonard e Penny finalmente se casam. Os casais enfrentam desafios e aprendem sobre compromisso e comunicação. Raj também encontra novos desafios amorosos, e o grupo continua a se apoiar em suas aventuras científicas e pessoais, culminando em momentos de crescimento e risadas."
                        break;
                case "10":
                        document.getElementById("sinopse-temporada").textContent = "Nesta temporada, a série lida com as transições da vida dos personagens. Sheldon e Amy navegam em seu relacionamento pós-noivado, enquanto Leonard e Penny se adaptam à vida de casados. Howard e Bernadette enfrentam a paternidade. A série traz à tona questões de amizade e lealdade, ao mesmo tempo que oferece muitas risadas, culminando em momentos emocionantes que preparam o terreno para as temporadas finais."
                        break;
                case "11":
                        document.getElementById("sinopse-temporada").textContent = "Os Relacionamentos dos personagens evoluem significativamente. Sheldon e Amy finalmente se casam em uma cerimônia que mistura a tradição com o toque nerd característico do casal. Leonard e Penny enfrentam os desafios do casamento, enquanto Howard e Bernadette lidam com as responsabilidades da paternidade. A amizade do grupo é testada com novas dinâmicas, e novos personagens, como a mãe de Sheldon, introduzem mais humor e conflitos."
                        break;
                case "12":
                        document.getElementById("sinopse-temporada").textContent = "A Temporada final traz um fechamento emocional para a série. Sheldon e Amy enfrentam novos desafios em sua vida como casal, especialmente quando Sheldon ganha o prêmio Nobel. Leonard e Penny se ajustam à nova fase da vida e aos dilemas que surgem com a paternidade. Os amigos refletem sobre suas conquistas e o futuro, culminando em momentos nostálgicos e significativos. A série encerra com uma celebração das amizades e das jornadas de cada personagem, deixando uma mensagem sobre crescimento e amor."
                        break;
                default:
                    document.getElementById("sinopse-temporada").textContent = "Sinopse não encontrada.";
            }
        });
    });
});


// Espera até que o conteúdo da página seja carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as divs que você deseja animar
    var elementsToAnimate = document.querySelectorAll('.icones, .botoes, .box, .botao-personagem, .bg, .cabecalho, .box-image, .personagens');

    // Define a opacidade inicial das divs como 0
    elementsToAnimate.forEach(function(element) {
        element.style.opacity = '0';
    });

    // Define um intervalo de tempo (em milissegundos) após o qual a animação será iniciada
    var delay = 2000; // 2000 milissegundos = 2 segundos

    // Define a função para iniciar a animação após o intervalo de tempo especificado
    setTimeout(function() {
        // Gradualmente aumenta a opacidade de cada div ao longo de 1 segundo (1000 milissegundos)
        var fadeEffect = setInterval(function () {
            elementsToAnimate.forEach(function(element) {
                // Verifica se a opacidade é menor que 1
                if (!element.style.opacity) {
                    element.style.opacity = 0;
                }
                // Incrementa a opacidade em 0.01
                element.style.opacity = parseFloat(element.style.opacity) + 0.01;

                // Verifica se a opacidade atingiu 1
                if (element.style.opacity >= 1) {
                    clearInterval(fadeEffect);
                }
            });
        }, 10); // Aumenta a opacidade a cada 10 milissegundos
    }, delay); // Inicia a animação após o intervalo de tempo especificado
});