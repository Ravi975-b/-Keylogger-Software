'use strict';
const Keyboard = require('./index'); 

const keyboard = new Keyboard('event0'); 

console.log("Listening for keyboard events on /dev/input/event0...");

keyboard.on('keydown', event => {
  console.log(`Key Down: ${event.keyId}`);
});

keyboard.on('keyup', event => {
  console.log(`Key Up: ${event.keyId}`);
});

keyboard.on('error', err => {
  console.error('Error:', err.message);
});
