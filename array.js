'use strict';

const a = {
	chunk(array,size) {
		let newArray = [];

		for (let i = 0; i < array.length; i += size) {
			newArray.push(
				array.slice(i, i + size))
		};

		return newArray;
	},

	compact(array) {
		let newArray = [];

		for (let key of array) {
			if (key != false ) {
				newArray.push(key)
			}
		}
		return newArray
	},

	concat(array, ...values) {
		return [...array, ...values].join().split(',')
	},

	difference(array, values) {
		return array.filter( (elem) => {
			if (values.includes(elem)) {
				return false
			} else {
				return true
			}
		} )
	},

	// differenceBy(array, values, predicate = l.identity) {
	// 	//
	// },

	// differenceWith(array, values, predicate = l.identity) {
	// 	//
	// },

	drop(array, n = 1) {
		let length = array.length,
		 	result = array;

		return result.slice(n, length)
	},

	dropRight(array, n=1) {
		let length = array.length,
		 	result = array;

		return result.slice(0, length - n)
	},

	// dropRightWhile(array, predicate = l.identity) {
	// 	//
	// },

	// dropWhile(array, predicate = l.identity) {
	// 	//
	// },

	fill(array, value, start = 0, end = array.length) {
		let result = array,
			index = start;

		for (; index <= end - 1; index++) {
			result[index] = value
		};

		return result
	},

	// findIndex(array, predicate = l.identity, fromIndex=0) {
	// 	//
	// },

	// findLastIndex(array, predicate = _.identity, fromIndex=array.length-1) {
	// 	//
	// },

	head(array) {
		return array[0]
	},

	flatten(array) {
		let result = [];

		for (let item of array) {
			if (Array.isArray(item)) {

				for (let i of item) {
					result.push(i)
				}

			} else {
				result.push(item)
			}
		}
		return result
	},

	flattenDeep(array) {
		let result = l.flatten(array)
		
		function check(arr) {
			for (let i of arr) {
				if (Array.isArray(i)) {
					return true
				}
			}
		}

		while (check(result)) {
			result = l.flatten(result)
		} 

		return result
	},

	flattenDepth(array, depth = 1) {
		let result = [],
			index = 1;

			if (depth == 1) {
				result = l.flatten(array)
			} else if (depth > 1) {
				result = l.flatten(array);

				for (; index <= depth - 1; index++) {
					result = l.flatten(result)
				} 
		
				result
			} else if (depth <= 0) {
				result = array
			}


			return result

	},

	fromPairs(pairs) {
		let result = {};

		pairs.forEach((e) => {
			let key = e[0],
				value = e[1];
			result[key] = value
		})

		return result
	},

	indexOf(array, value, fromIndex = 0) {
		let result,
			length = array.length,
			index = -1;

		for (;fromIndex <= length - 1; fromIndex++) {	
				if (fromIndex >= 0 || fromIndex == -0) {
					index = fromIndex
					result = array[index];

					if (result == value) {
						return index
					} else if (index == length - 1) {
						return -1
					}
			};

				if (fromIndex < 0) {
					index = length + fromIndex 
					result = array[index];
			
					if (result == value) {
						return index
					} else if (index == length - 1) {
						return index - length 
					}
			}									
		};
	},
	
	initial(array) {
		let result = [],
			length = array.length,
			index = 0;

			for (; index < length - 1; index++) {
				result.push(array[index])
			}
			return result
	},

	intersection(...arrays) {  // [2, 1], [2, 3]
		let result = [];

		function includesArr(a,b) {    
			let result = [];
			a.forEach((elem,index,arr) => {
				if (b.includes(elem) && arr.includes(elem) && !result.includes(elem)) {
					result.push(elem)
				}
			})
			return result
		}

		result.push(...includesArr(arrays[0],arrays[1]))
		return result			

		return result
	},

	// intersectionBy(arrays, iteratee = l.identity) {
	// 	//
	// },

	// intersectionWith(arrays, comparator) {
	// 	//
	// },

	join(array, separator = ',') {
		let result = '',
			lenght  = array.length // 3
			
		array.forEach((elem,index,arr) => {
			if (index < lenght - 1) {
				console.log(lenght,index)
				result += elem + separator
			} else {
				result += elem
			}
		})
		return result
	},

	last(array) {
		let result = '',
			lenght = array.length;

			return array[lenght - 1]
	},

	lastIndexOf(array, value, fromIndex = array.length-1) {
		let result = -1,
			index = fromIndex
			
		
			for (; index >= 0; index--) {
				if (value == array[index]) {
					result = index 
					return result
				}
			}

		return result
	},

	nth(array, n = 0) {
		let result;

		if (n < 0) {
			result = array[array.length + n];
		} else {
			result = array[n];
		}

		return result
	},

	pull(array, ...values) {
		for (let value of values) {
			array.map((elem, index, arr) => {
				if (elem === value) {
					array.splice(index, 1)
					
				} 
			})
		}
		
	},

	pullAll(array, values) {
		for (let value of values) {
			array.map((elem,index,array) => {
				if (elem == value) {
					array.splice(index,1)
				}
			})
		}

		return array
	},

	// pullAllBy(array, values, iteratee = l.identity) {
	// 	//
	// },

	// pullAllWith(array, values, comparator) {
	// 	//
	// },

	pullAt(array, indexes) {
		let result = [],
			lenght = array.length,
			indexArr = lenght - 1,
			indexesArr;

		if (Array.isArray(indexes)) {
			indexesArr = indexes
		} else {
			indexesArr = []
			indexesArr.push(indexes)
		}

			
			for (let i = indexArr; i >= 0; i--) {
				for (let index of indexesArr) {
					if (index === i) {
						result.push(array[index])
						array.splice(i,1)
					}
				}
			}
			result.reverse()
			return result
			
	},

	// remove(array, iteratee = l.identity) {
	// 	//
	// },

	reverse(array) {
		let lenght = array.length,
			index = array.length-1,
			result = [];

			for (let i = index; i >= 0; i--) {
				result.push(array[i])
			}
	
			array.splice(0, lenght)
			
			for (let i of result) {
				array.push(i)
			}
			
		return array
	},

	slice(array, start = 0, end = array.length) {
		let result = [];

		for (let i = start; i < end; i++) {
			result.push(array[i])
		}

		return result
	},
								//    0    2     4
	sortedIndex(array, value) { // ([4, 5, 5, 5, 6], 5) ==> 1
		let result = -1;
		let left = 0;
		let right = array.length - 1;
		let mid;
		let index = -1;

		if (array[array.length - 1] === value) {
			return array.length - 1
		}
		while ( index <= Math.floor(Math.log2(array.length))) {
			mid = Math.floor( (right + left)/2 )

			if (array[mid] == value) {
				result = mid
			}

			if (array[mid] < value) {
				left = mid
			}

			if (array[mid] >= value) {
				right = mid
			}
			index++
		}
		return result 
		
	},

	// sortedIndexBy(array, value, iteratee = l.identity) {
	// 	//
	// },
								//    0     2      4
	sortedIndexOf(array, value) { // [4, 5, 5, 5, 6], 5, ==> 1
		let result = -1;
		let left = 0;
		let right = array.length - 1;
		let mid;
		let index = -1;

		if (array[array.length - 1] === value) {
			return array.length - 1
		}
		while ( index <= Math.floor(Math.log2(array.length))) {
			mid = Math.floor( (right + left)/2 )

			if (array[mid] == value) {
				result = mid
			}

			if (array[mid] < value) {
				left = mid
			}

			if (array[mid] >= value) {
				right = mid
			}
			index++
		}
		return result + 1
	},

	sortedLastIndex(array, value) {
		let result = -1;
		let left = 0;
		let right = array.length - 1;
		let mid;
		let index = -1;

		if (array[array.length - 1] === value) {
			return array.length - 1
		}
		while ( index <= Math.floor(Math.log2(array.length))) {
			mid = Math.floor( (right + left)/2 )

			if (array[mid] == value) {
				result = mid
			}

			if (array[mid] <= value) {
				left = mid
			}

			if (array[mid] > value) {
				right = mid
			}
			index++
		}
		return result + 1
	},

	// sortedLastIndexBy(array, value, iteratee = l.identity) {
	// 	//
	// },

	sortedLastIndexOf(array, value) {
		let result = -1;
		let left = 0;
		let right = array.length - 1;
		let mid;
		let index = -1;

		if (array[array.length - 1] === value) {
			return array.length - 1
		}
		while ( index <= Math.floor(Math.log2(array.length))) {
			mid = Math.floor( (right + left)/2 )

			if (array[mid] == value) {
				result = mid
			}

			if (array[mid] <= value) {
				left = mid
			}

			if (array[mid] > value) {
				right = mid
			}
			index++
		}
		return result
	},

	sortedUniq(array) {
		let result = [];

		array.forEach(elem => {
			if (!result.includes(elem)) {
				result.push(elem)
			}
		})
		return result
	},

	// sortedUniqBy(array, iteratee) {

	// },

	tail(array) {
		let result = [];

		array.forEach((elem, index) => {
			if (index > 0) {
				result.push(elem)
			}
		});

		return result
	},

	take(array, n = 1) {
		let result = [];

		array.forEach((elem, index) => {
			if (index < n) {
				result.push(elem)
			}
		});

		return result
	},

	takeRight(array, n = 1) {
		let result = []; 		// arr ( [1, 2, 3], 2 )  >>>  => [2, 3]
		let index = array.length - 1 ;		// 2
		let end = index - n; // 1
		for (let i = index; i > end; i--) {
			result.unshift(array[i])
			if (array.length <= result.length) {
				break ;
			}
		}

		return result
	},

	// takeRightWhile(array, iteratee = l.identity) {
	// 	//
	// },

	// takeWhile(array, iteratee = l.identity) {
	// 	//
	// },

	union(...arrays) {
		let result = [];
		let array = [];

		for (let arr of arrays) {
			for (let elem of arr) {
				array.push(elem)
			}
		}
		
		array.forEach( elem => {
			if (!result.includes(elem)) {
				result.push(elem)
			}
		})

		return result
	},

	// unionBy(arrays, iteratee = l.identity) {
	// 	//
	// },

	// unionWith(arrays, comparator) {

	// },

	uniq(array) {
		let result = [];

		array.forEach( elem => {
			if (!result.includes(elem)) {
				result.push(elem)
			}
		})

		return result
	},

	// uniqBy(array, iteratee = l.identity) {
	// 	//
	// },

	// uniqWith(array, comparator) {

	// },

	unzip(array) {

	},

	// unzipWith(array, iteratee = l.identity ) {
	// 	//
	// },

	without(array, ...values) {
		let result = [];

				for (let a of array) {
					if (array.includes(a) && !values.includes(a)) {
						result.push(a)
					}
					
				}
				
		return result
	},

	xor(...arrays) { // ([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]) => [1, 2, 6, 7]   
		let result = [];
		
		function filterArr(A,B) {
			let result = [];
			for (let elem of A) {
				if (!B.includes(elem)) {
					result.push(elem)
				}
			}
			return result
		}

		if (arrays.length <= 2) {
			result.push(...filterArr(arrays[0],arrays[1]), ...filterArr(arrays[1],arrays[0]))
		} 
		
		return result
	},

	// xorBy(arrays, iteratee = l.identity) {
	// 	//
	// },

	// xorWith(arrays, comparator) {

	// },

	zip(...arrays) {
		let result = [];
		let length = 0;

		for (let elem of arrays) {
			if (length <= elem.length) {
				length = elem.length
			}
		}
		
		for (let i = 0; i < length; i++) {
			let arr = [];

			for (let item of arrays) {
				arr.push(item[i])
			}
			result.push(arr)
		}

		return result
	},

	// zipObject(props=[], values=[]) {

	// },

	// zipObjectDeep(props=[], values=[]) {

	// },

	// zipWith(arrays, iteratee = l.identity) {
	// 	//
	// },

};

