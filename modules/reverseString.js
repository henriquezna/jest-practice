function reverseString(word) {
    let reverse = '';
    for(let i = word.length-1; i > -1; i--){
        reverse += word[i];
    }
    return reverse;
  }
  export default reverseString;