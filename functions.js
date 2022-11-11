//1. sum zero
let array = [1, 3, 4, 7, 3]
let array2 = [ 1, 2, 3, 4, 5]
function addToZero (arr) {
    for (let i=0; i<arr.length; i++) {
        const curNum = arr[i];
        for (let j=i+1; j<arr.length; j++) {
          if ((curNum - arr[j]) === 0) {
            return true
          }else{
            return false
          }
        }
      }
}

// console.log(addToZero(array))
// console.log(addToZero(array2))


//2.Unique Characters

function uniqueChars (str) {
    for (let i = 0; i< str.length; i++){
        for ( let k = 1; k < str.length; k++){
           if( str[i].includes(str[k])){
            return true
           }else{
            return false
           }
        }
    }
}


// console.log(uniqueChars(`monday`))
// console.log(uniqueChars(`moonday`))

//.3 panagram sentance

function isPanagram (str) {
    let panagra = (`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`)
   let panagram=panagra.split("")
   let answer = []
   let notAnswer = []
    for (let i = 0 ; i<str.length; i++){
        for (let k = 0; k<panagram.length; k++){
            if(str[i] == panagram[k]){
                answer.push()
            }else{
                notAnswer.push(str[i])
            }
        }
    }
    return answer
}

// console.log(isPanagram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPanagram("I like cats, but not mice"))

//4. longest word

function longestWord (word1, word2) {
    let realWord1 = word1.split("")
    let realWord2 = word2.split("")
    for(let i = 0; i < realWord1.length; i++){
        for (let k = 0; k< realWord2.length; k++){
            if (realWord1[i]>realWord2[k]){
                return indexOf(realWord1)
            }else{
                return indexOf(realWord2)
            }
        }
    }
}

console.log(longestWord("hi", "hello"))