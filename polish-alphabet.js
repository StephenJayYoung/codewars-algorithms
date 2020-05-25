
// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

function correctPolishLetters (string) {
  let newString = 
  string.replace(/ą/gi, "a").replace(/ć/gi, "c").replace(/ę/gi, "e").replace(/ł/gi, "l").replace(/ń/gi, "n").replace(/ó/gi, "o").replace(/ś/gi, "s").replace(/ź/gi, "z").replace(/ż/gi, "z");
  return newString;  
}  
correctPolishLetters("Jędrzej Błądziński");