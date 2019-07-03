var rpio = require('rpio');

LED_1 = 29

var ledState = 0;
rpio.open(LED_1, rpio.OUTPUT, rpio.LOW);
setInterval(function() {
    ledState = !ledState;
    if(ledState == 0) rpio.write(LED_1, rpio.HIGH);
    else rpio.write(LED_1, rpio.LOW);
}, 1000);