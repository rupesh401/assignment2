var $ = function (id) {
    return document.getElementById(id); 
}

const processEntries = () => {
   
    const subtotal = $("subtotal").value;
    const tax_rate = $("tax_rate").value;

    let errormsg = "";

    if(subtotal<0 || subtotal>1000){
        errormsg += "The subtotal entry should be a valid, positive number that’s less than 10,000 \n";
    }
    if(tax_rate<0 || tax_rate>12){
        errormsg += "The tax rate should be a valid, positive number that’s less than 12 \n";
    }
    if(errormsg != ""){
        alert(errormsg);
    } 
    else {
        let new_sales_tax = ((tax_rate/100)*subtotal).toFixed(2);
        $("sales_tax").value = new_sales_tax;
        $("total").value = new_sales_tax + subtotal;
        $("subtotal").focus();
    } 
   };

   document.addEventListener("DOMContentLoaded", () => {
    $("subtotal").focus();

    $("calculate").addEventListener(
    "click", processEntries);

    $("clear").addEventListener("click", () => {
        $("subtotal").value = "";
        $("tax_rate").value = "";
        $("sales_tax").value = "";
        $("total").value = "";
        $("subtotal").focus();
        });

      });
   


