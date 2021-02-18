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
    addedBy: "vincentvvv",
  },
  {
    id: 2,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
    name: "Ivysaur",
    type: ["Grass", "Poison"],
    weight: 13,
    link: "http://pokemondb.net/pokedex/ivysaur",
    addedBy: "vincentvvv",
  },
  {
    id: 3,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/venusaur.png",
    name: "Venusaur",
    type: ["Grass", "Poison"],
    weight: 100,
    link: "http://pokemondb.net/pokedex/venusaur",
    addedBy: "vincentvvv",
  },
  {
    id: 4,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/charmander.png",
    name: "Charmander",
    type: ["Fire"],
    weight: 8.5,
    link: "https://pokemondb.net/pokedex/charmander",
    addedBy: "deechow",
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
const ADDED_BY = "addedBy";
const LINK = "link";

const fields = [ID, SPRITE, NAME, TYPE, WEIGHT, ADDED_BY];
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
    fields.forEach((key) => {
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
        case ADDED_BY:
          value = `<a href="https://github.com/${value}" target="_blank">${value}</a>`;
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
