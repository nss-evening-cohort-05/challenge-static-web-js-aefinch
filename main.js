	// Get a reference to the button element in the DOM
	var button = document.getElementById("grow");
	button.onclick = buildTreeObj;
	// Get a reference to the input elements in the DoM
	var heightInput = document.getElementById("treeHeight");
	var symbolInput = document.getElementById("treeSymbol");
	
	function buildTreeObj() {	
		var inputObj = {};


		// Store values input by user in object
		inputObj.rows = heightInput.value;
		inputObj.symbol = symbolInput.value;

		// Display an alert if one of the input boxes is left empty
		if (inputObj.rows ==="" || inputObj.symbol==="") {
			alert("Both fields must contain a value!");
		}
		else {
			GrowATree(inputObj);
		}
	}
	
// Create a function to build the symbol tree
function GrowATree(inputPair) {
	// Determine the total row width
	var rowWidth = (inputPair.rows*2)-1

	// Build each row and print to console
	for (i=1; i<inputPair.rows+1; i++) {
		var eachRow="";
		var numSymbol = 2*(i-1)+1
		var spaces = (rowWidth-numSymbol)/2;
		// console.log(spaces);
		for (j=0; j<spaces; j++) {
			eachRow+=" ";
		}
		for (k=0; k<numSymbol; k++) {
			eachRow+=inputPair.symbol;
		}
		console.log(eachRow);
		if (spaces <1) {
			break;
		}
	}
}

// If Enter key is pressed while in an input box, treat it as a button click and build tree
function whichKey() {
	if(event.keyCode===13) {
		document.getElementById("grow").click();
	}
}

// Add event listener to input fields
heightInput.addEventListener("keyup", whichKey);
symbolInput.addEventListener("keyup", whichKey);