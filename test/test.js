const assert = require('chai').assert;
const appPaths = require('../index');

describe('AppPaths test', () => {
 
 describe('getKeys()', () => {
  it('should be an array', () => {
   assert.isArray(appPaths.getKeys(), true);
  });
 });

 describe('isInstalled("chrome")', () => {
  it('should be true', () => {
   assert.isTrue(appPaths.isInstalled('chrome'));
  });
 });

 describe('isInstalled("chrome", true)', () => {
  it('should be false', () => {
   assert.isFalse(appPaths.isInstalled('chrome', true));
  });
 });

});