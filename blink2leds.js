var rpio = require('rpio');

LED_1 = 29
LED_2 = 31

var ledState = 0;

rpio.open(LED_1, rpio.OUTPUT, rpio.LOW);
rpio.open(LED_2, rpio.OUTPUT, rpio.LOW);

setInterval(function() {
    ledState = !ledState;
    if(ledState == 0) {
        rpio.write(LED_1, rpio.HIGH);
        rpio.write(LED_2, rpio.LOW);
    } else {
        rpio.write(LED_1, rpio.LOW);
        rpio.write(LED_2, rpio.HIGH);
    }
}, 500);