# Registry AppPaths

A Node.js module for reading the AppPaths registry key on Windows. Useful for retrieving applications that can be launched from the command prompt.

*WINDOWS __ONLY!__*

### Exports

 ```getKeys(),```

 ```isInstalled()```.
<br><br>

### Usage

```getKeys()```

Returns an array of sub-key names located in the AppPaths key.

Example output<br>
```['excel.exe', 'iexplore.exe', 'mplayer2.exe' ...]```

<br><br>
```isInstalled(name, strict)```

Returns a Boolean indicating whether a given application is installed. Can be matched strictly or not.

Example output<br>
```isInstalled('winword.exe') = true```

<br><br>
```refresh()```

Refetches the info from the registry.

<br><br>
Full example<br>
```
const appPaths = require('registry-apppaths');

console.log(`Application list => ${getKeys()}`);
console.log(`Chrome is installed: ${isInstalled('chrome') ? 'yes' : 'no'}`);
```