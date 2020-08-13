const Entrees = [
  {
    type: 'Entree',
    name: 'Salade de tomates',
    description:
      'Ceci est un élément de votre menu. Ajoutez une courte description.',
    price: '9',
    allergens: [''],
  },
  {
    type: 'Entree',
    name: 'Salade verte composée',
    description:
      'Ceci est un élément de votre menu. Ajoutez une courte description.',
    price: '9',
    allergens: ['vg', 'v', 'o'],
  },
  {
    type: 'Entree',
    name: 'Salade César au choux kale',
    description:
      'Ceci est un élément de votre menu. Ajoutez une courte description.',
    price: '9,50',
    allergens: [''],
  },
  {
    type: 'Entree',
    name: 'Chou-fleur grillé',
    description:
      'Ceci est un élément de votre menu. Ajoutez une courte description.',
    price: '7',
    allergens: ['vg', 'v', 'o'],
  },
  {
    type: 'Entree',
    name: 'Fromage de chèvre aux asperges',
    description:
      'Ceci est un élément de votre menu. Ajoutez une courte description.',
    price: '10,50',
    allergens: [''],
  },
  {
    type: 'Entree',
    name: 'Hummus et tehina',
    description:
      'Ceci est un élément de votre menu. Ajoutez une courte description.',
    price: '12',
    allergens: [''],
  },
];

const MainCourses = [
  {
    type: 'Main',
    name: 'Tortilla au maïs et aux légumes sucrés',
    description:
      'Ceci est un élément de votre menu. Ajoutez une courte description.',
    price: '12',
    allergens: [''],
  },
  {
    type: 'Main',
    name: 'Riz sauvage au broccoli',
    description:
      'Ceci est un élément de votre menu. Ajoutez une courte description.',
    price: '17,95',
    allergens: [''],
  },
  {
    type: 'Main',
    name: 'Quinoa aux champignons',
    description:
      'Ceci est un élément de votre menu. Ajoutez une courte description.',
    price: '22,50',
    allergens: [''],
  },
  {
    type: 'Main',
    name: 'Pad Thai au tofu',
    description:
      'Ceci est un élément de votre menu. Ajoutez une courte description.',
    price: '18,50',
    allergens: [''],
  },
  {
    type: 'Main',
    name: 'Lasagnes végétariennes',
    description:
      'Ceci est un élément de votre menu. Ajoutez une courte description.',
    price: '16,95',
    allergens: [''],
  },
  {
    type: 'Main',
    name: 'Pousses de légumes épicées et grillées',
    description:
      'Ceci est un élément de votre menu. Ajoutez une courte description.',
    price: '26,75',
    allergens: ['s', 'o', 'gf'],
  },
];

// I have created a desert section on the Menu page too. If you want to add them in the future, just add the code to de Deserts array above, in the same style as all the courses are listed now. The Desert section is invisible until there are items in it.
const Deserts = [];

export { Entrees, MainCourses, Deserts };

// Legend for the allergens:
// s = spicy
// o = organic
// gf = gluten free
// v = vegan
// vg = vegetarian
