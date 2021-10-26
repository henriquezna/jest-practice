function caesarCipher(word, shift) {
  let codeWord = '';
  
  for(let i = 0; i < word.length; i++){
    codeWord += String.fromCharCode(word.charCodeAt(i) + shift);
  }
  return codeWord;
}
  export default caesarCipher;