const prompt = require('prompt-sync')();

function largestAndSmallest (array ){
	let smallestNumber  100;

	let largestNumber = 0;

	let largestAndSmallestNumber = [];

	for(let count = 0; count < array.length; count++){


	if(array[count] > largestNumber) largestNumber = array[count];
		

	if(array[count] <  smallestNumber) smallestNumber = array[count];
		
	}

	largestAndSmallestNumber.push(largestNumber);
	largestAndSmallestNumber.push(smallestNumber);

	return largestAndSmallestNumber;



}




let arrayOfNumbers = [23, 65, 12, 89, 49, 34, 64, 23, 78, 100, -1];

let result = largestAndSmallest(arrayOfNumbers);
console.log(result);
	


