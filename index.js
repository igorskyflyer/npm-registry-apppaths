const execSync = require('child_process').execSync;

const regKey = 'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths';
const searchKey = 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\';

let apps = [];

function get() {
 if(apps.length > 0) return apps;

 let output;

 try {
  const query = execSync(`reg query "${regKey}" && exit`);

  if(!query) return null;

  output = query.toString().toLowerCase();
  generateKeys(output);
 }
 catch(exp) {
  console.log(exp);
  return null;
 }

 return apps;
}

function has(list) {
 if(!options || !options instanceof Array) return;

 let result = {};
 
 apps = apps || get();

 for(let i = 0, count = options.length; i < count; i++) {
  let current = options[i];
  let isPresent = (apps.indexOf(current) > -1);

  result[current] = isPresent;

  if(isPresent) continue;
 }

 return result;
}

function generateKeys(data) {
 data = data.split('\r\n');

 if(data.length === 0) return;

 data.pop();
 data.shift();

 data.forEach((value) => {
  value = value.replace(searchKey, '');
  apps.push(value);
 });
}

function refresh() {
 apps = [];
 get();
}

module.exports = {
 get, has, refresh
}