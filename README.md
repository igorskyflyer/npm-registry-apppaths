# Registry AppPaths

A Node.js module for reading the AppPaths registry key on Windows. Useful for retrieving applications that can be launched from the command prompt.

*Uses the reg.exe, WINDOWS __ONLY!__*

### Exports

 ```get()```,<br><br>
 ```has()```,<br><br>
 ```refresh()```

<br>

### Usage

```.get(): string[]```

Returns an array of sub-keys located in the AppPaths key.

```
const appPaths = require('registry-apppaths');
const apps = appPaths.get();
 
console.log(apps);

// ['chrome.exe', 'firefox.exe', 'opera.exe'...]
```

<br>

```.has(list: string[]): boolean[]```

Returns an array of Booleans indicating whether the entries of the parameter **list** are installed on the system. 

```
const appPaths = require('registry-apppaths');
const has = appPaths.has(['chrome.exe', 'winword.exe', 'mspaintTYPO.exe']);
 
console.log(has);

// [true, true, false]
```
<br>

```.refresh(): void```

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