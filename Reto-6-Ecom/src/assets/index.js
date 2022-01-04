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

export const plateAssets = {
  check: imgs['check.svg'],
  chevron: imgs['chevron.svg'],
};
const menuPlates = [
  {
    name: 'Bacon and Eggs',
    price: 4.51,
    img: imgs['plate__bacon-eggs.png'],
  },
  {
    name: 'Chicken Salad',
    price: 2.82,
    img: imgs['plate__chicken-salad.png'],
  },
  {
    name: 'Fish sticks and Fries',
    price: 6.15,
    img: imgs['plate__fish-sticks-fries.png'],
  },
  {
    name: 'French Fries with Ketchup',
    price: 2.56,
    img: imgs['plate__french-fries.png'],
  },
  {
    name: 'Ravioli',
    price: 7.57,
    img: imgs['plate__ravioli.png'],
  },
  {
    name: 'Salmon and vegetables',
    price: 8.52,
    img: imgs['plate__salmon-vegetables.png'],
  },
  {
    name: 'Spagehetti and Meat sauce',
    price: 6.56,
    img: imgs['plate__spaghetti-meat-sauce.png'],
  },
  {
    name: 'Tortillini',
    price: 9.54,
    img: imgs['plate__tortellini.png'],
  },
];

export default menuPlates;
