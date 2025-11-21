// Arrow functions

let result = (num1) => num1.filter((num)=> num % 2 == 0);


console.log(result([56, 43, 78, 89, 21, 45]));


// functions as expression

let response = function(name){
	return "Welcome "+name+" to semicolon";
	}


console.log(response("Benny"))

// Function as an Argument

let firstFunction = function(name){

	return name;
}


let secondFunction = function(fnAsArg){
	let firstReturn = fnAsArg;
	return {
		firstReturn, 
		secondReturn: "second function is working"
	}

}; 





let myResult = secondFunction(firstFunction("Adamson"));

console.log(myResult);
let newResult = secondFunction(result([12, 56, 34, 33, 21, 78, 54, 45]));
console.log(newResult);