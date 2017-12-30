const execSync = require('child_process').execSync;

const regKey = 'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths';
const searchKey = 'hkey_local_machine\\software\\microsoft\\windows\\currentversion\\app paths\\';

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
 if(!list || !list instanceof Array) return;

 let result = {};
 
 apps = apps || get();

 if(apps.length === 0) return [];

 for(let i = 0, count = list.length; i < count; i++) {
  let current = list[i];
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