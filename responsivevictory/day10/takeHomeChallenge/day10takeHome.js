// const fetchPokemon = async () => {
//     const response = await fetch(" https://pokeapi.co/api/v2/pokemon/meowth");
//     const data = await response.json();
//     console.log(data);
//   };

//   console.log(fetchPokemon())

fetch(" https://pokeapi.co/api/v2/pokemon/meowth")
.then(res => res.json())
.then(data => console.log(data.name))