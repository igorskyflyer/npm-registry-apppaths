const execSync = require('child_process').execSync;

const regKey = 'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths';
const searchKey = 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\';

let apps = [];

function getApps() {
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
 getApps();
}

module.exports = {
 getApps
}