var rpio = require('rpio');

BTN = 32
LED = 29

rpio.open(BTN, rpio.INPUT, rpio.PULL_UP);
rpio.open(LED, rpio.OUTPUT, rpio.LOW);

var btnState = 0;
var ledState = 1;

var btnLock = 0;

setInterval(function() {
    btnState = rpio.read(BTN)
    if(btnState == 0 && btnLock == 0) {
        ledState = !ledState;
        ledState ? rpio.write(LED, rpio.LOW) : rpio.write(LED, rpio.HIGH);       
        btnLock = 1;
    }
    if(btnState == 1 && btnLock == 1) {
        btnLock = 0
    }
    console.log('LED1: ' + (ledState ? '0' : '1'));
}, 50);