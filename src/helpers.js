const randomArrayItem = data => {
  return data[Math.floor(Math.random() * data.length)];
};

export const getRandomTagline = () => {
  const taglines = [
    'This could be your bucket list',
    'This could be your shopping list',
    'This could be your wedding list'
  ];
  return randomArrayItem(taglines);
};
