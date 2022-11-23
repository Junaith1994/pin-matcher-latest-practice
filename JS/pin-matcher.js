// PIN Generate function
function generatePin() {
    const pin = Math.round(Math.random() * 10000) + '';
    const display1 = document.getElementById('display-1');
    if(pin.length > 3) {
        display1.value = pin;
    }
}

document.getElementById('number-pad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const display2 = document.getElementById('display-2');
    if(event.target.innerText == 'C') {
        display2.value = '';
    }
    else if(number.length <= 1){ 
        display2.value = display2.value + number; 
    }
})

document.getElementById('submit-btn').addEventListener('click', function() {
    const display1 = document.getElementById('display-1');
    const display2 = document.getElementById('display-2');
    const pinMatch = document.getElementById('pin-matched');
    const pinError = document.getElementById('pin-error');
    if(display1.value == display2.value) {
        pinMatch.style.display = "block";
        pinError.style.display = "none";
    }
    else{
        pinError.style.display = "block";
        pinMatch.style.display = "none";
    }
})