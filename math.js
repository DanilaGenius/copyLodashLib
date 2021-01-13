'use strict';

let m = {
    add(augend, addend) {
        return augend + addend
    },

    ceil(number, precision = 0) {

    },

    divide(dividend, divisor) {
        return dividend / divisor
    },

    // floor(number, precision = 0) {

    // },

    max(array) {
        const sortArray = array.sort( (a,b) => a - b)
        return sortArray[sortArray.length - 1]
    },

    // maxBy(array, iteratee=_.identity) {

    // },

    mean(array) {
        let result = 0;
        for (let item of array) {
            result += item
        }
        return Math.floor(result/array.length)
    },

    // meanBy(array, iteratee=_.identity) {

    // },

    min(array) {
        const sortArray = array.sort( (a,b) => a - b)
        return sortArray[0]
    },

    // minBy(array, iteratee=_.identity) {

    // },

    multiply(multiplier, multiplicand) {
        return multiplier * multiplicand
    },

    // round(number, precision=0) {

    // },

    subtract(minuend, subtrahend) {
        return minuend - subtrahend
    },

    sum(array) {
        let result = 0;
        for (let item of array) {
            result += item
        }
        return result
    },

    // sumBy(array, iteratee=_.identity) {
    //    
    // },


}