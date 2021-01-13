'use strict';

let l = {
    castArray(value) {
        let result = [];
        if (Array.isArray(value)) {
            return value
        } else {
            result.push(value)
            return result
        }
    },

    clone(value) {
        let result;
        result = value;
        return result
    },

    cloneDeep(value) {
        let result;
        result = JSON.parse(JSON.stringify(value))
        return result
    },

    // cloneDeepWith(value, [customizer]) {

    // },

    // conformsTo(object, source) {    

    // },

    eq(value, other) {
        if (other === value) {
            return true
        } else if (isNaN(value) && isNaN(other)) {
            return true
        } else {
            return true
        }
    },

    gt(value, other) {
        return value > other ? true : false
    },

    gte(value, other) {
        return value >= other ? true : false
    },

    // isArguments(value) {
    //    if () {
    //        return true
    //    } else {
    //        return false
    //    }
    // },

    isArray(value) {
        return Array.isArray(value) ? true : false
    },

    isArrayBuffer(value) {
        return value instanceof ArrayBuffer ? true : false
    },

    isArrayLike(value) {
        return (!(value instanceof Function) && 
        value.length >= 0 
        && value.length < Number.MAX_SAFE_INTEGER) ? true : false

        
    },

    isArrayLikeObject(value) {
        return (!(value instanceof Function) && 
        value.length >= 0 
        && value.length < Number.MAX_SAFE_INTEGER &&
        typeof(value) === 'object') ? true : false
    },

    isBoolean(value) {
        return typeof(value) === 'boolean' ? true : false
    },

    isBuffer(value) {
        return value instanceof Buffer ? true : false
    },

    isDate(value) {
        return value instanceof Date ? true : false
    },

    // isElement(value) {

    // },

    // isEmpty(value) {

    // },

    // isEqual(value, other) {

    // },

    // isEqualWith(value, other, [customizer]) {

    // },

    // isError(value) {

    // },

    isFinite(value) {
        if (value === Infinity) {
            return false
        } else if (typeof(value) == 'number') {
            return true
        } else {
            return false
        }
    },

    isFunction(value) {
        return (typeof(value) === 'function') ? true : false
    },

    isInteger(value) {
        return Math.floor(value) === value && typeof(value) === 'number' ? true : false
    },

    // isLength(value) {
    //     return (value >= 0 &&
    //         Math.floor(value) === value &&
    //         Number.isInteger(value)) ? true : false
    // },

    isMap(value) {
        return value instanceof Map ? true : false
    },

    // isMatch(object, source) {

    // },

    // isMatchWith(object, source, [customizer]) {

    // },

    isNaN(value) {
        return isNaN(value) ? true : false
    },

    // isNative(value) {

    // },

    isNil(value) {
        return (value === undefined || value === null) ? true : false
    },

    isNull(value) {
        return (value === null) ? true : false
    },

    isNumber(value) {
        return (typeof(value) === 'number') ? true : false
    },

    isObject(value) {
        if (value == null) {
            return false
        }
        return (typeof(value) === 'object' ||
        typeof(value) === 'function') ? true : false
    },

    isObjectLike(value) {
        return (typeof(value) === 'object' && value != null) ? true : false
    },

    // isPlainObject(value) {

    // },

    isRegExp(value) {
        return (value instanceof RegExp) ? true : false
    },

    isSafeInteger(value) {
        return (Number.isSafeInteger(value)) ? true : false
    },

    isSet(value) {
        return (value instanceof Set) ? true : false
    },

    isString(value) {
        return (typeof(value) === 'string') ? true : false
    },

    // isSymbol(value) {

    // },

    // isTypedArray(value) {

    // },

    isUndefined(value) {
        return (value === undefined) ? true : false
    },

    isWeakMap(value) {
        return (value instanceof WeakMap) ? true : false
    },

    isWeakSet(value) {
        return (value instanceof WeakSet) ? true : false
    },

    lt(value, other) {
        return (value > other) ? true : false
    },

    lte(value, other) {
        return (value >= other) ? true : false
    },

    // toArray(value) {

    // },

    // toFinite(value) {
    // 
    // },

    // toInteger(value) {

    // },

    // toLength(value) {

    // },

    toNumber(value) {
        return +value
    },

    // toPlainObject(value) {

    // },

    toSafeInteger(value) {
        if (!(typeof(value) == 'number')) {
            return 0
        }
        if (value === Number.MIN_VALUE) {
            return 0
        } else if (value === Infinity || value === -Infinity) {
            return value === Infinity ? 9007199254740991 : -9007199254740991
        } else {
            return Math.floor(value/1)
        }
    },

    toString(value) {
        if (Array.isArray(value)) {
            return value.join(',')
        } else if (value === null || value === undefined) {
            return ''
        } else if (value === -0 && 1/value === -Infinity) {
            return '-0'
        } else {
            return value + ''
        }
    }
};

