'use strict';

const l = {
	chunk: (array,size) => {
		let newArray = [];

		for (let i = 0; i < array.length; i += size) {
			newArray.push(
				array.slice(i, i + size))
		};

		return newArray;
	},

	compact: (array) => {
		let newArray = [];

		for (let key of array) {
			if (key != false ) {
				newArray.push(key)
			}
		}
		return newArray
	},

	concat: (array, ...values) => {
		return [...array, ...values].join().split(',')
	},

	difference: (array, values) => {
		return array.filter( (elem) => {
			if (values.includes(elem)) {
				return false
			} else {
				return true
			}
		} )
	},

	differenceBy: (array, values, iteratee) => {
		//
	},

	differenceWith: (array, values, iteratee) => {
		//
	},

	drop: (array, n = 1) => {
		let length = array.length,
		 	result = array;

		return result.slice(n, length)
	},

	dropRight: (array, n=1) => {
		let length = array.length,
		 	result = array;

		return result.slice(0, length - n)
	},

	dropRightWhile: (array, [value, index, arr] ) => {
		let result = array;

		fun(value, index, arr) {
			
		}
		

		return fun

	}



};

let users = [
	{ 'user': 'barney',  'active': true },
	{ 'user': 'fred',    'active': false },
	{ 'user': 'pebbles', 'active': false }
  ];


