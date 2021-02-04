/* 
  Add your pokemon to this list
*/
const pokemons = [
  {
    id: 1,
    sprite:
      "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    weight: 6.9,
    link: "http://pokemondb.net/pokedex/bulbasaur",
  },
  {
    id: 2,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
    name: "Ivysaur",
    type: ["Grass", "Poison"],
    weight: 13,
    link: "http://pokemondb.net/pokedex/ivysaur",
  },
  {
    id: 3,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/venusaur.png",
    name: "Venusaur",
    type: ["Grass", "Poison"],
    weight: 100,
    link: "http://pokemondb.net/pokedex/venusaur",
  },
];

/* 
  Don't need to worry about the code below 
*/
const ID = "id";
const SPRITE = "sprite";
const NAME = "name";
const TYPE = "type";
const WEIGHT = "weight";
const LINK = "link";

const fields = [ID, SPRITE, NAME, TYPE, WEIGHT];
const table = document.getElementById("pokemonTable");

pokemons
  .sort((a, b) => (a.id > b.id ? true : false))
  .forEach((pokemon, index) => {
    if (index === 0) {
      return;
    }

    const link = pokemon[LINK];
    const row = table.insertRow(index + 1);

    let innerHTML = "";
    fields.forEach((key, keyIndex) => {
      let value = pokemon[key];

      switch (key) {
        case SPRITE:
          value = `<img src="${value}" alt="${name}"/>`;
          break;
        case NAME:
          value = `<a href="${link}" target="_blank">${value}</a>`;
          break;
        case TYPE:
          value = value.join(", ");
          break;
        case WEIGHT:
          value = `${value}kg`;
          break;
      }

      if (key === ID) {
        value = `<th scope="row">${value}</th>`;
      } else {
        value = `<td>${value}</td>`;
      }

      innerHTML += value;
    });

    row.innerHTML = innerHTML;
  });
