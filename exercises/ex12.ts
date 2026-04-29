// Write a function called areAllCharactersUnique that takes in a string and
// returns true or false depending on whether all characters in the string are unique (i.e., no character is repeated).

const areAllCharactersUnique = (text: string): boolean => {
  const seen = new Set<string>();

  for (const char of text) {
    if (seen.has(char)) {
      return false;
    }
    seen.add(char);
  }

  return true;
};

export default areAllCharactersUnique;

areAllCharactersUnique("abcdefg"); // Expected result: true
areAllCharactersUnique("abcdefgA"); // Expected result: true
areAllCharactersUnique("programming"); // Expected result: false
areAllCharactersUnique(""); // Expected result: true
areAllCharactersUnique("a"); // Expected result: true
