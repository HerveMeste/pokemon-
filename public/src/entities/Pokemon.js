class Pokemon {
  constructor(name, image, hp, attacks) {
    this.name = name;
    this.image = image;
    this.hp = hp;
    this.fullHp = hp;
    this.attacks = attacks;
  }
}
let ListPokemon = [
  [
    "Dracaufeu",
    "https://img.pokemondb.net/sprites/black-white/normal/charizard.png",
    360,
    [
      ["Lance-Flamme", "feu", 70, 0.9],
    ],
  ],
  [
    "Tortank",
    "https://img.pokemondb.net/sprites/black-white/normal/blastoise.png",
    362,
    [
      ["HydroCanon", "eau", 70, 0.9],
    ],
  ],
  [
    "Florizard",
    "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
    364,
    [
      ["Lance-Soleil", "plante", 70, 0.9],
    ],
  ],
];
let typeMatch = {
  Dracaufeu: [[""], ["eau"], ["feu", "plante"]],
  Tortank: [[""], ["plante"], ["feu", "eau"]],
  Florizard: [[""], ["feu"], ["plante", "eau"]],
};

function spawn(bool) {
    let randomPokemon =
      ListPokemon[Math.floor(Math.random() * ListPokemon.length)];
    let pokemon = new Pokemon(
      randomPokemon[0],
      randomPokemon[1],
      randomPokemon[2],
      randomPokemon[3]
    );
    if (bool) {
      document.getElementById("m0").value = pokemon.attacks[0][0];
    }
    return pokemon;
  }

function attackToPokemon(attackPokemon, attacker, receiver, hp, owner) {
  document.getElementById("comment").innerHTML =
    "<p> " + owner + attacker.name + " utilise " + attackPokemon[0] + "!</p>";
  let probability = Math.random() < attackPokemon[3];
  if (probability) {
    let powerAttack = (attackPokemon[2] += Math.floor(Math.random() * 10));
    let rtype = typeMatch[receiver.name];
    let mtype = attackPokemon[1];
    let scale = 1;

    for (i = 0; i < rtype.length; i++) {
      if (rtype[i].includes(mtype)) {
        switch (i) {
          case 0:
            scale = 0;
            setTimeout(() => {
              document.getElementById("comment").innerHTML =
                "<p> ça n'a aucun effet! </p>";
            }, 1000);
            break;

          case 1:
            scale = 1.25;
            setTimeout(() => {
              document.getElementById("comment").innerHTML =
                "<p> Super efficace! </p>";
            }, 1000);
            break;

          case 2:
            scale = 0.5;
            setTimeout(() => {
              document.getElementById("comment").innerHTML =
                "<p> ça n'a pas beaucoup d'effet </p>";
            }, 1000);
            break;
        }
        break;
      }
    }

    powerAttack *= scale;
    receiver.hp -= Math.floor(powerAttack);
    document.getElementById(hp).innerHTML =
      "<p>HP: " + receiver.hp + "/" + receiver.fullHp + "</p>";
  } else {
    setTimeout(() => {
      document.getElementById("comment").innerHTML =
        "<p> Attaque manquée ! </p>";
    });
  }
  checkWinner(hp);
}

function checkWinner(hp) {
  let pokemonDie =
    pokemonOne.hp <= 0 ? pokemonOne : pokemonTwo.hp <= 0 ? pokemonTwo : false;
  if (pokemonDie != false) 
  {
    alert("Game Over : " + pokemonDie.name + " a perdu ! ");
    document.getElementById(hp).innerHTML =
    "<p>HP: 0/" + pokemonDie.fullHp + " </p>";
    setTimeout(() => {
      location.reload;
    }, 2500);
    window.close();
  }
}
