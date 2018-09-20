// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName
};
const createNotEnumerableProperty = (propertyName) => {
    return Symbol(propertyName);
};
const createProtoMagicObject = () => {
    const obj = ()=>{
    };
    obj.__proto__ = obj.prototype;
    obj.prototype = obj.__proto__;
    return obj
};
let value = 0;
const incrementor = () => {
	value += 1;
	function func(){
		value += 1;
		return func;
	};
	func.toString = function(){
		return value;
	};
	return func;
};
let count = 1;
const asyncIncrementor = () => {
    return count++;
};
const createIncrementer = ()=>{
    return createIncrementerr
}
let currect = 1;
const createIncrementerr = {
    currect : 0,
    next : ()=>{
        return {
            value: currect++
        }
    },
    [Symbol.iterator]() {
    return {
    // делаем итератор итерируемым
    [Symbol.iterator]() { return this; },
    next() {
    return { value: currect++, done: false };
    },
    return(v) {
    return { done: true };
    }
    };
    }
   };
// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((res, rej) =>{
        setTimeout(()=>{
            res(param)  
        }, 1000);
    });
};
const getDeepPropertiesCount = (obj) => {
    return getProp(obj, 0)
};
function getProp(obj, count) {
    if( typeof obj === 'object') {
        for (let key in obj) {
            count += getProp(obj[key], 1);
        }
    } else if(typeof obj === 'array') {
     for(let i = 0, n = obj.length; i < n; i++) {
        count += getProp(obj[i], 1);
     }
    } 
    return count
}
const createSerializedObject = () => {
    return null
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    arr.sort((a, b) => a.__proto__ > b.__proto__);
    return arr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;