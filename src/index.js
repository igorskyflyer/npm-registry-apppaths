import RegKeys from '@igor.dvlpr/regkeys'

const appPathsKey = 'HKLM/SOFTWARE/Microsoft/Windows/CurrentVersion/App Paths'
const registry = new RegKeys(appPathsKey)

/**
 * Synchronously gets all keys from AppPaths.
 *
 * NOTE: Results are **cached** internally!
 * @param {boolean} [forceRefresh=false]
 * @throws Throws an error if the host machine is not running Windows OS.
 * @returns {string[]}
 */
function get(forceRefresh = false) {
  return registry.get(forceRefresh)
}

/**
 * Synchronously checks whether the given keys are present in the AppPaths.
 * @param {string[]} keys
 * @param {boolean} [caseSensitive=false]
 * @returns {boolean[]}
 */
function has(keys, caseSensitive = false) {
  return registry.hasKeys(keys, caseSensitive)
}

/**
 * Clears the cached result, if any.
 * @returns {void}
 */
function refresh() {
  registry.clear()
}

export { get, has, refresh }
