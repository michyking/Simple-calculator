const output = document.querySelector(".output");
const input = document.querySelector(".input");
const keys = document.querySelectorAll(".key");

//eventlistener
keys.forEach(key=>{
    key.addEventListener("click", theCal);
});


function theCal () {
    let buttonText = this.innerText;

    if(buttonText === "AC"){
        input.innerText= "";
        output.innerText = "0"
    }else if (buttonText === "DEL"){
        input.innerText = input.innerText.slice(0, -1);
    }else if(buttonText != "" && buttonText === "="){
        try{
            let result = eval(PerpareInput(input.innerText));
            output.innerText = checkOutput(result);
        } catch {
            output.innerText = "Error"
        }
    }else{
        input.textContent += buttonText;
        return;
    }    
    
}


function PerpareInput (inp) {

	let input_array = inp.split("");

	for (let i = 0; i < input_array.length; i++) {
        
		if (input_array[i] == "%") {
			input_array[i] = "/100";
		}else if(input_array[i] == "÷"){
            input_array[i] = "/";
        }else if(input_array[i] == "×"){
            input_array[i] = "*";
        }else if(input_array[i] == "²"){
            input_array[i] = "**2";
        }
	}

	return input_array.join("");
}

function checkOutput (output) {
	let output_string = output.toString();
	let decimal = output_string.split(".")[1];
	output_string = output_string.split(".")[0];

	let output_array = output_string.split("");
	
	if (output_array.length > 3) {
		for (let i = output_array.length - 3; i > 0; i -= 3) {
			output_array.splice(i, 0, ",");
		}
	}

	if (decimal) {
		output_array.push(".");
		output_array.push(decimal);
	}

	return output_array.join("");
}