# Registry AppPaths

A Node.js module for reading the AppPaths registry key on Windows. Useful for retrieving applications that can be launched from the command prompt.

*WINDOWS __ONLY!__*

### Exports

 ```getApps()```

<br>

### Usage

```getApps()```

Returns an array of sub-keys located in the AppPaths key.

```
const appPaths = require('registry-apppaths');
const apps = appPaths.getApps();
 
console.log(apps);

// ['chrome.exe', 'firefox.exe', 'opera.exe'...]
```