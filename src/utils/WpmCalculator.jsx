export const calculateWpm = (wordsTyped, elapsedTime) => {
  const minutes = elapsedTime / 60000;
  return Math.round(wordsTyped / minutes);
};
