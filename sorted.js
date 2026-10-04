const items = [
  { name: "Eadward", value: 21 },
  { name: "Ebdward", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// trier par valeur
items.sort((a, b) => a.value - b.value);

// trier par nom
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignorer les majuscules/minuscules
  const nameB = b.name.toUpperCase(); // ignorer les majuscules/minuscules
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // les noms sont égaux
  return 0;
});

console.log(
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignorer les majuscules/minuscules
    const nameB = b.name.toUpperCase(); // ignorer les majuscules/minuscules
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

    // les noms sont égaux
    return 0;
  }),
);
