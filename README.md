# Registry AppPaths

A Node.js module for reading the AppPaths registry key on Windows. Useful for retrieving applications that can be launched from the command prompt.

*WINDOWS __ONLY!__*

### Exports

 ```getApps()```
<br><br>

### Usage

```getApps(normalize = false)```

Returns a Promise containing an array of sub-key names located in the AppPaths key. Normalize determines whether the names of the executables are converted to lowercase.

normalize = true<br>
Example output<br>
```['excel.exe', 'IEXPLORE.exe', 'mplayer2.exe'...]```

normalize = false<br>
Example output<br>
```['excel.exe', 'iexplore.exe', 'mplayer2.exe'...]```

<br>
Full example<br>
```
const appPaths = require('registry-apppaths');

console.log(`Application list => ${getApps()}`);
```