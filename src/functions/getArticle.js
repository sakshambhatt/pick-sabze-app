function getArticle(veggieName) {
  const firstLetter = veggieName.charAt(0);
  const vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  return vowelSet.has(firstLetter) ? `an` : `a`;
}

export default getArticle;
