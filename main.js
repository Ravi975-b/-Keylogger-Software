'use strict';
const Keyboard = require('./index'); // Imports the Keyboard class

const keyboard = new Keyboard('event0'); // Or try 'event7' if needed

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
