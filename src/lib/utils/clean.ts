export const clean = (letters: string) => {
  return letters.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
