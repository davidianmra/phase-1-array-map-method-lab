const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  return tutorials.map(sentence => callback(sentence))
}
//the call back says, for every sentence, if its either the first character in the whole string
//OR if the character is preceeded by a ' ', then .toUppercase that character
function callback (sentence){
  console.log(sentence)
  let words = sentence.split(' ')
 
 
 return words.map(word =>{ 
    if(word.charAt(0) != word.charAt(0).toUpperCase()){
      return word.charAt(0).toUpperCase() + word.slice(1)
    } 
    return word
  }  ).join(' ')
console.log(words)

  }