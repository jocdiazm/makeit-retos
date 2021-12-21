import { useState, createContext, useContext } from 'react';

//1. crear el contexto
const VotingContext = createContext();

//2. Crear un componente tipo provider que contenga los hijos

export const candidates = {
  1: {
    fullName: 'Germán Escobar',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi deserunt maxime corporis minima voluptatem eaque.',
    votes: 30,
    img: 'https://makeitreal.camp/assets/people/german-escobar-907d8f33acd5018c67c7389b9b75bf51dbe39194362144da34dd904b9338f597.png',
  },
  2: {
    fullName: 'Cristian Moreno',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi deserunt maxime corporis minima voluptatem eaque.',
    votes: 45,
    img: 'https://pbs.twimg.com/profile_images/1435676170289393666/xEug7gKU_400x400.jpg',
  },
  3: {
    fullName: 'Miguel Casas',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi deserunt maxime corporis minima voluptatem eaque.',
    votes: 20,
    img: 'https://makeitreal.camp/assets/people/miguel-casas-97b89fbb392401176b0e1299a92ce83576ca2af0b933ff9bfd358eb286781661.jpg',
  },
  4: {
    fullName: 'Alejandro escobar',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi deserunt maxime corporis minima voluptatem eaque.',
    votes: 20,
    img: 'https://makeitreal.camp/assets/people/alejandro-escobar-d2becde9edd1263e7ec028c8f0785e286feebe6c15d26e9ad6f67a306d1f55e9.jpg',
  },
  5: {
    fullName: 'Link Strifer',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi deserunt maxime corporis minima voluptatem eaque.',
    votes: 25,
    img: 'https://miro.medium.com/fit/c/262/262/2*nQtFX7V5rHpFDabfE8qSbQ.jpeg',
  },
};

export const VotingProvider = ({ children }) => {
  const [candidatesCount, setCandidatesCount] = useState(candidates);
  const [option, setOption] = useState('total');
  const [totalVotes, setTotalVotes] = useState(
    Object.keys(candidatesCount)
      .map((id) => candidatesCount[id].votes)
      .reduce((acc, curr) => acc + curr, 0)
  );

  const propsToPass = {
    candidatesCount,
    setCandidatesCount,
    totalVotes,
    setTotalVotes,
    option,
    setOption,
  };

  return (
    <VotingContext.Provider value={propsToPass}>
      {children}
    </VotingContext.Provider>
  );
};

//3. Consumir el contexto
export const useVotes = () => {
  const context = useContext(VotingContext);
  if (context === undefined) {
    throw new Error('useContext debe estar dentro de VotingContext');
  }
  return context;
};
