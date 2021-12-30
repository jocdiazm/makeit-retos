function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const imgs = importAll(
  require.context('./images', false, /\.(png|jpe?g|svg)$/),
);

export const plates = [
  {
    name: 'Chicken salad',
    price: 4.5,
    img: imgs['plate__chicken-salad'],
  },
  {
    name: 'Chicken salad',
    price: 4.5,
    img: imgs['plate__chicken-salad'],
  },
  {
    name: 'Chicken salad',
    price: 4.5,
    img: imgs['plate__chicken-salad'],
  },
];
