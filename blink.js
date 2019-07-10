var rpio = require('rpio');

LED = 29

var ledState = 0;

rpio.open(LED, rpio.OUTPUT, rpio.LOW);

setInterval(function() {
    ledState = !ledState;
    if(ledState == 0) rpio.write(LED, rpio.HIGH);
    else rpio.write(LED, rpio.LOW);
}, 1000);