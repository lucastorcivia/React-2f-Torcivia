const categories = [
  {
    id: 1,
    name: 'Graficas',
  },
  {
    id: 2,
    name: 'Procesadores',
  },
  {
    id: 3,
    name: 'Perifericos',
  },
  {
    id: 4,
    name: 'Varios',
  },
];

const products = [
  {
    id: 1,
    categoryId: 1,
    name: 'Gtx 1050',
    description: '4 gb',
    stock: 10,
    price: 70000,
    image: '/images/1.png'
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Gtx 1650',
    description: '4 gb',
    stock: 5,
    price: 95000,
    image: '/images/2.png'
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Rx 6500 xt',
    description: '4 gb',
    stock: 5,
    price: 160000,
    image: '/images/3.png'
  },
  {
    id: 4,
    categoryId: 2,
    name: 'Ryzen 5 2600',
    description: 'AM4',
    stock: 15,
    price: 80000,
    image: '/images/4.png'
  },
  {
    id: 5,
    categoryId: 2,
    name: 'Intel Core 5',
    description: '10 Generacion',
    stock: 5,
    price: 170000,
    image: '/images/5.png'
  },
  {
    id: 6,
    categoryId: 3,
    name: 'Monitor',
    description: '24 pulgadas',
    stock: 20,
    price: 150000,
    image: '/images/6.png'
  },
  {
    id: 7,
    categoryId: 4,
    name: 'Pasta Termica',
    description: 'Mx4',
    stock: 30,
    price: 5000,
    image: '/images/7.png'
  },
];

export { categories, products };
