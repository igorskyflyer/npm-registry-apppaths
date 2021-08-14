import { assert } from 'chai'
import * as appPaths from '../src/index.js'

describe('AppPaths', () => {
  describe('get()', () => {
    it('should be an array', () => {
      assert.isArray(appPaths.get())
    })

    it('length should be > 0', () => {
      assert.isAbove(appPaths.get().length, 0)
    })

    it('should be a string', () => {
      assert.isString(appPaths.get()[0])
    })
  })

  describe('has()', () => {
    it('should be an array', () => {
      assert.isArray(appPaths.has(['wordpad.exe', 'foo']))
    })

    it('should be true', () => {
      assert.isOk(appPaths.has(['wordpad.exe', 'foo'])[0])
    })
  })
})
