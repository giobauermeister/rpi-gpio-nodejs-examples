var rpio = require('rpio');

BTN_1 = 32
BTN_2 = 33

LED_1 = 29
LED_2 = 31

rpio.open(BTN_1, rpio.INPUT, rpio.PULL_UP);
rpio.open(BTN_2, rpio.INPUT, rpio.PULL_UP);

rpio.open(LED_1, rpio.OUTPUT, rpio.LOW);
rpio.open(LED_2, rpio.OUTPUT, rpio.LOW);

var btn1State = 0;
var btn2State = 0;

var led1State = 1;
var led2State = 1;

var btn1Lock = 0;
var btn2Lock = 0;

setInterval(function() {

    btn1State = rpio.read(BTN_1)
    if(btn1State == 0 && btn1Lock == 0) {
        led1State = !led1State;
        led1State ? rpio.write(LED_1, rpio.LOW) : rpio.write(LED_1, rpio.HIGH);       
        btn1Lock = 1;
    }
    if(btn1State == 1 && btn1Lock == 1) {
        btn1Lock = 0
    }

    btn2State = rpio.read(BTN_2)
    if(btn2State == 0 && btn2Lock == 0) {
        led2State = !led2State;
        led2State ? rpio.write(LED_2, rpio.LOW) : rpio.write(LED_2, rpio.HIGH);       
        btn2Lock = 1;
    }
    if(btn2State == 1 && btn2Lock == 1) {
        btn2Lock = 0
    }

    console.log('LED1: ' + (led1State ? '0' : '1') + ' | LED2: ' + (led2State ? '0' : '1'));
}, 50);