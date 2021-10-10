"use strict";
var $ = function(id) { return document.getElementById(id); };


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();

};

const toFahrenheit = () => {
    $("degree_label_1").innerHTML = "Enter C Degree";
    $("degree_label_2").innerHTML = "Degrees Fahrenheit";
    clearTextBoxes();
	$("degrees_entered").focus();
};

const convertTemp = () => {

    let temp = parseInt($("degrees_entered").value);

    if(Number.isNaN(temp)){ 
        alert("You must enter a valid number for degrees");
    }
    else if($("to_celsius").checked){
        
        $("degrees_computed").value = ((temp-32)*5/9).toFixed(0);
    }
    else {
        $("degrees_computed").value = ((temp*(9/5))+32).toFixed(0);
    }
};

const toCelsius = () => {
    $("degree_label_1").innerHTML = "Enter F Degree";
    $("degree_label_2").innerHTML = "Degrees Celsius";
    clearTextBoxes();
    $("degrees_entered").focus();
};

