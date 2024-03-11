/**
 * @param {string} tiles
 * @return {number}
 */

let strLen;
let arr = [];
const numTilePossibilities = function(tiles) {
    strLen = tiles.length
    let usableTiles = tiles
    for (const char of usableTiles) {
        let count = 0
        for (const checkChar of usableTiles) {
                if(char === checkChar){
                    count++
                    usableTiles = usableTiles.replace(checkChar, '')
                }
        }
        if(count>1){
            arr.push(count)
        }
    }
};

const fact = function(num){
    if(num === 1){
        return 1;
    }else{
        return num * fact(num-1)
    }
}


let input = "AAB"
numTilePossibilities(input)
console.log(arr)

let factorialOfStringLength = fact(strLen) 
let factorialOfDenominator = 1;

arr.forEach(element => {
    factorialOfDenominator = factorialOfDenominator * fact(element)
});

let finalPermutation = factorialOfStringLength / factorialOfDenominator

console.log(finalPermutation);
// console.log(factorialOfStringLength)
// console.log(factorialOfDenominator)

