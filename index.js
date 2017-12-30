const performance = require('perf_hooks');

const execSync = require('child_process').execSync;

const regKey = 'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths';
const searchKey = 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\';

let apps = [];

function getApps() {
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

function generateKeys(data) {
 data = data.split('\r\n');

 if(data.length === 0) return;

 apps = [];

 data.pop();
 data.shift();

 data.forEach((value) => {
  value = value.replace(searchKey, '');
  apps.push(value);
 });
}

module.exports = {
 getApps
}