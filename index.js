const execSync = require('child_process').execSync;

const regKey = 'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths';
const searchKey = 'hkey_local_machine\\software\\microsoft\\windows\\currentversion\\app paths\\';

let apps;

function get() {
 if(apps && apps.length) return apps;

 let output;

 try {
  const now = Date.now();
  const query = execSync(`reg query "${regKey}" && exit`);

  if(!query) return [];

  output = query.toString().toLowerCase();
  generateKeys(output);
 }
 catch(exp) {
  console.log(exp);
  return [];
 }

 return apps;
}

function has(list) {
 if(!list || !list instanceof Array || !list.length) return [];

 let result = [];
 
 if(!apps || !apps.length) apps = get();

 for(let i = 0, count = list.length; i < count; i++) {
  let isPresent = (apps.indexOf(list[i]) > -1);

  result.push(isPresent);

  if(isPresent) continue;
 }

 return result;
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

function refresh() {
 apps = [];
 return get();
}

module.exports = {
 get, has, refresh
}