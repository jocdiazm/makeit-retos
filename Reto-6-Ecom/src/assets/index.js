/* eslint-disable dot-notation */
export function importAll(r) {
  const images = {};
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item);
    return null;
  });
  return images;
}

export const imgs = importAll(
  require.context('./', false, /\.(png|jpe?g|svg)$/),
);

const plates = [
  {
    name: 'Bacon and Eggs',
    price: 4.5,
    img: imgs['plate__bacon-eggs.png'],
  },
  {
    name: 'Chicken Salad',
    price: 2.8,
    img: imgs['plate__chicken-salad.png'],
  },
  {
    name: 'Fish sticks and Fries',
    price: 6.0,
    img: imgs['plate__fish-sticks-fries.png'],
  },
  {
    name: 'French Fries',
    price: 2.5,
    img: imgs['plate__french-fries.png'],
  },
  {
    name: 'Ravioli',
    price: 7.5,
    img: imgs['plate__ravioli.png'],
  },
  {
    name: 'Salmon and vegetables',
    price: 8.5,
    img: imgs['plate__salmon-vegetables.png'],
  },
  {
    name: 'Spagehetti and Meat sauce',
    price: 6.5,
    img: imgs['plate__spaghetti-meat-sauce.png'],
  },
  {
    name: 'Tortillini',
    price: 9.5,
    img: imgs['plate__tortellini.png'],
  },
];

export default plates;
