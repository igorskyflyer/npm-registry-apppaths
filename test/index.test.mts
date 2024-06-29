// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, suite, test } from 'vitest'
import { getAppPaths, hasAppPaths } from '../src/index.mjs'

describe('🧪 Registry AppPaths tests 🧪', () => {
	suite('getAppPaths()', () => {
		test('#1 should should be an array', () => {
			assert.isArray(getAppPaths())
		}) // #1

		test('#2 length should be > 0', () => {
			assert.isAbove(getAppPaths().length, 0)
		}) // #2

		test('#3 should be a string', () => {
			assert.isString(getAppPaths()[0])
		}) // #3
	})

	suite('hasAppPaths()', () => {
		test('#4 should be an array', () => {
			assert.isArray(hasAppPaths(['wordpad.exe', 'foo']))
		}) // #4

		test('#5 should be true', () => {
			assert.isTrue(hasAppPaths(['wordpad.exe', 'foo'])[0])
		}) // #5
	})
})
