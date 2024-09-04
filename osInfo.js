import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('info del sistema operaivo');
console.log('---------------------------------');

console.log('nombre del sistema operativo', platform());
console.log('Version del sistema ', release());
console.log('arquitectura', arch());
console.log('cpus', cpus());
console.log('Memoria libre ', freemem() / 1024 / 1024);
console.log('Memoria total ', totalmem() / 1024 / 1024);
console.log('uptime ', uptime() / 60 / 60);

