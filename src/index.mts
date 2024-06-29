// Author: Igor Dimitrijević (@igorskyflyer)

// @ts-ignore
import { RegKeys } from '@igor.dvlpr/regkeys'

const appPathsKey: string =
	'HKLM/SOFTWARE/Microsoft/Windows/CurrentVersion/App Paths'
const registry: RegKeys = new RegKeys(appPathsKey)

/**
 * Synchronously gets all keys from AppPaths.
 *
 * NOTE: Results are **cached** internally!
 * @param {boolean} [forceRefresh=false]
 * @throws Throws an error if the host machine is not running Windows OS.
 */
export function getAppPaths(forceRefresh: boolean = false): string[] {
	return registry.get(forceRefresh)
}

/**
 * Synchronously checks whether the given keys are present in the AppPaths.
 * @param keys
 * @param {boolean} [caseSensitive=false]
 */
export function hasAppPaths(
	keys: string[],
	caseSensitive: boolean = false
): boolean[] {
	return registry.hasKeys(keys, caseSensitive)
}

/**
 * Clears the cached result, if any.
 */
export function refreshAppPaths(): void {
	registry.clear()
}
