const assert = require('chai').assert;
const appPaths = require('../index');

describe('AppPaths test', () => {

 describe('getApps()', () => {

  it('should be an array', () => {
   assert.isArray(appPaths.getApps());
  });

  it('length should be >0', () => {
   assert.isAbove(appPaths.getApps().length, 0);
  });

  it('should be a string, ending with ".exe"', () => {
   assert.isString(appPaths.getApps()[0]);
  });

 });
});