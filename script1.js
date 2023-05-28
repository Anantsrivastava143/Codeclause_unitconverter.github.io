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


                 if(option_from === "Meter" && option_to==="Kilometer"){
                        result.value = Number(input.value) * 0.001;

                }
                else if(option_from === "Meter" && option_to==="Centimeter"){
                        result.value = Number(input.value) * 100;

                 }
                 else if(option_from === "Meter" && option_to==="Millimeter"){
                        result.value = Number(input.value) * 1000;

                 }
                 else if(option_from === "Meter" && option_to==="Inches"){
                        result.value = Number(input.value) * 39.37;

                 }
                 else if(option_from === "Meter" && option_to==="Foot"){
                        result.value = Number(input.value) * 3.28;

                 }
                 else if(option_from === "Meter" && option_to==="Meter"){
                        result.value = input.value

                }

                 if(option_from === "Kilometer" && option_to==="Meter"){
                        result.value = Number(input.value) * 1000;

                }
                else if(option_from === "Kilometer" && option_to==="Centimeter"){
                        result.value = Number(input.value) * 100000;

                }
                else if(option_from === "Kilometer" && option_to==="Millimeter"){
                        result.value = Number(input.value) * 1000000;

                }
                else if(option_from === "Kilometer" && option_to==="Inches"){
                        result.value = Number(input.value) * 39370.1;

                }
                else if(option_from === "Kilometer" && option_to==="Foot"){
                        result.value = Number(input.value) * 3280.84;

                }
                else if(option_from === "Kilometer" && option_to==="Kilometer"){
                        result.value = input.value

                }

                 if(option_from === "Centimeter" && option_to==="Kilometer"){
                        result.value = Number(input.value) * 0.00001;

                }
                else if(option_from === "Centimeter" && option_to==="Meter"){
                        result.value = Number(input.value) * 0.01;

                }
                else if(option_from === "Centimeter" && option_to==="Millimeter"){
                        result.value = Number(input.value) * 10;

                }
                else if(option_from === "Centimeter" && option_to==="Inches"){
                        result.value = Number(input.value) * 0.393701;

                }
                else if(option_from === "Centimeter" && option_to==="Foot"){
                        result.value = Number(input.value) * 0.0328084;

                }
                else if(option_from === "Centimeter" && option_to==="Centimeter"){
                        result.value = input.value

                }
                if(option_from === "Millimeter" && option_to==="Kilometer"){
                        result.value = Number(input.value) * 0.000001;

                }
                else if(option_from === "Millimeter" && option_to==="Meter"){
                        result.value = Number(input.value) * 0.001;

                }
                else if(option_from === "Millimeter" && option_to==="Centimeter"){
                        result.value = Number(input.value) * 0.10;

                }
                else if(option_from === "Millimeter" && option_to==="Inches"){
                        result.value = Number(input.value) * 0.0393701;

                }
                else if(option_from === "Millimeter" && option_to==="Foot"){
                        result.value = Number(input.value) * 0.00328084;

                }
                else if(option_from === "Millimeter" && option_to==="Millimeter"){
                        result.value = input.value

                }
                if(option_from === "Inches" && option_to==="Kilometer"){
                        result.value = Number(input.value) * 0.0000254;

                }
                else if(option_from === "Inches" && option_to==="Meter"){
                        result.value = Number(input.value) * 0.0254;

                }
                else if(option_from === "Inches" && option_to==="Centimeter"){
                        result.value = Number(input.value) * 2.54;

                }
                else if(option_from === "Inches" && option_to==="Millimeter"){
                        result.value = Number(input.value) * 25.4;

                }
                else if(option_from === "Inches" && option_to==="Foot"){
                        result.value = Number(input.value) * 0.0833333;

                }
                else if(option_from === "Inches" && option_to==="Inches"){
                        result.value = input.value

                }
                if(option_from === "Foot" && option_to==="Kilometer"){
                        result.value = Number(input.value) * 0.0003048;

                }
                else if(option_from === "Foot" && option_to==="Meter"){
                        result.value = Number(input.value) * 0.3048;

                }
                else if(option_from === "Foot" && option_to==="Centimeter"){
                        result.value = Number(input.value) * 30.48;

                }
                else if(option_from === "Foot" && option_to==="Millimeter"){
                        result.value = Number(input.value) * 304.8;

                }
                else if(option_from === "Foot" && option_to==="Inches"){
                        result.value = Number(input.value) * 12;

                }
                else if(option_from === "Foot" && option_to==="Foot"){
                        result.value = input.value

                }
                


}