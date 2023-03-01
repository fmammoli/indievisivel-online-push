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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl vitae purus auctor sollicitudin ac vel nunc. Donec iaculis lectus ut urna feugiat maximus.",
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      { id: 3, text: "Lorem ipsum dolor sit amet," },
      {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl vitae purus",
      },
      { id: 5, text: "Lorem ipsum dolor sit amet," },
      {
        id: 6,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl vitae purus auctor sollicitudin ac vel nunc. Donec iaculis lectus ut urna feugiat maximus.",
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      { id: 3, text: "Lorem ipsum dolor sit amet," },
      {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl vitae purus",
      },
      { id: 5, text: "Lorem ipsum dolor sit amet," },
      {
        id: 6,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl vitae purus auctor sollicitudin ac vel nunc. Donec iaculis lectus ut urna feugiat maximus.",
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      { id: 3, text: "Lorem ipsum dolor sit amet," },
      {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl vitae purus",
      },
      { id: 5, text: "Lorem ipsum dolor sit amet," },
      {
        id: 6,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum",
      },
      {
        id: 3,
        text: "",
      },
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl vitae purus auctor sollicitudin ac vel nunc. Donec iaculis lectus ut urna feugiat maximus.",
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      { id: 3, text: "Lorem ipsum dolor sit amet," },
      {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl vitae purus",
      },
      { id: 5, text: "Lorem ipsum dolor sit amet," },
      {
        id: 6,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum",
      },
      {
        id: 4,
        text: "",
      },
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl vitae purus auctor sollicitudin ac vel nunc. Donec iaculis lectus ut urna feugiat maximus.",
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      { id: 3, text: "Lorem ipsum dolor sit amet," },
      {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl vitae purus",
      },
      { id: 5, text: "Lorem ipsum dolor sit amet," },
      {
        id: 6,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum",
      },
      {
        id: 5,
        text: "",
      },
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl vitae purus auctor sollicitudin ac vel nunc. Donec iaculis lectus ut urna feugiat maximus.",
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      { id: 3, text: "Lorem ipsum dolor sit amet," },
      {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl vitae purus",
      },
      { id: 5, text: "Lorem ipsum dolor sit amet," },
      {
        id: 6,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum",
      },
      {
        id: 6,
        text: "",
      },
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl vitae purus auctor sollicitudin ac vel nunc. Donec iaculis lectus ut urna feugiat maximus.",
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      { id: 3, text: "Lorem ipsum dolor sit amet," },
      {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl vitae purus",
      },
      { id: 5, text: "Lorem ipsum dolor sit amet," },
      {
        id: 6,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum",
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
  },
];
export default games;
