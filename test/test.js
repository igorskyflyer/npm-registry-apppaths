const assert = require('chai').assert;
const appPaths = require('../index');

describe('AppPaths test', () => {

 describe('getApps()', () => {
  it('should be an array', () => {
   appPaths.getApps().then((apps) => {
    assert.isArray(apps);
   });
  });
 });
});