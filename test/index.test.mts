// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, suite, test } from 'vitest'
import { get, has } from '../src/index.mjs'

describe('🧪 Registry AppPaths tests 🧪', () => {
	suite('get()', () => {
		test('#1 should should be an array', () => {
			assert.isArray(get())
		}) // #1

		test('#2 length should be > 0', () => {
			assert.isAbove(get().length, 0)
		}) // #2

		test('#3 should be a string', () => {
			assert.isString(get()[0])
		}) // #3
	})

	suite('has()', () => {
		test('#4 should be an array', () => {
			assert.isArray(has(['wordpad.exe', 'foo']))
		}) // #4

		test('#5 should be true', () => {
			assert.isOk(has(['wordpad.exe', 'foo'])[0])
		}) // #5
	})
})
