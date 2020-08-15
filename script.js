var firstVar="";
var secondVar="";
var operand= "";
var inString="";
var memory ="";

// function fDigit(id){
// 	var numID='#'+ $(this).attr('id');
// 	firstVar=firstVar.concat(document.getElementById('numID').value);
// 	console.log(firstVar);
// }
// document.getElementById('one').addEventListener("click", fDigit);

function makeString(value){
	inString=inString.concat(value);
	// return (inString);
	document.getElementById("screen").value=inString;
}
function evalu(){
	var a=eval(inString);
	// console.log(typeof a);
	inString=String(a);
	document.getElementById("screen").value=a;
	return inString;
}
function clearScreen(){
	inString="";
	document.getElementById("screen").value=0;
	return inString;
}
function MS(){
	//add if
	var lastChar=inString.charAt(inString.length-1);
	
	if(lastChar=="+" || lastChar=="-" || lastChar=="*" || lastChar=="/" ){
		for (var i=0;i<inString.length-1;i++) {
			memory=memory.concat(inString.charAt(i));
		}

	}
	else{
		console.log("else"+memory);
		memory=inString;
	}

}
function MR(){
		
	makeString(memory);
	
}

function MC() {
	memory="";
}