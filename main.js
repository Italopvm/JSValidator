var validateNum = function(number){
	if( alert(number.charAt(3) == "-" && number.charAt(7) == "-" && number.length == 12)){
		return true;
	}
	else{
		return false;
	}
}

var userInput = prompt('Enter your phone number in this format: XXX-XXX-XXXX');
validateNum(userInput);


var validateBDay = function(date){
	if( alert(date.charAt(2)=='/' && date.charAt(5) == '/' && date.length == 10) ){
		return true;
	}
	else{
		return false;
	}
}

var userInput2 = prompt('Enter your birth date in this format: XX/XX/XXXX');
validateBDay(userInput2);


var postalCode = function(postal){
	if ( alert(postal.length == 5) ){
		return true;
	}
	else{
        return false;
    }
}
var userInput3 = prompt('enter your postal code in this format: XXXXX');
postalCode(userInput3);



// 

var followFormat = function(format){
	if (format.length == 5){
		return alert(true);
	}
	else if(format.charAt(5) == "-" && format.length == 10){
		return alert(true);
	}
	else{
		return alert(false);
	}
}
var userInput4 = prompt('Must follow this format xxxxx OR xxxxx-xxxx');
followFormat(userInput4);




var stateAbb = function(abb){
	 if (alert(abb.length == 2 && abb == abb.toUpperCase())){
    	return true;
	}
	else {
		return false;
	}

}
var userInput5 = prompt('please entre your state abbeviation using caps')
stateAbb(userInput5);





















