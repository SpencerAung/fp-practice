'use strict';
const {printLength} = require ('./count-characters');

const items = ['hello', 'good day', null, false];

items.forEach (item => console.log (printLength (item)));
