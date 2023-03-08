export interface GameType {
  id: string;
  title: string;
  author: string;
  version: string;
  about: {
    text: string;
  };
  themes: {
    description: string;
    list: string[];
  };
  complications: {
    id: number;
    text: string;
  }[];
  mission: {
    text: string;
  };
  agenda: {
    description: string;
    list: string[];
  };
  rewards: {
    description: string;
    list: string[];
    details: string[];
  };
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
  bannerImg?: string;
  imageObject?: any;
  backgroundColor: string;
  pdf?: string;
}

export const games: GameType[] = [
  {
    id: "0",
    title: "A Cidade - Poço",
    author: "Lucas Peixoto",
    version: "versão 1.4.2",
    about: {
      text: "Escavada no solo da Terra 2014, essa cidade vertical que ocupa toda a superfície do planeta é organizada em incontáveis níveis. O status social é que define em qual deles você mora: os aristos ficam nos mais altos possíveis enquanto que os inferiores abrigam os de reputação duvidosa. E é aqui onde você mora, em um futuro que obviamente não deu certo. Para você.",
    },
    themes: {
      description: "Os jogadores poderão encontrar os seguintes temas:",
      list: [
        "Ficção Científica",
        "Aventura",
        "Espionagem",
        "Luta de Classes",
        "Combate (violência)",
        "Traições",
      ],
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
    mission: {
      text: "Sem querer, você se vê dentro de um grande esquema que pode arruinar a vida de todas as pessoas. Por nenhuma razão, você é o único capaz de tomar uma atitude contra o mal maior e ser responsabilizado caso falhe ou desista de cumprir os seus objetivos. O bastião da esperança. A gota de fé. O retorno do aguardado. Você deve descobrir, afinal, do que é feita a Cocaloca?",
    },
    agenda: {
      description:
        "Estes são os objetivos que se espera que seu grupo alcance durante a missão:",
      list: [
        "Fazer aliados para te ajudarem na missão",
        "Denunciar todo o esquema para a mídia",
        "Descobrir o ingrediente secreto",
        "Acabar com o fornecimento do ingrediente",
        "Destruir as fábricas da Cocaloca",
        "Sobreviver sem ser clonado",
      ],
    },
    rewards: {
      description: "Ao final da missão, cada jogador é recompensado com:",
      list: [
        "+1 novo traço pelo primeiro, terceiro e quinto objetivos alcançados pelo grupo.",
        "+1 aprimoramento de traço pelo segundo, quarto e sexto objetivos alcançados pelo grupo.",
      ],
      details: [
        "Novo traço: escolha, role ou crie um novo traço para qualquer uma das 6 categorias. Ligue-o com as experiências que seu personagem acabou de vivenciar durante a aventura.",
        "Aprimoramento de traço: reescreva um dos traços do seu personagem como uma versão melhorada, que apresente um novo poder, nível, habilidade ou aspecto. Desenhe uma estrela ao lado dele.",
      ],
    },
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
    author: "Lucas Peixoto",
    version: "versão 1.4.2",
    about: {
      text: "Escavada no solo da Terra 2014, essa cidade vertical que ocupa toda a superfície do planeta é organizada em incontáveis níveis. O status social é que define em qual deles você mora: os aristos ficam nos mais altos possíveis enquanto que os inferiores abrigam os de reputação duvidosa. E é aqui onde você mora, em um futuro que obviamente não deu certo. Para você.",
    },
    themes: {
      description: "Os jogadores poderão encontrar os seguintes temas:",
      list: [
        "Ficção Científica",
        "Aventura",
        "Espionagem",
        "Luta de Classes",
        "Combate (violência)",
        "Traições",
      ],
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
    mission: {
      text: "Sem querer, você se vê dentro de um grande esquema que pode arruinar a vida de todas as pessoas. Por nenhuma razão, você é o único capaz de tomar uma atitude contra o mal maior e ser responsabilizado caso falhe ou desista de cumprir os seus objetivos. O bastião da esperança. A gota de fé. O retorno do aguardado. Você deve descobrir, afinal, do que é feita a Cocaloca?",
    },
    agenda: {
      description:
        "Estes são os objetivos que se espera que seu grupo alcance durante a missão:",
      list: [
        "Fazer aliados para te ajudarem na missão",
        "Denunciar todo o esquema para a mídia",
        "Descobrir o ingrediente secreto",
        "Acabar com o fornecimento do ingrediente",
        "Destruir as fábricas da Cocaloca",
        "Sobreviver sem ser clonado",
      ],
    },
    rewards: {
      description: "Ao final da missão, cada jogador é recompensado com:",
      list: [
        "+1 novo traço pelo primeiro, terceiro e quinto objetivos alcançados pelo grupo.",
        "+1 aprimoramento de traço pelo segundo, quarto e sexto objetivos alcançados pelo grupo.",
      ],
      details: [
        "Novo traço: escolha, role ou crie um novo traço para qualquer uma das 6 categorias. Ligue-o com as experiências que seu personagem acabou de vivenciar durante a aventura.",
        "Aprimoramento de traço: reescreva um dos traços do seu personagem como uma versão melhorada, que apresente um novo poder, nível, habilidade ou aspecto. Desenhe uma estrela ao lado dele.",
      ],
    },
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
    bannerImg: "/images/kstar_cover_1.png",
    imageObject: require("/public/images/kstar_cover.png"),
    backgroundColor: "#e16161",
    pdf: "a_cidade_poco_game.pdf",
  },
  {
    id: "2",
    title: "Guardiões de Althea",
    author: "Lucas Peixoto",
    version: "versão 1.4.2",
    about: {
      text: "Escavada no solo da Terra 2014, essa cidade vertical que ocupa toda a superfície do planeta é organizada em incontáveis níveis. O status social é que define em qual deles você mora: os aristos ficam nos mais altos possíveis enquanto que os inferiores abrigam os de reputação duvidosa. E é aqui onde você mora, em um futuro que obviamente não deu certo. Para você.",
    },
    themes: {
      description: "Os jogadores poderão encontrar os seguintes temas:",
      list: [
        "Ficção Científica",
        "Aventura",
        "Espionagem",
        "Luta de Classes",
        "Combate (violência)",
        "Traições",
      ],
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
    mission: {
      text: "Sem querer, você se vê dentro de um grande esquema que pode arruinar a vida de todas as pessoas. Por nenhuma razão, você é o único capaz de tomar uma atitude contra o mal maior e ser responsabilizado caso falhe ou desista de cumprir os seus objetivos. O bastião da esperança. A gota de fé. O retorno do aguardado. Você deve descobrir, afinal, do que é feita a Cocaloca?",
    },
    agenda: {
      description:
        "Estes são os objetivos que se espera que seu grupo alcance durante a missão:",
      list: [
        "Fazer aliados para te ajudarem na missão",
        "Denunciar todo o esquema para a mídia",
        "Descobrir o ingrediente secreto",
        "Acabar com o fornecimento do ingrediente",
        "Destruir as fábricas da Cocaloca",
        "Sobreviver sem ser clonado",
      ],
    },
    rewards: {
      description: "Ao final da missão, cada jogador é recompensado com:",
      list: [
        "+1 novo traço pelo primeiro, terceiro e quinto objetivos alcançados pelo grupo.",
        "+1 aprimoramento de traço pelo segundo, quarto e sexto objetivos alcançados pelo grupo.",
      ],
      details: [
        "Novo traço: escolha, role ou crie um novo traço para qualquer uma das 6 categorias. Ligue-o com as experiências que seu personagem acabou de vivenciar durante a aventura.",
        "Aprimoramento de traço: reescreva um dos traços do seu personagem como uma versão melhorada, que apresente um novo poder, nível, habilidade ou aspecto. Desenhe uma estrela ao lado dele.",
      ],
    },
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
    bannerImg: "/images/guardioes_de_althea_cover.jpg",
    imageObject: require("/public/images/guardioes_de_althea_cover.jpg"),
    backgroundColor: "#6198e1",
    pdf: "a_cidade_poco_game.pdf",
  },
  {
    id: "3",
    title: "Maré de Ferro",
    author: "Lucas Peixoto",
    version: "versão 1.4.2",
    about: {
      text: "Escavada no solo da Terra 2014, essa cidade vertical que ocupa toda a superfície do planeta é organizada em incontáveis níveis. O status social é que define em qual deles você mora: os aristos ficam nos mais altos possíveis enquanto que os inferiores abrigam os de reputação duvidosa. E é aqui onde você mora, em um futuro que obviamente não deu certo. Para você.",
    },
    themes: {
      description: "Os jogadores poderão encontrar os seguintes temas:",
      list: [
        "Ficção Científica",
        "Aventura",
        "Espionagem",
        "Luta de Classes",
        "Combate (violência)",
        "Traições",
      ],
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
    mission: {
      text: "Sem querer, você se vê dentro de um grande esquema que pode arruinar a vida de todas as pessoas. Por nenhuma razão, você é o único capaz de tomar uma atitude contra o mal maior e ser responsabilizado caso falhe ou desista de cumprir os seus objetivos. O bastião da esperança. A gota de fé. O retorno do aguardado. Você deve descobrir, afinal, do que é feita a Cocaloca?",
    },
    agenda: {
      description:
        "Estes são os objetivos que se espera que seu grupo alcance durante a missão:",
      list: [
        "Fazer aliados para te ajudarem na missão",
        "Denunciar todo o esquema para a mídia",
        "Descobrir o ingrediente secreto",
        "Acabar com o fornecimento do ingrediente",
        "Destruir as fábricas da Cocaloca",
        "Sobreviver sem ser clonado",
      ],
    },
    rewards: {
      description: "Ao final da missão, cada jogador é recompensado com:",
      list: [
        "+1 novo traço pelo primeiro, terceiro e quinto objetivos alcançados pelo grupo.",
        "+1 aprimoramento de traço pelo segundo, quarto e sexto objetivos alcançados pelo grupo.",
      ],
      details: [
        "Novo traço: escolha, role ou crie um novo traço para qualquer uma das 6 categorias. Ligue-o com as experiências que seu personagem acabou de vivenciar durante a aventura.",
        "Aprimoramento de traço: reescreva um dos traços do seu personagem como uma versão melhorada, que apresente um novo poder, nível, habilidade ou aspecto. Desenhe uma estrela ao lado dele.",
      ],
    },
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
    bannerImg: "/images/mare_de_ferro_cover_2.jpg",
    imageObject: require("/public/images/mare_de_ferro_cover.jpg"),
    backgroundColor: "#55B3A8",
    pdf: "a_cidade_poco_game.pdf",
  },
];
export default games;
