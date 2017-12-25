# Registry AppPaths

A Node.js module for reading the AppPaths registry key on Windows. Useful for retrieving applications that can be launched from the command prompt.

*WINDOWS ONLY!*

### Exports

 ```getKeys(),```

 ```isInstalled()```.
<br><br>
 ### Usage

 ```getKeys()```

 Returns an array of sub-key names located in the AppPaths key.
 <br><br>
 ```isInstalled(name, strict)```

 Returns a Boolean indicating whether a given application is installed. Can be matched strictly or not.


