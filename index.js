const RegKeys = require('@igor.dvlpr/regkeys')

const appPathKey = 'HKLM/SOFTWARE/Microsoft/Windows/CurrentVersion/App Paths'
const registry = new RegKeys(appPathKey)

function get(forceRefresh = false) {
  return registry.get(forceRefresh)
}

function has(keys) {
  return registry.hasKeys(keys)
}

function refresh() {
  registry.clear()
}

module.exports = {
  get,
  has,
  refresh,
}
