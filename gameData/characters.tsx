export interface CharacterType {
  id: string;
  fromGame: string;
  gameId: string;
  name: string;
  pronouns: string;
  age: string;
  gifts: {
    description: string;
    list: string[];
  };
  upbringing: {
    desciption: string;
    list: string[];
  };
  experience: {
    description: string;
    list: string[];
  };
  mark: {
    list: string[];
  };
  charm: {
    list: string[];
  };
  bond: {
    list: string[];
  };
}

// const characters = [
//   {
//     id: "1",
//     fromGame: "A Cidade - Poço",
//     gameId: "1",
//     name: "My Name",
//     pronouns: "he/him",
//     age: "12",
//     gifts: {
//       description: "Meus dons sorteados:",
//       list: [
//         "Irresistivelmente feio e desajeitado",
//         "Tão indiferente que jamais perde o controle",
//         "Às do equilíbrio social",
//         "Simpático até com quem não merece",
//         "Expert em tecno-tecnologia velha",
//         "Perito em rebeldia bem colocada",
//       ],
//     },
//     upbringing: {
//       desciption: "Minhas origens:",
//       list: [
//         "O Centro-Terra",
//         "Ribeirinho do Lago de Ácido",
//         "Cohab de Conaptos",
//         "Círculo Vermelho dos Prazeres",
//         "Movimentada Alameda do Suicídio",
//         "Superfície Aristo",
//       ],
//     },
//     experience: {
//       description: "",
//       list: [
//         "Medíocre Detetive Particular Classe 'R'",
//         "Aristo Calejada em Múltiplos Níveis",
//         "Gentil e Implacável Máquina de Matar",
//         "Carismático Revolucionário Brutamontes",
//         "Lixeiro Rebelde Sem Causa",
//         "Ativista da Sabedoria Pré-Tecna",
//       ],
//     },
//     mark: {
//       list: [
//         "Tem medo do Céu de Jodorow",
//         "Não dá um passo sem o seu Tarot",
//         "Adorador do Ovo Andrógino",
//         "Seguidor de Orh",
//         "Não confia em Orgarganos",
//         "Ama Uísque, SPV e Homeoputas",
//       ],
//     },
//     charm: {
//       list: [
//         "Fiel pássaro de cimento como mascote",
//         "Auréola Ectoplasmática",
//         "Katana Cromovibrante",
//         "Pistola Phaser com Xenocalibre",
//         "Caixa de Ferramentas Neurotecno",
//         "Amorina e Cocaloca",
//       ],
//     },
//     bond: {
//       list: [
//         "Ser notado pelo Diavaloo",
//         "Conquistar a Luz de Garra",
//         "Acabar com os planos de Kill Cara-de-cão",
//         "Pagar o que deve ao Gorgo-o-sujo",
//         "Desbancar as Necrocorps",
//         "Se tornar um Metabarão",
//       ],
//     },
//   },
//   {
//     id: "2",
//     fromGame: "A Cidade - Poço",
//     gameId: "1",
//     name: "Character 2 blablabla",
//     pronouns: "they/them",
//     age: "20",
//     gifts: {
//       description: "Meus dons sorteados2:",
//       list: [
//         "Irresistivelmente feio e desajeitado",
//         "Tão indiferente que jamais perde o controle",
//         "Às do equilíbrio social",
//         "Simpático até com quem não merece",
//         "Expert em tecno-tecnologia velha",
//         "Perito em rebeldia bem colocada",
//       ],
//     },
//     upbringing: {
//       desciption: "Minhas origens:",
//       list: [
//         "O Centro-Terra",
//         "Ribeirinho do Lago de Ácido",
//         "Cohab de Conaptos",
//         "Círculo Vermelho dos Prazeres",
//         "Movimentada Alameda do Suicídio",
//         "Superfície Aristo",
//       ],
//     },
//     experience: {
//       description: "",
//       list: [
//         "Medíocre Detetive Particular Classe 'R'",
//         "Aristo Calejada em Múltiplos Níveis",
//         "Gentil e Implacável Máquina de Matar",
//         "Carismático Revolucionário Brutamontes",
//         "Lixeiro Rebelde Sem Causa",
//         "Ativista da Sabedoria Pré-Tecna",
//       ],
//     },
//     mark: {
//       list: [
//         "Tem medo do Céu de Jodorow",
//         "Não dá um passo sem o seu Tarot",
//         "Adorador do Ovo Andrógino",
//         "Seguidor de Orh",
//         "Não confia em Orgarganos",
//         "Ama Uísque, SPV e Homeoputas",
//       ],
//     },
//     charm: {
//       list: [
//         "Fiel pássaro de cimento como mascote",
//         "Auréola Ectoplasmática",
//         "Katana Cromovibrante",
//         "Pistola Phaser com Xenocalibre",
//         "Caixa de Ferramentas Neurotecno",
//         "Amorina e Cocaloca",
//       ],
//     },
//     bond: {
//       list: [
//         "Ser notado pelo Diavaloo",
//         "Conquistar a Luz de Garra",
//         "Acabar com os planos de Kill Cara-de-cão",
//         "Pagar o que deve ao Gorgo-o-sujo",
//         "Desbancar as Necrocorps",
//         "Se tornar um Metabarão",
//       ],
//     },
//   },
// ];

// export default characters;
