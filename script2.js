var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);
option_from = inputType.value;
option_to   = resultType.value;

function myResult(){

        option_from = inputType.value;
        option_to = resultType.value;


                 if(option_from === "Degree Celsius" && option_to==="Fahrenheit"){
                        result.value = (Number(input.value) * 9/5)+32;

                }
                else if(option_from === "Degree Celsius" && option_to==="Kelvin"){
                        result.value = Number(input.value) + 273.15;

                 }
                 
                 else if(option_from === "Degree Celsius" && option_to==="Degree Celsius"){
                        result.value = input.value

                }

                 if(option_from === "Fahrenheit" && option_to==="Degree Celsius"){
                        result.value = (Number(input.value)-32)*5/9;

                }
                else if(option_from === "Fahrenheit" && option_to==="Kelvin"){
                        result.value = (Number(input.value)-32)*5/9+273.15;

                }
               
                else if(option_from === "Fahrenheit" && option_to==="Fahrenheit"){
                        result.value = input.value

                }

                 if(option_from === "Kelvin" && option_to==="Degree Celsius"){
                        result.value = Number(input.value) -273.15;

                }
                else if(option_from === "Kelvin" && option_to==="Fahrenheit"){
                        result.value = (Number(input.value)-273.15)*9/5+32;

                }
                else if(option_from === "Kelvin" && option_to==="Kelvin"){
                    result.value = input.value

                }
               
                


}