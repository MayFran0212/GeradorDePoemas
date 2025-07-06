// #containerTemas #temas #tema1 #localPoema
const botaoGerador = document.querySelector("#botaoGerador");
const localPoema = document.querySelector("#localPoema");
const botaoCopiar = document.querySelector("#botaoCopiar");

const botaoLM = document.querySelector("#lightMode");
const botaoDM = document.querySelector("#darkMode");

const body = document.querySelector("body");

// --- CATEGORIAS DE FRASES ---

// Romântico
const inicioRomantico = [
  "Seu olhar, um farol na escuridão.",
  "Meu coração te chama em silêncio.",
  "Cada toque seu, um universo novo.",
  "No jardim da alma, floresce o nosso amor.",
  "Seu nome é melodia em meus pensamentos.",
  "O tempo para quando você chega.",
  "Em seus braços, encontro meu lar.",
  "Um suspiro, um desejo, uma história.",
  "Nossos destinos, entrelaçados para sempre.",
  "A mais bela canção é a sua presença.",
];
const meioRomantico = [
  "E a paixão arde, chama que não se apaga.",
  "Nossos segredos sussurrados ao vento.",
  "Promessas eternas gravadas na pele.",
  "Em cada abraço, a certeza de um amanhã.",
  "A alma se eleva, leve e sem medo.",
  "O mundo gira em torno do seu sorriso.",
  "Compartilhando sonhos e a mais pura verdade.",
  "No silêncio da noite, a sua voz ecoa.",
  "A cada batida, seu nome em meu peito.",
  "Sob o mesmo céu, um só coração.",
];
const fimRomantico = [
  "Amor que transcende qualquer fim.",
  "Assim, nosso elo se torna eterno.",
  "Para sempre em meu ser, seu amor.",
  "A felicidade plena, finalmente encontrada.",
  "Eternos amantes, sob o sol ou a lua.",
  "A luz de um amor que nunca se esvai.",
  "Pois em você, a vida faz sentido.",
  "Selando nossa história, um beijo final.",
  "E a poesia de nós, escrita para sempre.",
  "Em cada amanhecer, o nosso paraíso.",
];

// Natureza
const inicioNatureza = [
  "O sol se esconde no horizonte.",
  "A brisa sussurra entre as árvores.",
  "Nas profundezas da floresta antiga.",
  "Gotas de orvalho beijam a grama.",
  "O murmúrio do rio acalma a alma.",
  "Pássaros cantam, saudando o dia.",
  "Montanhas imponentes, guardiãs do tempo.",
  "O mar se agita em eterno movimento.",
  "Flores silvestres desabrocham.",
  "Nuvens dançam em um céu azul.",
];
const meioNatureza = [
  "Enquanto a lua surge, prateando a paisagem.",
  "Entre as folhas secas, a vida persiste.",
  "Em meio ao silêncio, a natureza fala.",
  "A terra respira, fértil e viva.",
  "Raios de sol filtram pela folhagem.",
  "O cheiro da chuva que acabou de cair.",
  "A força bruta da tempestade se revela.",
  "O balé das borboletas coloridas.",
  "Cores vibrantes pintam a paisagem.",
  "O eco da vida selvagem distante.",
];
const fimNatureza = [
  "Pintando o céu de anil e dourado.",
  "Contando histórias antigas ao vento.",
  "O mundo encontra a paz em seu abraço.",
  "A plenitude de um ciclo sem fim.",
  "E a beleza crua de um mundo intocado.",
  "Assim, a vida segue seu curso natural.",
  "O silêncio absoluto que acalma.",
  "Deixando sua marca na eternidade.",
  "O sussurro do vento leva a mensagem.",
  "O espetáculo da natureza, enfim, completo.",
];

// Melancólico
const inicioMelancolico = [
  "A névoa cobre a alma.",
  "Um suspiro pesado escapa.",
  "No crepúsculo de um dia findo.",
  "Lembranças antigas ecoam.",
  "Gotas de chuva na janela.",
  "O vazio preenche o espaço.",
  "Silêncio que grita por dentro.",
  "O peso da solidão aperta.",
  "Caminhos sem direção aparente.",
  "Uma sombra longa se estende.",
];
const meioMelancolico = [
  "E a tristeza se aninha no peito.",
  "Em meio a sonhos desfeitos.",
  "A esperança, um fio tênue.",
  "Lágrimas discretas rolam.",
  "O tempo parece arrastar-se.",
  "Cores desbotam em tons de cinza.",
  "Perdido em pensamentos sombrios.",
  "O peso de um adeus não dito.",
  "A ausência que tanto dói.",
  "O mundo, um palco sem luz.",
];
const fimMelancolico = [
  "Numa melancolia sem fim.",
  "Deixando apenas o vazio.",
  "E a saudade que não se cala.",
  "Um eco distante na memória.",
  "A solidão, companheira fiel.",
  "O fim de uma história triste.",
  "Em silêncio, a dor permanece.",
  "A lágrima que não seca.",
  "E a alma, enfim, se resigna.",
  "O adeus sussurrado ao vento.",
];

// Otimista
const inicioOtimista = [
  "O sol brilha, um novo dia.",
  "A esperança surge no horizonte.",
  "Cada passo, uma nova chance.",
  "O coração transborda alegria.",
  "Acredito no poder do amanhã.",
  "Um sorriso ilumina o rosto.",
  "A vida me chama, cheia de cor.",
  "Novos caminhos se abrem.",
  "A força de um espírito livre.",
  "Com fé, tudo é possível.",
];
const meioOtimista = [
  "E o futuro se mostra brilhante.",
  "Superando desafios com garra.",
  "Acreditando sempre no melhor.",
  "A luz que guia em cada jornada.",
  "A felicidade é a melhor escolha.",
  "Renascer a cada novo amanhecer.",
  "O mundo, um convite à grandeza.",
  "A positividade que contagia.",
  "Otimismo que move montanhas.",
  "Cultivando a gratidão no peito.",
];
const fimOtimista = [
  "Com um futuro cheio de luz.",
  "A vitória, enfim, alcançada.",
  "A alegria que nunca se esgota.",
  "Um horizonte de infinitas cores.",
  "A vida, uma eterna celebração.",
  "Com o coração cheio de esperança.",
  "O sucesso, meu destino certo.",
  "A força para ir além.",
  "O sorriso que nunca se apaga.",
  "E a vida me abraça, gentilmente.",
];

//Contemplativo
const inicioContemplativo = [
  "No silêncio da madrugada.",
  "Observo o mundo girar.",
  "Em profunda meditação.",
  "A mente flutua sem pressa.",
  "Respirando a paz que emana.",
  "O tempo desacelera agora.",
  "Em busca de compreensão.",
  "Aquieto-me, apenas sinto.",
  "Um instante de pura quietude.",
  "O universo se revela lento.",
];
const meioContemplativo = [
  "E a alma encontra sua essência.",
  "Refletindo sobre a existência.",
  "A sabedoria brota do vazio.",
  "Desvendando os mistérios do ser.",
  "A consciência se expande.",
  "Perdido em pensamentos profundos.",
  "Cada momento, um ensinamento.",
  "O fluxo da vida se manifesta.",
  "Conectado ao todo, em harmonia.",
  "A verdade sutil que se revela.",
];
const fimContemplativo = [
  "Apenas o presente importa.",
  "Com a alma mais serena.",
  "Em paz com o universo.",
  "E a compreensão ilumina.",
  "A quietude, um bálsamo.",
  "O espírito encontra o repouso.",
  "A mente, enfim, liberta.",
  "A sabedoria finalmente alcançada.",
  "Em profunda gratidão por tudo.",
  "O ciclo se fecha, em calmaria.",
];

//Futurista
const inicioFuturista = [
  "Nas metrópoles de cromo e luz.",
  "Máquinas pensam, sonham.",
  "O amanhã já chegou.",
  "Realidade virtual se expande.",
  "Sons de motores ecoam.",
  "O futuro é agora, veloz.",
  "Chips embutidos na pele.",
  "Naves riscam o céu noturno.",
  "Um novo código se escreve.",
  "A evolução não para.",
];
const meioFuturista = [
  "E a inteligência artificial floresce.",
  "Em redes neurais, o pensamento.",
  "Conectados a um só universo.",
  "Aprimorando o corpo e a mente.",
  "Novas fronteiras desvendadas.",
  "A tecnologia, nossa guia.",
  "Em simulações perfeitas.",
  "O humano e a máquina se unem.",
  "Dados fluem como rios digitais.",
  "O progresso, imparável e constante.",
];
const fimFuturista = [
  "Um novo mundo, enfim, criado.",
  "A era digital se consolida.",
  "Em perfeita harmonia com o progresso.",
  "O futuro, finalmente, realizado.",
  "A humanidade, em sua nova forma.",
  "A utopia cibernética alcançada.",
  "O amanhã, moldado por nós.",
  "Em um ciclo de constante invenção.",
  "E o legado do futuro, gravado.",
  "A jornada, rumo ao infinito.",
];

// --- FUNÇÃO PARA OBTER VALOR DO RADIO BUTTON ---
function obterValorRadio(nomeDoGrupo) {
  // Seleciona todos os inputs com o 'name' especificado e que são do tipo 'radio'
  const radioButtons = document.querySelectorAll(
    `input[name="${nomeDoGrupo}"][type="radio"]`
  );
  let valorSelecionado = null;

  radioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
      valorSelecionado = radioButton.value;
    }
  });

  return valorSelecionado;
}

// --- EVENT LISTENER DO BOTÃO GERADOR ---
botaoGerador.addEventListener("click", function () {
  // Passa o nome do grupo de radio buttons ("tags") para a função
  const valorSelecionado = obterValorRadio("tags");

  // Adiciona uma verificação para caso nenhum tema seja selecionado
  if (!valorSelecionado) {
    localPoema.textContent = "Por favor, selecione um tema para o poema!";
    return; // Sai da função para não tentar gerar um poema sem tema
  }

  let fraseSorteada = "";

  // Estrutura condicional para gerar o poema de acordo com o tema selecionado
  if (valorSelecionado === "Romântico") {
    fraseSorteada = unirFrases(inicioRomantico, meioRomantico, fimRomantico);
  } else if (valorSelecionado === "Natureza") {
    fraseSorteada = unirFrases(inicioNatureza, meioNatureza, fimNatureza);
  } else if (valorSelecionado === "Melancólico") {
    fraseSorteada = unirFrases(
      inicioMelancolico,
      meioMelancolico,
      fimMelancolico
    );
  } else if (valorSelecionado === "Otimista") {
    fraseSorteada = unirFrases(inicioOtimista, meioOtimista, fimOtimista);
  } else if (valorSelecionado === "Contemplativo") {
    fraseSorteada = unirFrases(
      inicioContemplativo,
      meioContemplativo,
      fimContemplativo
    );
  } else if (valorSelecionado === "Futurista") {
    fraseSorteada = unirFrases(inicioFuturista, meioFuturista, fimFuturista);
  }

  localPoema.textContent = fraseSorteada;
});

// --- FUNÇÕES AUXILIARES ---
function sortearFrase(array) {
  const indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}

function unirFrases(inicio, meio, fim) {
  let inicioPoema = sortearFrase(inicio);
  let meioPoema = sortearFrase(meio);
  let fimPoema = sortearFrase(fim);

  let poemaCompleto = `${inicioPoema}\n${meioPoema}\n${fimPoema}`;
  return poemaCompleto;
}

// --- EVENT LISTENER DO BOTÃO COPIAR ---
botaoCopiar.addEventListener("click", async function () {
  const textoParaCopiar = localPoema.textContent;
  // Verifica se há texto para copiar antes de tentar copiar
  if (
    textoParaCopiar.trim() === "" ||
    textoParaCopiar.includes("Por favor, selecione um tema")
  ) {
    alert("Não há poema para copiar ainda!");
    return; // Sai da função se não houver poema válido
  }

  try {
    await navigator.clipboard.writeText(textoParaCopiar);
    alert("Poema copiado para a área de transferência!");
  } catch (err) {
    console.error("Erro ao copiar: ", err);
    alert(
      "Não foi possível copiar o poema. Tente novamente ou copie manualmente."
    );
  }
});

// --- EVENT LISTENER DO BOTÃO LIGHTMODE ---
botaoLM.addEventListener("click", function () {
  body.classList.add("geralLM");
  botaoDM.firstElementChild.classList.add("botaoLM");
  botaoLM.firstElementChild.classList.add("botaoLM");
});

// EVENT LISTENER DO BOTÃO DARKMODE ---
botaoDM.addEventListener("click", function () {
  body.classList.remove("geralLM");
  botaoDM.firstElementChild.classList.remove("botaoLM");
  botaoLM.firstElementChild.classList.remove("botaoLM");
});
