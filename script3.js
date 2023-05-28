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


                 if(option_from === "Second" && option_to==="Second"){
                    result.value = input.value
                        

                }
                else if(option_from === "Second" && option_to==="Minute"){
                        result.value = Number(input.value)/60;

                 }
                 else if(option_from === "Second" && option_to==="Hour"){
                        result.value = Number(input.value)/3600;

                 }
                 else if(option_from === "Second" && option_to==="Day"){
                        result.value = Number(input.value)/86400;

                 }
                 

                 if(option_from === "Minute" && option_to==="Second"){
                        result.value = Number(input.value) * 60;

                }
                else if(option_from === "Minute" && option_to==="Hour"){
                        result.value = Number(input.value) /60;

                }
                else if(option_from === "Minute" && option_to==="Day"){
                        result.value = Number(input.value) / 1440;

                }
               
                else if(option_from === "Minute" && option_to==="Minute"){
                        result.value = input.value

                }

                 if(option_from === "Hour" && option_to==="Second"){
                        result.value = Number(input.value) * 3600;

                }
                else if(option_from === "Hour" && option_to==="Minute"){
                        result.value = Number(input.value) * 60;

                }
                else if(option_from === "Hour" && option_to==="Day"){
                        result.value = Number(input.value)/24;

                }
                else if(option_from === "Hour" && option_to==="Hour"){
                        result.value = input.value

                }
                if(option_from === "Day" && option_to==="Second"){
                        result.value = Number(input.value) * 86400;

                }
                else if(option_from === "Day" && option_to==="Minute"){
                        result.value = Number(input.value) * 1440;

                }
                else if(option_from === "Day" && option_to==="Hour"){
                        result.value = Number(input.value) * 24;

                }
                
                else if(option_from === "Day" && option_to==="Day"){
                        result.value = input.value

                }
               
}