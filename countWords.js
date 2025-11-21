let mySentence = "Welcome to Semicolon. Meet Eniife the most troublesome girl and also meet Nelson the yahoo boy. "


let countWords = 0;
let count = 0;
let longestWord = "";
let word = "";

for (let index = 0; index < mySentence.length; index++){

	if(mySentence.charAt(index) === " "){
		if(longestWord.length > word.length){
			
			word = longestWord; 
			
			
		}
		longestWord = "";
		
			 
	continue;
	}

	longestWord +=mySentence.charAt(index);
		

	

	
	}

	console.log(word);