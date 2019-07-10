var rpio = require('rpio');

BTN = 32

rpio.open(BTN, rpio.INPUT, rpio.PULL_UP);

setInterval(function() {
    console.log('Button State: ' + (rpio.read(BTN) ? 'OFF' : 'ON'));
}, 10);