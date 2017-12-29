const execSync = require('child_process').execSync;

const regKey = 'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths';
const searchKey = 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\';

let apps = [];
let normalize = false;

function getApps(normalize = false) {
 let output;

 return new Promise((resolve, reject) => {
  const process = execSync(`reg query "${regKey}" && exit`, (err, stdout, stderr) => {
   if(err) {
    reject(err);
    return;
   }

   if(stderr !== '') {
    reject(err);
    return;
   }
  
   if(stdout === '') return;

   output = stdout.toString();
   generateKeys(output, normalize);
   resolve(apps);
  });
 });
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