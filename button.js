var rpio = require('rpio');

BTN_1 = 32

rpio.open(BTN_1, rpio.INPUT, rpio.PULL_UP);

setInterval(function() {
    console.log('Button State: ' + (rpio.read(BTN_1) ? 'OFF' : 'ON'));
}, 10);