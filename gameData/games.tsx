import { text } from "stream/consumers";

export interface GameType {
  id: string;
  title: string;
  author: string;
  version: string;
  gameDescriptions: {
    [key: string]: {
      title: string;
      text: string;
      rollable?: boolean;
      tables?: {
        id: string;
        title: string;
        rolls: { value: number; text: string }[];
      }[];
    };
  };
  characterDescription?: { title: string; text: string };
  complications: {
    id: number;
    text: string;
  }[];
  matrix: {
    id: number;
    text: string;
  }[];
  basicRoll: {
    value: number;
    text: string;
  }[];
  oracle: {
    value: number;
    text: string;
  }[];
  gifts: {
    value: number;
    text: string;
  }[];
  upbringing: {
    value: number;
    text: string;
  }[];
  experience: {
    value: number;
    text: string;
  }[];
  mark: {
    value: number;
    text: string;
  }[];
  bond: {
    value: number;
    text: string;
  }[];
  charm: {
    value: number;
    text: string;
  }[];
  bannerImg: string;
  imageObject: any;
  listImageObject?: any;
  backgroundColor: string;
  pdf?: string;
}

export const games: GameType[] = [
  {
    id: "0",
    title: "A Cidade - Poço",
    author: "Lucas Peixoto",
    version: "versão 1.4.2",
    gameDescriptions: {
      about: {
        title: "Sobre o Jogo",
        text: "Escavada no solo da Terra 2014, essa cidade vertical que ocupa toda a superfície do planeta é organizada em incontáveis níveis. O status social é que define em qual deles você mora: os aristos ficam nos mais altos possíveis enquanto que os inferiores abrigam os de reputação duvidosa. E é aqui onde você mora, em um futuro que obviamente não deu certo. Para você.",
      },
      themes: {
        title: "Temas",
        text: `Os jogadores poderão encontrar os seguintes temas:
      
      -Ficção Científica
      -Aventura
      -Espionagem
      -Luta de Classes
      -Combate (violência)
      -Traições
        `,
      },
      mission: {
        title: "Missão",
        text: "Sem querer, você se vê dentro de um grande esquema que pode arruinar a vida de todas as pessoas. Por nenhuma razão, você é o único capaz de tomar uma atitude contra o mal maior e ser responsabilizado caso falhe ou desista de cumprir os seus objetivos. O bastião da esperança. A gota de fé. O retorno do aguardado. Você deve descobrir, afinal, do que é feita a Cocaloca?",
      },
      agenda: {
        title: "Agenda",
        text: `"Estes são os objetivos que se espera que seu grupo alcance durante a missão:
      
      - Fazer aliados para te ajudarem na missão
      - Denunciar todo o esquema para a mídia
      - Descobrir o ingrediente secreto
      - Acabar com o fornecimento do ingrediente
      - Destruir as fábricas da Cocaloca
      - Sobreviver sem ser clonado

      `,
      },
      rewards: {
        title: "Recompensas",
        text: `Ao final da missão, cada jogador é recompensado com:
      
      +1 novo traço pelo primeiro, terceiro e quinto objetivos alcançados pelo grupo.
      +1 aprimoramento de traço pelo segundo, quarto e sexto objetivos alcançados pelo grupo.
      
      Novo traço: escolha, role ou crie um novo traço para qualquer uma das 6 categorias. Ligue-o com as experiências que seu personagem acabou de vivenciar durante a aventura.
      Aprimoramento de traço: reescreva um dos traços do seu personagem como uma versão melhorada, que apresente um novo poder, nível, habilidade ou aspecto. Desenhe uma estrela ao lado dele.

      `,
      },
    },
    complications: [
      {
        id: 1,
        text: "Um personagem é afetado negativamente",
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      { id: 3, text: "m personagem perde/estraga algo" },
      {
        id: 4,
        text: "Uma ameaça atual se agrava/intensifica",
      },
      { id: 5, text: "Uma nova ameaça ou barreira surge" },
      {
        id: 6,
        text: "Uma reviravolta ou verdade inconveniente é revelada",
      },
    ],
    matrix: [
      {
        id: 1,
        text: "",
      },
      {
        id: 1,
        text: "O decreto de Imperadoratriz",
      },
      {
        id: 2,
        text: "O levante das trogosocialiques",
      },
      { id: 3, text: "Técnico-Tecnos bajuladores" },
      {
        id: 4,
        text: "Olhokanas por toda parte",
      },
      { id: 5, text: "A Invasão dos Corcundas do Prez" },
      {
        id: 6,
        text: "Bergs, Bergs, Bergs!",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 1,
        text: "Arrastão de psicorratos",
      },
      {
        id: 2,
        text: "Nas mãos dos robkanas",
      },
      { id: 3, text: "O famigerado mecamutante" },
      {
        id: 4,
        text: "Nada escapa da Necrossonda",
      },
      { id: 5, text: "A fuga da Protorrainha" },
      {
        id: 6,
        text: "Destruição pelo Benthacodon",
      },
      {
        id: 3,
        text: "",
      },
      {
        id: 1,
        text: "A exaltação da Treva",
      },
      {
        id: 2,
        text: "O conluio dos suprarrobôs",
      },
      { id: 3, text: "O ataque do vírus biófago" },
      {
        id: 4,
        text: "A Igreja do Tecnopapa",
      },
      { id: 5, text: "Comandos do Cérebro Central" },
      {
        id: 6,
        text: "O passeio de Sua Ofidade Suprema",
      },
      {
        id: 4,
        text: "",
      },
      {
        id: 1,
        text: "Nos arredores da Igreja Neuroemocional",
      },
      {
        id: 2,
        text: "Por dentro do Paleoinferno",
      },
      { id: 3, text: "Presos na Police Central" },
      {
        id: 4,
        text: "O núcleo da Aristomaternidade",
      },
      { id: 5, text: "Nos Jardins de Mœbius" },
      {
        id: 6,
        text: "Interna Floresta dos Cristais Cantantes",
      },
      {
        id: 5,
        text: "",
      },
      {
        id: 1,
        text: "Metamorfose do Biomecacorpo",
      },
      {
        id: 2,
        text: "Iniciação Alquímica do Kolbo-5",
      },
      { id: 3, text: "O Grade Segredo Neo-Esotérico" },
      {
        id: 4,
        text: "Desdobramentos metrossinérgicos",
      },
      { id: 5, text: "Genealogia do Pseudoinconsciente" },
      {
        id: 6,
        text: "Império dos Polissonhos",
      },
      {
        id: 6,
        text: "",
      },
      {
        id: 1,
        text: "Amizade além dos psicotempos",
      },
      {
        id: 2,
        text: "Estruturante Organização Social",
      },
      { id: 3, text: "Guerras Cósmicas do Incal" },
      {
        id: 4,
        text: "Exaltação dos Humilhados",
      },
      { id: 5, text: "Alienação da Telerrealidade" },
      {
        id: 6,
        text: "Viagens Anarcopsicóticas",
      },
    ],
    basicRoll: [
      { value: 1, text: "Sucesso Parcial" },
      { value: 2, text: "Sucesso Parcial" },
      { value: 3, text: "Sucesso Parcial" },
      { value: 4, text: "Sucesso Parcial" },
      { value: 5, text: "Sucesso" },
      { value: 6, text: "Sucesso" },
      { value: 7, text: "Falha" },
      { value: 8, text: "Falha" },
      { value: 9, text: "Falha" },
      { value: 10, text: "Falha" },
      { value: 11, text: "Falha" },
      { value: 12, text: "Falha" },
    ],
    oracle: [
      { value: 1, text: "PROVÁVEL" },
      { value: 2, text: "PROVÁVEL" },
      { value: 3, text: "PROVÁVEL" },
      { value: 4, text: "PROVÁVEL" },
      { value: 5, text: "PROVÁVEL" },
      { value: 6, text: "IMPROVÁVEL" },
      { value: 7, text: "INFORTÚNIO" },
      { value: 8, text: "INFORTÚNIO" },
      { value: 9, text: "INFORTÚNIO" },
      { value: 10, text: "INFORTÚNIO" },
      { value: 11, text: "INFORTÚNIO" },
      { value: 12, text: "INFORTÚNIO" },
    ],
    gifts: [
      { value: 1, text: "Irresistivelmente feio e desajeitado" },
      { value: 2, text: "Tão indiferente que jamais perde o controle" },
      { value: 3, text: "Às do equilíbrio social" },
      { value: 4, text: "Simpático até com quem não merece" },
      { value: 5, text: "Expert em tecno-tecnologia velha" },
      { value: 6, text: "Perito em rebeldia bem colocada" },
    ],
    upbringing: [
      { value: 1, text: "O Centro-Terra" },
      { value: 2, text: "Ribeirinho do Lago de Ácido" },
      { value: 3, text: "Cohab de Conaptos" },
      { value: 4, text: "Círculo Vermelho dos Prazeres" },
      { value: 5, text: "Movimentada Alameda do Suicídio" },
      { value: 6, text: "Superfície Aristo" },
    ],
    experience: [
      { value: 1, text: "Medíocre Detetive Particular Classe 'R'" },
      { value: 2, text: "Aristo Calejada em Múltiplos Níveis" },
      { value: 3, text: "Gentil e Implacável Máquina de Matar" },
      { value: 4, text: "Carismático Revolucionário Brutamontes" },
      { value: 5, text: "Lixeiro Rebelde Sem Causa" },
      { value: 6, text: "Ativista da Sabedoria Pré-Tecna" },
    ],
    mark: [
      { value: 1, text: "Tem medo do Céu de Jodorow" },
      { value: 2, text: "Não dá um passo sem o seu Tarot" },
      { value: 3, text: "Adorador do Ovo Andrógino" },
      { value: 4, text: "Seguidor de Orh" },
      { value: 5, text: "Não confia em Orgarganos" },
      { value: 6, text: "Ama Uísque, SPV e Homeoputas" },
    ],
    charm: [
      { value: 1, text: "Fiel pássaro de cimento como mascote" },
      { value: 2, text: "Auréola Ectoplasmática" },
      { value: 3, text: "Katana Cromovibrante" },
      { value: 4, text: "Pistola Phaser com Xenocalibre" },
      { value: 5, text: "Caixa de Ferramentas Neurotecno" },
      { value: 6, text: "Amorina e Cocaloca" },
    ],
    bond: [
      { value: 1, text: "Ser notado pelo Diavaloo" },
      { value: 2, text: "Conquistar a Luz de Garra" },
      { value: 3, text: "Acabar com os planos de Kill Cara-de-cão" },
      { value: 4, text: "Pagar o que deve ao Gorgo-o-sujo" },
      { value: 5, text: "Desbancar as Necrocorps" },
      { value: 6, text: "Se tornar um Metabarão" },
    ],
    bannerImg: "/images/a_cidade_poco_cover.jpg",
    imageObject: require("/public/images/a_cidade_poco_cover.jpg"),
    backgroundColor: "#E1C661",
    pdf: "a_cidade_poco_game.pdf",
  },
  {
    id: "1",
    title: "KStar Squad",
    author: "Leonardo Himura",
    version: "versão 1.02",
    gameDescriptions: {
      about: {
        title: "Sobre o jogo",
        text: "Em 2097 o mundo mudou, mas algo continua forte e vibrante: a música k-pop! Um grupo de idols rouba o coração de diversos jovens mundo afora. Eles são os K-Star Squad! O que seus fãs não sabem é que esses artistas são uma força de defesa que protege a Terra de invasores! Tendo sido sequestrados no fim da infância e fugido durante a adolescência, quando despertaram um poder misterioso, os KSD roubaram Power Suits, poderosas armaduras que os auxiliam a controlar seus poderes, dos demoníacos Unovhians e juraram que nenhum jovem passaria por aquilo que passaram. Hoje, o K-Star Squad viaja o mundo, levando música, esperança e vingança contra os inimigos da justiça e da verdade!",
      },
      themes: {
        title: "Temas",
        text: `Cada série de super sentai tem um tema novo a cada capítulo e isso facilita muito na hora do grupo de jogo construir o episódio da semana. Pense no tema como algo que une os eventos que levardo as cenas e a trama do episódio da semana.
        
        Vocês podem falar sobre amizade e mostrar como tanto os KSD e os vilões tem laços que lutam para defender; apresentar a vontade de crescimento de algum fã que gostaria de cantar ou dançar como os membros do grupo; abordar a rivalidade entre membros da equipe de heróis.
        
        Vocês são livres para escolher os temas que forem mais divertidos e interessantes, mas sempre lembrem de conversarem previamente ao início da mesa sobre os temas que serão abordados. Os temas devem ser divertidos e instigantes, não causarem incómodo a algum dos jogadores.
        `,
      },
      mission: {
        title: "Missão",
        text: `Cada capítulo possui uma missão: algo que está acontecendo e os personagens precisam resolver. 
        
        A missão é o motor que movimentará os personagens durante o episódio da semana. 
        
        Um bom jeito de começar pode ser com as estruturas abaixo: Um inimigo quer A+B e vocés devem A+B, sendo C+B. Vocés querem A+B, contudo os inimigos irão A+B, o que pode gerar C+B. 
        
        Para cada letra vocé pode rolar 1d6 nas tabelas a seguir ou escolher a que se encaixa mais com a ideia que vocé tem para a aventura.
        
       
        `,
        rollable: true,
        tables: [
          {
            id: "A",
            title: "Missões A",
            rolls: [
              { value: 1, text: "Achar (explorar, descobrir) " },
              { value: 2, text: " Destruir (derrotar, derrubar) " },
              { value: 3, text: " Proteger (defender, salvar)  " },
              { value: 4, text: " Conquistar (escravizar, dominar) " },
              { value: 5, text: " Superar (sobreviver, escapar) " },
              { value: 6, text: " Capturar (recuperar, prender)" },
            ],
          },
          {
            id: "B",
            title: "Missões B",
            rolls: [
              { value: 1, text: "Entidade (pessoa, facção, criatura) " },
              { value: 2, text: " Conhecimento (informacao,segredo, ideia)" },
              { value: 3, text: "Gléria (reputacao, poder, riqueza)" },
              { value: 4, text: "Local (caminho, comunidade, posição)" },
              { value: 5, text: " Recurso (objeto, ingrediente, elemento) " },
              { value: 6, text: " Evento (fenémeno, incidente, lenda)" },
            ],
          },
          {
            id: "C",
            title: "Missões C",
            rolls: [
              { value: 1, text: "Perda (fracasso, custo)" },
              { value: 2, text: "Dominação (opressão, influência)" },
              { value: 3, text: "Destruição (ruína, extinção)" },
              { value: 4, text: "Dano (morte,sabotagem) " },
              { value: 5, text: "Mudança (substituição, corrupção)" },
              { value: 6, text: "Disputa (perturbação, conflito)" },
            ],
          },
        ],
      },
      agenda: {
        title: "Agenda",
        text: `Cada capítulo da semana possui uma série de elementos de roteiro que os heróis seguem num programa de super sentai. É seu jeito de direcionar temas e objetivos a serem cumpridos durante o episodio - a cada conquista alcancada os personagens chegam mais perto de serem heréis melhores e evoluirem.
        
      A Agenda do seu grupo dita o ritmo e tom das suas mesas de jogo. Pense como cada programa de super sentai tem um tema principal ecomo as aventuras giram ao redor disso. Quanto mais dentro do tema, mais chances de vocés evoluirem.
      
      Com a criação da Agenda, os jogadores tém uma direção do que devem completar durante a missão para terem uma recompensa maior no final do capítulo da semana. Como são objetivos do grupo, se um personagem conseguir completar aconquista, todos serão beneficiados!`,
      },
      challenges: {
        title: "Desafios",
        text: `Todo super sentai é feito dos desafios que os heróis enfrentam e as cenas são esses momentos em que nossos herdis irão superar desafios para conseguir atingir seus objetivos. O grupo pode ter que lidar com a pressão do empresario para um show adicional na cidade, mesmo quando os herois estdo lutando contra o tempo de procurar uma pista sobre o esconderijo dos vildes. Algumas vezes, asemente de uma cena ja traz os desafios na hora, todo mundo consegue pensar num desafio; outras vezes a imaginação não ajuda tanto.
      
      Para resolver isso, se pergunte: o que nés queremos? O que estd nos impedindo?
      
      Se ainda assim não conseguirem pensar numa resposta, escolha ou role 2dó na tabela de Desafios:
      
      1-2-3 
      1. Barreira
      2. Tarefa
      3. Luta
      4. Armadilha
      5. Perseguicao
      6. Discussao

      4-5-6
      1. Disputa
      2. Mistério
      3. Negociação
      4. Resisténcia
      5. Ameaca
      6. Enigma

      `,
        rollable: true,
        tables: [
          {
            id: "1",
            title: "Desafios",
            rolls: [
              { value: 1, text: " Barreira" },
              { value: 2, text: " Tarefa" },
              { value: 3, text: "Luta" },
              { value: 4, text: "Armadilha" },
              { value: 5, text: "Perseguicao " },
              { value: 6, text: "Discussao" },
              { value: 7, text: "Disputa" },
              { value: 8, text: " Mistério" },
              { value: 9, text: "Negociação" },
              { value: 10, text: "Resisténcia " },
              { value: 11, text: "Ameaca" },
              { value: 12, text: "Enigma" },
            ],
          },
        ],
      },
      sceneIncrements: {
        title: "Incrementos de Cena",
        text: `Agora é o momento de trazer mais vida a sua cena. Adicione elementos para dar mais clima e ação.
      
      1-2-3 
      1-Cheiros e sons
      2-Cores e visões
      3-Pessoas e criaturas
      4-Clima e natureza
      5-Estado de espirito e atmosfera
      6-Ornamentos edetalhes

      4-5-6
      1. Materiais e texturas
      2. Impressdes ou opinides
      3. Postura e atitude
      4.Luzetempo
      5. Angulos da “camera”
      6. Ações e movimento
      `,
        rollable: true,
        tables: [
          {
            id: "1",
            title: "Incrementos de Cena",
            rolls: [
              { value: 1, text: " Cheiros e sons" },
              { value: 2, text: " Cores e visões" },
              { value: 3, text: " Pessoas e criaturas" },
              { value: 4, text: "Clima e natureza" },
              { value: 5, text: " Estado de espirito e atmosfera" },
              { value: 6, text: "Ornamentos e detalhes " },
              { value: 7, text: " Materiais e texturas" },
              { value: 8, text: "Impressdes ou opinides " },
              { value: 9, text: "Postura e atitude " },
              { value: 10, text: "Luz e tempo " },
              { value: 11, text: "Angulos da 'câmera'" },
              { value: 12, text: " Ações e movimento" },
            ],
          },
        ],
      },
      rewards: {
        title: "Evoluindo",
        text: `A cada missão, os personagens em K-Star Squad aprendem e evoluem. No fim de cada missao, os personagens são recompensados com novos tragos, que podem ser escolhidos ou criados pelo grupo. Essa premiagao depende de quantos objetivos da Agenda foram cumpridos durante a missão:
      
      - 1 novo traco se o grupo cumpriu 1-2 objetivos 
      - 2 novos tracos se o grupo cumpriu 3-4 objetivos
      - 3 novos tracos se o grupo cumpriu 5-6 objetivos

      No fim da sesséo de jogo, retina o grupo e verifiquem como vao lidar com os novos tracos dos personagens. É sempre mais interessante que os tracos novos tenham a ver com a missao realizada e com os resultados dos atos dos jogadores durante o capitulo da semana.


      Opcionalmente, ao invés de criar um novo traco ou adquirir um novo, os jogadores podem evoluir um traco existente tornando-o mais relevante e com poderes adicionais. Cabe ao grupo aproveitar o momento dessa evolução dos personagens para criar junto e montar algo único para sua mesa de jogo.

      `,
      },
      basicMechanics: {
        title: "A Jogada Básica",
        text: `Em uma mesa de K-Star Squad, sempre que seu personagem tentar algo dramaticamente interessante, vocé rolara um dado de seis lados e verificara o resultado:
      
      Com um 7 ou mais vocé tem uma falha;
      Com um 5 ou 6 vocé em um sucesso. A sua ação acontece exatamente como vocé descreveu;
      Com um resultado 4 ou menor vocé obtém um sucesso parcial, no qual sua ação acontece, mas uma complicacdo se manifesta.

      Contudo, vocé pode escolher manifestar a sua forca de vontade e fazer uma ação de Push, rolando mais 1dé e somar ao seu resultado anterior, podendo transformar um sucesso parcial em um sucesso! Vocé pode realizar uma ação de Push quantas vezes desejar, mas a cada vez vocé se aproxima mais de um resultado perigoso.
      `,
      },
      omega9: {
        title: "Omega9",
        text: `Esse pequenino robd trabalha como guia e orientador dos personagens. Dentro de um formato mais convencional de RPG existe a figura de um narradoqrue orienta os jogadores, mas K-Star Squad não tem essa figura. No lugar dela, temos Omega9! Assim, sempre que houver uma duvida ou alguém desejar entender mais sobre o mundo de jogo, pergunte ao Omega9.
      
      As perguntas devem ser formuladas de maneira que as respostas sejam SIM ou NAO. O grupo entéo decide qual é a resposta mais provavel a pergunta e rola 1dé. Depois disso, consulte o resultado:

      7ou mais éum INFORTÚNIO
      5 ou 6 é a resposta IMPROVÁVEL
      4 ou menos é a resposta PROVÁVEL, mas você pode escolher rolar +1dó. Se fizer isso, adicione o resultado a jogada anterior.
      `,
      },
    },
    complications: [
      {
        id: 1,
        text: "Areserva de energia da Power Suit entra em contagem regressiva",
      },
      {
        id: 2,
        text: "Um dos seus amigos sofre a complicação",
      },
      { id: 3, text: "Uma nova ameaca Unovhian chega em cena" },
      {
        id: 4,
        text: "O capacete da Power Suit tem o visor quebrado, revelando a identidade do personagem ao mundo",
      },
      { id: 5, text: "Um fa inocente é ferido em seu lugar" },
      {
        id: 6,
        text: "A população local se volta contra o K-Star Squad",
      },
    ],
    matrix: [
      {
        id: 1,
        text: "",
      },
      {
        id: 1,
        text: "Invasão ao laboratério de Belthor",
      },
      {
        id: 2,
        text: " Avisão do último dancarino da Lua ",
      },
      { id: 3, text: " Um dueto pela Power Suit Prata" },
      {
        id: 4,
        text: "A filha de Mercúrio chegou a Terra",
      },
      { id: 5, text: "Uma noite de paz, até a pagina 2" },
      {
        id: 6,
        text: "A Furia de Elinah pode ser sentida",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 1,
        text: "Aaura de Busan",
      },
      {
        id: 2,
        text: "O Voo da última estrela",
      },
      { id: 3, text: "A oração dos Desgarrados" },
      {
        id: 4,
        text: "A caverna entre os universos",
      },
      { id: 5, text: "Uma canção entre inimigos" },
      {
        id: 6,
        text: "Um fã sem noção esta em perigo",
      },
      {
        id: 3,
        text: "",
      },
      {
        id: 1,
        text: "Um stalker dos Unovhians os vigia",
      },
      {
        id: 2,
        text: "O microfone amaldicoado",
      },
      { id: 3, text: "O reencontro de irmãos" },
      {
        id: 4,
        text: "Um Star, uma canção, um adeus",
      },
      { id: 5, text: "Companhia no parque de diversões" },
      {
        id: 6,
        text: "Uma turné de problemas",
      },
      {
        id: 4,
        text: "",
      },
      {
        id: 1,
        text: "Operor não deseja mais lutar",
      },
      {
        id: 2,
        text: "Um novo herdeiro para o Império",
      },
      { id: 3, text: "As estrelas revelam o futuro" },
      {
        id: 4,
        text: "Os Perdidos escolhem um lado",
      },
      { id: 5, text: "O frio da estrada dos guardiões" },
      {
        id: 6,
        text: "Quando o pupilo se torna mestre",
      },
      {
        id: 5,
        text: "",
      },
      {
        id: 1,
        text: "Um monstro gigante para abalar o mercado imobiliário",
      },
      {
        id: 2,
        text: "Um gato de Marte vem visitar",
      },
      { id: 3, text: "A Luz da Power Suit Ametista brilha" },
      {
        id: 4,
        text: "Todo fã merece o palco",
      },
      { id: 5, text: "K-Force sem controle" },
      {
        id: 6,
        text: "Os Primeiros Portadores aparecem",
      },
      {
        id: 6,
        text: "",
      },
      {
        id: 1,
        text: "Os sequestradores galaticos reaparecem",
      },
      {
        id: 2,
        text: "O calor da amizade é testado",
      },
      { id: 3, text: "A neve revela uma verdade" },
      {
        id: 4,
        text: "Ómega9 tem uma paixão",
      },
      { id: 5, text: "Batalha pela canção Libertação" },
      {
        id: 6,
        text: "Um robô gigante salva o dia",
      },
    ],
    basicRoll: [
      { value: 1, text: "Sucesso Parcial" },
      { value: 2, text: "Sucesso Parcial" },
      { value: 3, text: "Sucesso Parcial" },
      { value: 4, text: "Sucesso Parcial" },
      { value: 5, text: "Sucesso" },
      { value: 6, text: "Sucesso" },
      { value: 7, text: "Falha" },
      { value: 8, text: "Falha" },
      { value: 9, text: "Falha" },
      { value: 10, text: "Falha" },
      { value: 11, text: "Falha" },
      { value: 12, text: "Falha" },
    ],
    oracle: [
      { value: 1, text: "PROVÁVEL" },
      { value: 2, text: "PROVÁVEL" },
      { value: 3, text: "PROVÁVEL" },
      { value: 4, text: "PROVÁVEL" },
      { value: 5, text: "PROVÁVEL" },
      { value: 6, text: "IMPROVÁVEL" },
      { value: 7, text: "INFORTÚNIO" },
      { value: 8, text: "INFORTÚNIO" },
      { value: 9, text: "INFORTÚNIO" },
      { value: 10, text: "INFORTÚNIO" },
      { value: 11, text: "INFORTÚNIO" },
      { value: 12, text: "INFORTÚNIO" },
    ],
    characterDescription: {
      title: "Guia para a criação de personagens",
      text: `Vocé precisa escolher seis traços para K-Star. Cada um deles descreve uma parte importante do seu personagem: Dom (o poder especial do seu personagem), Origem (o passado e papel que recaiu sobre ele), Experiéncia (as experiéncias e função que ele escolheu para si), Marca (um trejeito, característica ou traço de personalidade), Power Suit (a armadura, ela contém a K-Force e protege os heróis), e Vínculo (a missão do personagem, algo ou alguém por quem ele lutaria).`,
    },
    gifts: [
      { value: 1, text: "Olhos das Estrelas" },
      { value: 2, text: "Punhos do Sol" },
      { value: 3, text: "Caminhante do Céu" },
      { value: 4, text: "Explosão do Cometa" },
      { value: 5, text: "Mente de Mil Mundos" },
      { value: 6, text: "Tempestade Galactica" },
    ],
    upbringing: [
      { value: 1, text: "Pupilo Unovhian" },
      { value: 2, text: "Voz dos Desgarrados" },
      { value: 3, text: "Filho do Vértice Galactico" },
      { value: 4, text: "Portadora da Marca da Lua" },
      { value: 5, text: "Visionario entre os Perdidos" },
      { value: 6, text: "Herdeiro da Power SuitPrateada" },
    ],
    experience: [
      { value: 1, text: "Lider da Fuga de Unovhan" },
      { value: 2, text: "Primeiro a despertar a K-Force" },
      { value: 3, text: "Explorador de Merctrio" },
      { value: 4, text: "Princesa dos Desgarrados" },
      { value: 5, text: "Arauto de Marte" },
      { value: 6, text: "Unico sobrevivente de Vénus" },
    ],
    mark: [
      { value: 1, text: "Brinca com sua power dagger como uma flauta" },
      { value: 2, text: "Sempre chega aticando a platéia/oponentes" },
      {
        value: 3,
        text: "Mantém a calma sempre, exceto se seu 6culos for retirado de si",
      },
      { value: 4, text: "Supersticioso" },
      { value: 5, text: "Sempre acredita no melhor em qualquer situacdo" },
      { value: 6, text: "Não liga se descobrirem sua identidade como K-Star" },
    ],
    charm: [
      { value: 1, text: "Power Suit Safira" },
      { value: 2, text: "Power Suit Ruby" },
      {
        value: 3,
        text: "Power Suit Esmeralda",
      },
      { value: 4, text: "Power Suit Granada" },
      { value: 5, text: "Power Suit Prata" },
      { value: 6, text: "Power Suit Quartzo" },
    ],
    bond: [
      { value: 1, text: "Derrubar o Império Unovhian" },
      { value: 2, text: "Encontrar meu irmao gémeo perdido" },
      { value: 3, text: "Levar amúsica ao coração dos Desgarrados" },
      { value: 4, text: "Restaurar a Power Suit Ametista" },
      { value: 5, text: "Recriar a canção Libertação" },
      { value: 6, text: "Descobrir a verdade sobre meus pais" },
    ],
    bannerImg: "/images/kstar_cover_2.jpg",
    imageObject: require("/public/images/kstar_cover_2.jpg"),
    backgroundColor: "#e16161",
    pdf: "kstar_game.pdf",
    listImageObject: require("/public/images/kstar_cover.png"),
  },
  {
    id: "upcoming",
    title: "Guardiões de Althea",
    author: "",
    version: "",
    gameDescriptions: {
      about: {
        title: "Sobre",
        text: "Em Guardiões de Althea, você joga como um dos aventureiros que está tentando salvar os seres mágicos de Althea das energias sombrias. Neste mundo, você não vai invadir masmorras ou derrotar monstros gigantes atrás de glória. O seu objetivo e de seus amigos é restaurar a harmonia de Althea, livrando as criaturas fantásticas das forças sombrias que assolam o reino. Você pode se aventurar em masmorras, mas será para encontrar magias antigas e proteções para quebrar a maldição que afeta os grandes guardiões do mundo.",
      },
      empty: { title: "empty", text: "empty" },
    },
    complications: [{ id: 0, text: "" }],
    matrix: [{ id: 0, text: "" }],
    basicRoll: [{ value: 1, text: "" }],
    oracle: [{ value: 1, text: "" }],
    gifts: [{ value: 1, text: "" }],
    upbringing: [{ value: 1, text: "" }],
    experience: [{ value: 1, text: "" }],
    charm: [{ value: 1, text: "" }],
    bond: [{ value: 1, text: "" }],
    mark: [{ value: 1, text: "" }],
    backgroundColor: "#207ADA",
    bannerImg: "/images/guardioes_de_althea_cover.jpg",
    imageObject: require("/public/images/guardioes_de_althea_cover.jpg"),
  },
  {
    id: "upcoming",
    title: "Maré de Ferro",
    author: "",
    version: "",
    gameDescriptions: {
      about: {
        title: "Sobre",
        text: "Em Maré de Ferro, você faz parte de um grupo de humanos e andróides que deixou seu passado de lado para salvar toda a humanidade. Hoje, você e seu grupo lutam por toda a Via Láctea com tudo que temos à nossa disposição: poderosos Kaisers criados por andróides, que foi o responsável pela salvação da população em fuga de Marte; E mesmo essas armas não se comparam ao que parou o avanço dos inimigos na Lua: nossa música!",
      },
      empty: { title: "empty", text: "empty" },
    },
    complications: [{ id: 0, text: "" }],
    matrix: [{ id: 0, text: "" }],
    basicRoll: [{ value: 1, text: "" }],
    oracle: [{ value: 1, text: "" }],
    gifts: [{ value: 1, text: "" }],
    upbringing: [{ value: 1, text: "" }],
    experience: [{ value: 1, text: "" }],
    charm: [{ value: 1, text: "" }],
    bond: [{ value: 1, text: "" }],
    mark: [{ value: 1, text: "" }],
    backgroundColor: "#79A0A8",
    bannerImg: "/images/mare_de_ferro_cover_2.jpg",
    imageObject: require("/public/images/mare_de_ferro_cover_2.jpg"),
  },
];
export default games;
