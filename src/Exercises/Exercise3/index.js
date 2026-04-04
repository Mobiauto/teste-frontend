// faça uma chamada rick and morty api e resgate informações do seguintes personagens (Rick Sanchez, Morty Smith, Summer Smith, Beth Smith, Jerry Smith)
// e ajustar os dados para que fiquem igual a saida de exemplo.
// API aberta não precisa de token
// Documentação
// https://rickandmortyapi.com/documentation/#rest

// Ex de Saida: [
//   {
//     nome: 'Rick Sanchez',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Morty Smith',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Summer Smith',
//     genero: 'Mulher',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Beth Smith',
//     genero: 'Mulher',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Jerry Smith',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
//     especie: 'Humano'
//   }
// ]

function translate(word) {
  switch (word) {
    case "Male":
      return "Homem";
    case "Female":
      return "Mulher";
    case "Human":
      return "Humano";
    default:
      return word;
  }
}

async function getRicAndMortyCharacters() {
  const url = "https://rickandmortyapi.com/api/character";
  try {
    const res = await fetch(url);
    const { results } = await res.json();
    const slicedResults = results.slice(0, 5);
    const mappedResults = slicedResults.map((caracter) => {
      return {
        nome: caracter.name,
        avatar: caracter.image,
        genero: translate(caracter.gender),
        especie: translate(caracter.species),
      };
    });
    return mappedResults;
  } catch (err) {
    console.log(err.message);
    return [];
  }
}

module.exports = getRicAndMortyCharacters;
