const os = require('node:os')

console.log('info del sistema operaivo');
console.log('---------------------------------');

console.log('nombre del sistema operativo', os.platform());
console.log('Version del sistema ', os.release());
console.log('arquitectura', os.arch());
console.log('cpus', os.cpus());
console.log('Memoria libre ', os.freemem() / 1024 / 1024);
console.log('Memoria total ', os.totalmem() / 1024 / 1024);
console.log('uptime ', os.uptime() / 60 / 60);

