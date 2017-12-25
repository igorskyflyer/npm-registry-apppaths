const windows = require('windows');
const appPaths = windows.registry('HKEY_LOCAL_MACHINE/SOFTWARE/Microsoft/Windows/CurrentVersion/App Paths');

function getKeys() {
  let keys = Object.keys(appPaths);

  return keys.map((key) => {
   return key.toLowerCase();
  });
}

function isInstalled(name, strict = false) {
 let result = false;
 const keys = getKeys();

 if(strict) {
  result = (keys.indexOf(name) > -1);
 }
 else {
  keys.forEach((path) => {
   if(path.indexOf(name) > -1) {
    result = true;
    return;
   }
  });
 }

 return result;
}

module.exports = {
 getKeys,
 isInstalled
}