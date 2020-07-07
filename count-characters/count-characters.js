'use strict';

const S = require ('sanctuary');

const eitherString = x =>
  x && typeof x === 'string' ? S.Right (x) : S.Left ('Please use a string');

const getStrLength = S.pipe ([eitherString, S.map (S.prop ('length'))]);

const printLength = x =>
  S.pipe ([
    getStrLength,
    S.either (S.I) (length => `${x} has ${length} characters`),
  ]) (x);

module.exports = {
  getStrLength,
  printLength,
};
