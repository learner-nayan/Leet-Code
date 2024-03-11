/* 
    Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squaredNums = []
    nums.forEach((element)=>{
        squaredNums.push(element ** 2)
    })
    squaredNums.sort(function(a, b){return a - b})
    return squaredNums
};

nums = [-4,-1,0,3,10]
console.log(sortedSquares(nums))

