const spawnSync = require('child_process').spawnSync;

const regKey = 'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths';
const searchKey =
	'hkey_local_machine\\\\software\\\\microsoft\\\\windows\\\\currentversion\\\\app paths\\\\';
const pattern = new RegExp(searchKey, 'g');

let apps = [];

function get() {
	if (apps.length > 0) {
		return apps;
	}

	try {
		const shell = spawnSync('reg', ['query', regKey], {
			stdio: 'pipe'
		});
		let output = shell.stdout.toString();

		output = output.toLowerCase().replace(pattern, '');
		apps = output.split('\r\n');

		if (apps.length > 1) {
			apps.shift();
			apps.pop();
		}
	} catch (exp) {
		console.error(exp);
		return apps;
	}

	return apps;
}

function has(list) {
	const count = list.length;

	if (!list || !list instanceof Array || count === 0) {
		return apps;
	}

	const result = [];

	if (apps.length === 0) {
		apps = get();
	}

	for (let i = 0; i < count; i++) {
		const matchFound = apps.indexOf(list[i]) > -1;
		result.push(matchFound);
	}

	return result;
}

function refresh() {
	apps = [];
}

module.exports = {
	get,
	has,
	refresh
};
