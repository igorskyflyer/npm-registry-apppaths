# Registry AppPaths

A Node.js module for reading the AppPaths registry key on Windows. Useful for retrieving applications that can be launched from the command prompt.

*WINDOWS __ONLY!__*

### Exports

 ```getApps()```

### Usage

```getApps()```

Returns an array of sub-keys located in the AppPaths key.

Example output<br>
```['excel.exe', 'iexplore.exe', 'mplayer2.exe'...]```

<br>
Full example

```
const appPaths = require('registry-apppaths');
const apps = appPaths.getApps();
 
console.log(apps);

// ['chrome.exe', 'firefox.exe', 'opera.exe'...]
```