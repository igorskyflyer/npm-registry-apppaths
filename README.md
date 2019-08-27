# Registry AppPaths

A Node.js module for reading the AppPaths registry key on Windows. Useful for retrieving applications that can be launched from the command prompt.

_Uses the reg.exe, WINDOWS **ONLY!**_

### Like it? Buy me a beer.

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/igorskyflyer)
<br><br>

### Install

```
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

```
const appPaths = require('registry-apppaths');
const apps = appPaths.get();

console.log(apps);

// ['chrome.exe', 'firefox.exe', 'opera.exe'...]
```

<br>

`.has(list: string[]): boolean[]`

Returns an array of Booleans indicating whether the entries of the parameter **list** are installed on the system.

```
const appPaths = require('registry-apppaths');
const has = appPaths.has(['chrome.exe', 'winword.exe', 'mspaintTYPO.exe']);

console.log(has);

// [true, true, false]
```

<br>

`.refresh(): void`

Force refresh the info from the registry, instead of retrieving the cached data.

```
const appPaths = require('registry-apppaths');
let apps = appPaths.get();

console.log(apps);

// ['chrome.exe', 'firefox.exe', 'opera.exe'...]

// application install method...

appPaths.refresh();

apps = appPaths.get();

console.log(apps);

// ['chrome.exe', 'firefox.exe', 'opera.exe', 'winword.exe'...]
```

<br>

### Development

```
git clone https://github.com/igorskyflyer/node-registry-apppaths.git
```

followed by a,

```
npm install
```

### Test

Open the project and execute:

```
npm run test
```
