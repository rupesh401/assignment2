var $ = function(id) {
    return document.getElementById(id);
};

const processEntry = () => {
   
    const cents = parseInt($("cents").value);

    if(cents<0 || cents>99){
        alert("Cents should be between 0 to 100 \n");
        clear();
        $("cents").focus();
    }
    else if(Number.isNaN(cents)){
        alert("Cents should be between 0 to 100 \n");
        clear();
        $("cents").focus();
    }
    else {
        makeChange(cents);
    } 
   };

   function makeChange(calculate){

    const dime_remainder = (calculate%25)%10;
    const nickel_remainder = dime_remainder%5;

    $("quarters").value =parseInt((calculate-calculate%25)/25);
    $("dimes").value =parseInt((calculate%25)/10);
    $("nickels").value =parseInt(dime_remainder/5);
    $("pennies").value =parseInt(nickel_remainder);

   }

   function clear() {
    $("cents").value = "";
    $("quarters").value = "";
    $("dimes").value = "";
    $("nickels").value = "";
    $("pennies").value = "";
    $("cents").focus();
    }

   document.addEventListener("DOMContentLoaded", () => {

    $("calculate").addEventListener(
    "click", processEntry);

    });

