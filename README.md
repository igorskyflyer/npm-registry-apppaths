# Registry AppPaths

A Node.js module for reading the AppPaths registry key on Windows. Useful for retrieving applications that can be launched from the command prompt.

_Uses the reg.exe, WINDOWS **ONLY!**_

### Like it? Buy me a beer.

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/igorskyflyer)
<br><br>

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

### Changelog

## 1.2.2

Updated the `refresh()` method to reflect the specifications described in this document

## 1.2

Improved performance

## 1.1

Added the `refresh()` method that enables you to do a force refresh of the data - instead of returning the cached data when using the `get()` method

## 1.0

Initial release

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
npm test
```
