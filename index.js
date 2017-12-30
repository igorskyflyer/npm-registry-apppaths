const execSync = require('child_process').execSync;

const regKey = 'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths';
const searchKey = 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\';

let apps = [];

function getApps(normalize = false) {
 let output;

 try {
  const query = execSync(`reg query "${regKey}" && exit`);
  output = query.toString();
  generateKeys(output, normalize);
 }
 catch(exp) {
  console.log(exp);
  return null;
 }

 return apps;
}

function generateKeys(data, normalize) {
 data = data.split('\r\n');

 if(data.length === 0) return;

 apps = [];

 data.pop();
 data.shift();

 data.forEach((value) => {
  let key = value;

  if(normalize) key = key.toLowerCase();

  apps.push(key.replace(searchKey, ''));
 });
}

module.exports = {
 getApps
}