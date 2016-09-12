const cp = require('child_process');

const env = require('dotenv').config();

let cmd = 'now';

for (const e in env) {
  cmd += ` -e ${e}="${env[e]}"`;
}

console.log(`executing: ${cmd}`);
console.log(cp.execSync(cmd).toString());
