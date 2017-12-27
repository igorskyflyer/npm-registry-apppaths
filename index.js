const windows = require('windows');
const appPaths = windows.registry('HKEY_LOCAL_MACHINE/SOFTWARE/Microsoft/Windows/CurrentVersion/App Paths');

let keys = null;

function init() {
 refresh();
}

function refresh() {
 keys = Object.keys(appPaths);
}

function getKeys() {
 if(keys === null) refresh();

 return keys;
}

function isInstalled(name, strict = false) {
 let result = false;

 if(strict) {
  result = (keys.indexOf(name) > -1);
 }
 else {
  keys.forEach((key) => {
   if(key.indexOf(name) > -1) {
    result = true;
    return;
   }
  });
 }

 return result;
}

refresh();

module.exports = {
 refresh,
 getKeys,
 isInstalled
}