// Get a reference to the button element in the DOM
var button = document.getElementById("grow");
button.onclick = GrowATree;
// Get a reference to the input elements in the DoM
var heightInput = document.getElementById("treeHeight");
var symbolInput = document.getElementById("treeSymbol");

// Create a function to build the symbol tree
function GrowATree(inputPair) {

	// Retrieve values input by user
	var rows = document.getElementById("treeHeight").value;
	var symbol = document.getElementById("treeSymbol").value;

	// Display an alert if one of the input boxes is left empty
	if (rows ==="" || symbol==="") {
		alert("Both fields must contain a value!");
	}
	
	// Determine the total row width
	var rowWidth = (rows*2)-1

	// Build each row and print to console
	for (i=1; i<rows+1; i++) {
		var eachRow="";
		var numSymbol = 2*(i-1)+1
		var spaces = (rowWidth-numSymbol)/2;
		// console.log(spaces);
		for (j=0; j<spaces; j++) {
			eachRow+=" ";
		}
		for (k=0; k<numSymbol; k++) {
			eachRow+=symbol;
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