const recipes = [
  {
    id: "my-favourite-dish",
    name: "My favourite dish",
    portions: 4,
    ingredientGroups: [
      {
        name: "Side",
        ingredients: [
          {
            name: "potatoes",
            amount: "1",
            unit: "kg",
          },
          {
            name: "leeks",
            amount: "0.25",
            unit: "kg",
          },
        ],
      },
      {
        name: "Meat",
        ingredients: [
          {
            name: "chicken",
            amount: "1",
            unit: "kg",
          },
          {
            name: "bacon",
            amount: "0.25",
            unit: "kg",
          },
        ],
      },
    ],
    methodGroups: [
      {
        name: "Side",
        steps: ["Peel potatoes", "Wash leeks", "Cut vegetables"],
      },
      {
        name: "Meat",
        steps: ["Cut bacon", "Cut chicken", "Salt chicken"],
      },
    ],
  },
  {
    id: "my-favourite-cake",
    name: "My favourite cake",
    portions: 12,
    ingredientGroups: [
      {
        ingredients: [
          {
            name: "sugar",
            amount: "1",
            unit: "kg",
          },
          {
            name: "flour",
            amount: "0.25",
            unit: "kg",
          },
        ],
      },
    ],
    methodGroups: [
      {
        steps: ["Sift flour", "Mix sugar with eggs", "Soften butter"],
      },
    ],
  },
];

export default recipes;
