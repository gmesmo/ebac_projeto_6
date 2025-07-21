import Restaurant, { DishesType } from 'models/Restaurant'

const TrattoriaDishes: DishesType[] = [
  {
    id: 1,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: require('./images/Trattoria/Marguerita.png')
  },
  {
    id: 2,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: require('./images/Trattoria/Marguerita.png')
  },
  {
    id: 3,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: require('./images/Trattoria/Marguerita.png')
  },
  {
    id: 4,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: require('./images/Trattoria/Marguerita.png')
  },
  {
    id: 5,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: require('./images/Trattoria/Marguerita.png')
  },
  {
    id: 6,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: require('./images/Trattoria/Marguerita.png')
  }
]

export const restaurantes: Restaurant[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    image: require('./images/sushi.png'),
    destaque: true,
    cuisine: 'Japonesa',
    description: [
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.',
      'Experimente o Japão sem sair do lar com nosso delivery!'
    ],
    rating: 4.9,
    link: '/'
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    image: require('./images/trattoria.png'),
    cuisine: 'Italiana',
    description: [
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
    ],
    rating: 4.6,
    link: '/Store/Trattoria',
    dishes: TrattoriaDishes
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    image: require('./images/trattoria.png'),
    cuisine: 'Italiana',
    description: [
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
    ],
    rating: 4.6,
    link: '/Store/Trattoria',
    dishes: TrattoriaDishes
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    image: require('./images/trattoria.png'),
    cuisine: 'Italiana',
    description: [
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
    ],
    rating: 4.6,
    link: '/Store/Trattoria',
    dishes: TrattoriaDishes
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    image: require('./images/trattoria.png'),
    cuisine: 'Italiana',
    description: [
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
    ],
    rating: 4.6,
    link: '/Store/Trattoria',
    dishes: TrattoriaDishes
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    image: require('./images/trattoria.png'),
    cuisine: 'Italiana',
    description: [
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
    ],
    rating: 4.6,
    link: '/Store/Trattoria',
    dishes: TrattoriaDishes
  }
]
