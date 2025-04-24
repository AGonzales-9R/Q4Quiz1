function calcBMI(){
	var weight = document.getElementById('inputKG').value;
	var height = document.getElementById('inputM').value;
	var height2 = height ** 2;
	var bmi = weight/height2;
	var roundBMI = Math.round(bmi);

	if (bmi<18.5){
		
		window.alert("Oh no! Your BMI is " + roundBMI + ". Your current BMI is lower than the recommended BMI for your weight and height. We recommended seeking help from your doctor to know how to boost your BMI.");
	
	} else if (bmi>= 18.5 && bmi<= 24.9){

		window.alert("Your BMI is " + roundBMI + ". Your current BMI is the recommended BMI for your weight and height. Good Job!.");
	
	} else if (bmi>=25 && bmi<= 29.9){

		window.alert("Your BMI is " + roundBMI + ". Your current BMI has exceeded the recommended BMI for your weight and height. We recommended seeking help from your doctor to know how to decrease your BMI.");

	} else if (bmi>=30){

		window.alert("Your BMI is " + roundBMI + ". Your current BMI has extremely exceeded the recommended BMI for your weight and height. We recommended seeking help from your doctor to know how to decrease your BMI.");
	
	}

}

window.alert("LOADING");