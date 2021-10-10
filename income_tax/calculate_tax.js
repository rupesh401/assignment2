"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function () {
    $("calculate").onclick = processEntry;
};

const processEntry = () => {
   
    const incomee = $("income").value;
    const income = parseInt(incomee);

    if(income < 0 || Number.isNaN(income)){
        alert("Income should be a number greater than 0");
    }
    else{
        let taxnew = calculateTax(income);
        $("tax").value = taxnew.toFixed(2);
    }
   };

   function calculateTax(income){

    let tax;
    let taxable;

    if(income>415050){
        taxable = income-415050;
        tax = 120529.75+(0.396*taxable);
    } else{
        if(income>413350){
            taxable = 415050-413350;
            tax = 119934.75+(0.35*taxable);
        } else {
            if(income>190150){
                taxable = 413350-190150;
                tax = 46278.75+(0.33*taxable);
            } else {
                if(income>91150){
                    taxable = 190150-91150;
                    tax = 18558.75+(0.28*taxable);
                } else {
                    if(income >37650){
                        taxable = 91150-37650;
                        tax = 5183.75+(0.25*taxable);
                    } else {
                        if(income>9275){
                            taxable = 37650-9275;
                            tax = 927.50+(0.15*taxable);
                        } else {
                            tax = 0+(0.1*income);
                        }
                    }
                }
            }
        }
    }
return tax;

   }