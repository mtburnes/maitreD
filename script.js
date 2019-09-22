function calculate(){
    
    let _tiprate = parseFloat(document.getElementById("rate").value);
    let _pretotal = parseFloat(document.getElementById("pretotal").value);
    let _tipactual = _pretotal * (_tiprate / 100).toFixed(2);
    


    document.getElementById("tip").value = _tipactual;
    document.getElementById("tax").value = (_pretotal * .055).toFixed(2);
    let _grandtotal = _pretotal + _tipactual + document.getElementById("tax").value;
    
    //I'm so sorry you have to read this. I hate javascript with a passion.
    document.getElementById("grandTotal").value = (parseFloat(document.getElementById("tip").value) + parseFloat(document.getElementById("pretotal").value) + parseFloat(document.getElementById("tax").value)).toFixed(2);
}