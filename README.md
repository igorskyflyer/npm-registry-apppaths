# 🪀 Registry AppPaths 🗃

A Node.js module for reading the AppPaths registry key on Windows. Useful for retrieving applications that can be launched from the command prompt.

_Uses the reg.exe, WINDOWS **ONLY!**_

### Like it? Buy me a beer.

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/igorskyflyer)
<br>

<br>

✨ Since `v.1.3.0` `Registry AppPaths` is a hybrid module that supports both CommonJS (legacy) and ES modules, thanks to [Modern Module](https://github.com/igorskyflyer/npm-modern-module).

<br>

### Install

```shell
npm install registry-apppaths --save
```

<br>

### Exports

- **Functions**
  - `get()`,<br>
  - `has()`,<br>
  - `refresh()`

 <br>

### Usage

`.get(): string[]`

Returns an array of sub-keys located in the AppPaths key.

```js
const appPaths = require('registry-apppaths')
const apps = appPaths.get()

console.log(apps)

// ['chrome.exe', 'firefox.exe', 'opera.exe'...]
```

<br>

`.has(list: string[]): boolean[]`

Returns an array of Booleans indicating whether the entries of the parameter **list** are installed on the system.

```js
const appPaths = require('registry-apppaths')
const has = appPaths.has(['chrome.exe', 'winword.exe', 'mspaintTYPO.exe'])

console.log(has)

// [true, true, false]
```

<br>

`.refresh(): void`

Force refresh the info from the registry, instead of retrieving the cached data.

```js
const appPaths = require('registry-apppaths')
let apps = appPaths.get()

console.log(apps)

// ['chrome.exe', 'firefox.exe', 'opera.exe'...]

// application install method...

appPaths.refresh()

apps = appPaths.get()

console.log(apps)

// ['chrome.exe', 'firefox.exe', 'opera.exe', 'winword.exe'...]
```

<br>

### Development

```shell
git clone https://github.com/igorskyflyer/node-registry-apppaths.git
```

followed by a,

```shell
npm i
```

### Test

Open the project and execute:

```shell
npm i
npm test
```
