/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let finalStr = '';
    for (const orderChar of order) {
        for (const srChar of s) {
            if(srChar === orderChar){
                finalStr = finalStr+srChar
                s = s.replace(srChar,'')
            }
        }
    }
    console.log(finalStr + s)
};

customSortString("cba","abcd")