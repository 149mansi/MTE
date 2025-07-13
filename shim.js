// shim.js
import './shim'; // Import polyfills

import { registerRootComponent } from 'expo';
import App from './App';

registerRootComponent(App);

// Polyfills for Node.js core modules


// try {
//   // Buffer polyfill
//   if (typeof global.Buffer === 'undefined') {
//     global.Buffer = require('buffer').Buffer;
//   }

//   // Process polyfill
//   if (typeof global.process === 'undefined') {
//     global.process = require('process');
//   }

//   // Additional essential polyfills
//   if (typeof global.crypto === 'undefined') {
//     global.crypto = require('crypto-browserify');
//   }

//   if (typeof global.stream === 'undefined') {
//     global.stream = require('stream-browserify');
//   }

//   // Ensure process.nextTick exists
//   if (typeof process.nextTick !== 'function') {
//     process.nextTick = setImmediate;
//   }

//   // Error handling for missing modules
//   process.on('unhandledRejection', (error) => {
//     console.error('Unhandled Rejection:', error);
//   });

// } catch (error) {
//   console.error('Error loading polyfills:', error);
//   throw new Error('Critical polyfills failed to load');
// }

// // Main application entry point
// import { registerRootComponent } from 'expo';
// import App from './App';

// registerRootComponent(App);




// Add necessary shims for Node.js modules
// if (typeof global.Buffer === 'undefined') {
//   global.Buffer = require('buffer').Buffer;
// }

// if (typeof global.process === 'undefined') {
//   global.process = require('process');
// }

// if (typeof global.crypto === 'undefined') {
//   global.crypto = require('crypto');
// }

// if (typeof global.stream === 'undefined') {
//   global.stream = require('stream-browserify');
// }

// if (typeof global.setImmediate === 'undefined') {
//   global.setImmediate = require('timers').setImmediate;
// }

// console.log('Shims for Node.js modules applied successfully!');
