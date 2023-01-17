const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const codedString = Array.from(expr);
  const codedLetters = [];
  const decodedLetters = [];
  const decodedArray = [];

  while (codedString.length) {
    codedLetters.push(codedString.splice(0, 10));
  }

  for (let codedLetter of codedLetters) {
    let decodedLetter = [];
    while (codedLetter.length) {
      const twoValues = codedLetter.splice(0, 2);
      if (twoValues.join('') === '10') {
        decodedLetter.push('.');
      }
      if (twoValues.join('') === '11') {
        decodedLetter.push('-');
      }
      if (twoValues.join('') === '**') {
        decodedLetter.push(' ');
      }
    }
    decodedLetters.push(decodedLetter);
  }

  for (const letter of decodedLetters) {
    decodedArray.push(MORSE_TABLE[letter.join('')]);
  }

  return decodedArray
    .map((letter) => {
      return letter === undefined ? (letter = ' ') : letter;
    })
    .join('');
}

module.exports = {
  decode,
};
