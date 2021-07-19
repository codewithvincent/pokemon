/* 
  Add your pokemon to this list

  Keys:
    - id:      The id of the pokemon
    - sprite:  The link to the pokemon sprite
    - name:    The name of the pokemon
    - type:    A list with the types that the pokemon inherits
    - weight:  The weight of the pokemon in kg
    - link:    The link to get more details about the pokemon
    - addedBy: A github user id
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
    sprite:
      "https://img.pokemondb.net/sprites/black-white/normal/charmander.png",
    name: "Charmander",
    type: ["Fire"],
    weight: 8.5,
    link: "https://pokemondb.net/pokedex/charmander",
    addedBy: "deechow",
  },
  {
    id: 5,
    sprite:
      "https://img.pokemondb.net/sprites/black-white/normal/charmeleon.png",
    name: "Charmeleon",
    type: ["Fire"],
    weight: 19,
    link: "https://pokemondb.net/pokedex/charmander",
    addedBy: "deechow",
  },
  {
    id: 6,
    sprite:
      "https://img.pokemondb.net/sprites/black-white/normal/charizard.png",
    name: "Charizard",
    type: ["Fire", "Flying"],
    weight: 90.5,
    link: "https://pokemondb.net/pokedex/charizard",
    addedBy: "deechow",
  },
  {
    id: 7,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/squirtle.png",
    name: "Squirtle",
    type: ["Water"],
    weight: 9,
    link: "https://pokemondb.net/pokedex/squirtle",
    addedBy: "deechow",
  },
  {
    id: 8,
    sprite:
      "https://img.pokemondb.net/sprites/black-white/normal/wartortle.png",
    name: "Wartortle",
    type: ["Water"],
    weight: 22.5,
    link: "https://pokemondb.net/pokedex/wartortle",
    addedBy: "deechow",
  },
  {
    id: 9,
    sprite:
      "https://img.pokemondb.net/sprites/black-white/normal/blastoise.png",
    name: "Blastoise",
    type: ["Water"],
    weight: 85.5,
    link: "https://pokemondb.net/pokedex/blastoise",
    addedBy: "deechow",
  },
  {
    id: 10,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/caterpie.png",
    name: "Caterpie",
    type: ["Bug"],
    weight: 2.9,
    link: "https://pokemondb.net/pokedex/caterpie",
    addedBy: "deechow",
  },
  {
    id: 11,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/metapod.png",
    name: "Metapod",
    type: ["Bug"],
    weight: 9.9,
    link: "https://pokemondb.net/pokedex/metapod",
    addedBy: "deechow",
  },
  {
    id: 12,
    sprite:
      "https://img.pokemondb.net/sprites/black-white/normal/butterfree.png",
    name: "Butterfree",
    type: ["Bug"],
    weight: 32,
    link: "https://pokemondb.net/pokedex/butterfree",
    addedBy: "deechow",
  },
  {
    id: 13,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/weedle.png",
    name: "Weedle",
    type: ["Bug", "Poison"],
    weight: 3.2,
    link: "https://pokemondb.net/pokedex/weedle",
    addedBy: "deechow",
  },
  {
    id: 14,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/kakuna.png",
    name: "Kakuna",
    type: ["Bug", "Poison"],
    weight: 10,
    link: "https://pokemondb.net/pokedex/kakuna",
    addedBy: "deechow",
  },
  {
    id: 15,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/beedrill.png",
    name: "Beedrill",
    type: ["Bug", "Poison"],
    weight: 29.5,
    link: "https://pokemondb.net/pokedex/beedrill",
    addedBy: "deechow",
  },
  {
    id: 16,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/pidgey.png",
    name: "Pidgey",
    type: ["Normal", "Flying"],
    weight: 1.8,
    link: "https://pokemondb.net/pokedex/pidgey",
    addedBy: "judeboachie",
  },
  {
    id: 17,
    sprite:
      "https://img.pokemondb.net/sprites/black-white/normal/pidgeotto.png",
    name: "Pidgeotto",
    type: ["Normal", "Flying"],
    weight: 30.0,
    link: "https://pokemondb.net/pokedex/pidgeotto",
    addedBy: "judeboachie",
  },
  {
    id: 18,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/pidgeot.png",
    name: "Pidgeot",
    type: ["Normal", "Flying"],
    weight: 39.5,
    link: "https://pokemondb.net/pokedex/pidgeot",
    addedBy: "judeboachie",
  },
  {
    id: 19,
    sprite:
      "https://img.pokemondb.net/sprites/black-white/normal/rattata-f.png",
    name: "Rattata",
    type: ["Normal"],
    weight: 3.5,
    link: "https://pokemondb.net/pokedex/rattata",
    addedBy: "judeboachie",
  },
  {
    id: 20,
    sprite:
      "https://img.pokemondb.net/sprites/black-white/normal/raticate-f.png",
    name: "Raticate",
    type: ["Normal"],
    weight: 18.5,
    link: "https://pokemondb.net/pokedex/raticate",
    addedBy: "judeboachie",
  },
  {
    id: 21,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/spearow.png",
    name: "Spearow",
    type: ["Normal", "Flying"],
    weight: 2.0,
    link: "https://pokemondb.net/pokedex/spearow",
    addedBy: "judeboachie",
  },
  {
    id: 22,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/fearow.png",
    name: "Fearow",
    type: ["Normal", "Flying"],
    weight: 38.0,
    link: "https://pokemondb.net/pokedex/fearow",
    addedBy: "judeboachie",
  },
  {
    id: 23,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/ekans.png",
    name: "Ekans",
    type: ["Poison"],
    weight: 6.9,
    link: "https://pokemondb.net/pokedex/ekans",
    addedBy: "judeboachie",
  },
  {
    id: 24,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/arbok.png",
    name: "Arbok",
    type: ["Poison"],
    weight: 65.0,
    link: "https://pokemondb.net/pokedex/arbok",
    addedBy: "judeboachie",
  },
  {
    id: 25,
    sprite:
      "https://img.pokemondb.net/sprites/black-white/normal/pikachu-f.png",
    name: "Pikachu",
    type: ["Electric"],
    weight: 6.0,
    link: "https://pokemondb.net/pokedex/pikachu",
    addedBy: "judeboachie",
  },
  {
    id: 26,
    sprite:
      "https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/normal/larvitar.png",
    name: "Larvitar",
    type: ["Rock", "Ground"],
    weight: 72.0,
    link: "https://pokemondb.net/pokedex/larvitar",
    addedBy: "davidtothekim",
  },
  {
    id: 27,
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/pupitar.png",
    name: "Pupitar",
    type: ["Rock", "Ground"],
    weight: 152,
    link: "https://pokemondb.net/pokedex/pupitar",
    addedBy: "Davuong93",
  },
];

/* 
  Don't need to worry about the code below 
*/

// Helper functions
function makeParagraph(text) {
  let element = document.createElement("p");
  element.textContent = text
  return element;
}

function makeImage(src, alt) {
  let element = document.createElement("img");
  element.src = src;
  element.alt = alt;
  return element;
}

function makeImage(src, alt) {
  let element = document.createElement("img");
  element.src = src;
  element.alt = alt;
  return element;
}

function makeLink(href, text) {
  let element = document.createElement("a");
  element.href = href;
  element.innerText = text;
  return element;
}

function wrapElementAsHeaderRow(element) {
  const tdElement = document.createElement("th");
  tdElement.scope = "row";
  tdElement.appendChild(element)
  return tdElement;
}

function wrapElementAsDataRow(element) {
  const tdElement = document.createElement("td");
  tdElement.appendChild(element)
  return tdElement;
}

// The keys available in the pokemon dictionary
const ID = "id";
const SPRITE = "sprite";
const NAME = "name";
const TYPE = "type";
const WEIGHT = "weight";
const ADDED_BY = "addedBy";
const LINK = "link";

// The order of the keys that we want to display data in the table
const fields = [ID, SPRITE, NAME, TYPE, WEIGHT, ADDED_BY];
// Get the table element, and get the reference of `tbody`
const table = document.getElementById("pokemonTable");
const tbodyRef = table.getElementsByTagName("tbody")[0];

// Loop through the list of pokemons (above)
pokemons
  // Sort based on id
  .sort((a, b) => {
    return a.id > b.id;
  })
  // forEach takes in a function, below is shorthand of a function that
  // - parameter pokemon: A pokemon object
  // - parameter index:   The position of the pokemon
  .forEach((pokemon, index) => {
    const link = pokemon[LINK];
    const name = pokemon[NAME];
    // Add a row to the table body
    const row = tbodyRef.insertRow(index);

    // The element we want to create 
    let element = null;

    // Go through the fields, to create the element
    fields.forEach((key) => {
      // Get the value for this key
      let value = pokemon[key];

      // A switch is basically a if statement
      switch (key) {
        case ID:
          element = makeParagraph(value);
          break;
        case SPRITE:
          // Create the image
          element = makeImage(value, name);
          break;
        case NAME:
          // Add the name with a link
          element = makeLink(link, value);
          break;
        case TYPE:
          // Comma seperate the types
          element = makeParagraph(value.join(", "));
          break;
        case WEIGHT:
          // Add kg to the end of the weight
          element = makeParagraph(`${value}kg`);
          break;
        case ADDED_BY:
          // Add a link to the user's github
          element = makeLink(`https://github.com/${value}`, value);
          break;
      }

      // If key is ID, we want to make a header row
      if (key === ID) {
        element = wrapElementAsHeaderRow(element);
      } else {
        // Wrap the element as a data row
        element = wrapElementAsDataRow(element);
      }

      // Add element as a child of the row
      row.appendChild(element);
    });
  });
