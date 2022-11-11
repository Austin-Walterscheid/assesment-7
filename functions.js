//1. sum zero
// runtime O(n)
function addToZero (arr) {
    for (let i=0; i<arr.length; i++) {
        const curNum = arr[i]
        for (let j=0; j<arr.length; j++) {
            let bothNums = arr[j]
          if (curNum + bothNums === 0 && i !==j) {
            return true
          
          }
        }
      }
      return false
}

// console.log(addToZero([1, 3, 4, 7, -3]))
// console.log(addToZero([ 1, 2, 3, 4, 5]))


//2.Unique Characters
//runtime O(n^2)
function uniqueChars (str) {
    let letters = ('')
    for (let i = 0; i< str.length; i++){
           if( letters.includes(str[i])){
            return false
           }else{
            letters += str[i]
           }
        }
        return true
    }


// console.log(uniqueChars(`monday`))
// console.log(uniqueChars(`moonday`))

//.3 panagram sentance
//runtime O(n^2)
function isPanagram (str) {
    let panagram = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`]
    for (let i = 0 ; i<str.length; i++){
        for (let k = 0; k < panagram.length; k++){
            if(str[i] === panagram[k] && i !== panagram[k]){
                return true
            }else{
                
            }
        }
    }
    return false
}

// console.log(isPanagram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPanagram("I like cats, but not mice"))

//4. longest word
// runtime O(n)
function longestWord (arr) {
    let answer = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > answer){
            answer = arr[i].length
        }
    }
    return answer
}

console.log(longestWord(["hi", "hello"]))