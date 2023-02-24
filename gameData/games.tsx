const games = [
  {
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
    mision: {
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
  },
];
export default games;
