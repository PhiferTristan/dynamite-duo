const database = {
  heroes: [
    {
      id: 1,
      name: "Dynoguy",
      power: "Fire blasts",
    },
    {
      id: 2,
      name: "Hyperspeed",
      power: "Super speed",
    },
  ],
  villains: [
    {
      id: 1,
      name: "Griffith",
      power:
        "Manipulate gravity and space, transcended to no longer exist within reason of the physical world, can percieve flow of causality and exert his will upon the world but not quite omnicient",
    },
    {
      id: 2,
      name: "Dio",
      power:
        "Superhuman abilities, vampire powers, and a Stand that can freeze time along with Johnathan's Stand for Spirit Photography",
    },
    {
      id: 3,
      name: "Hisoka",
      power:
        "Nen user Transmutation type, Elastic Love and Bungee Gum, which gives his aura the properties of both rubber and gum ",
    },
  ],
};

export const getHeroes = () => {
  return database.heroes.map((hero) => ({ ...hero }));
};

export const getVillains = () => {
  return database.villains.map((villain) => ({ ...villain }));
};
