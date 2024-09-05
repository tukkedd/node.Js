const path = require('node:path');

//barra separadora de carpeta segun el sistema operativo (SO)
console.log(path.sep);

// unir rutas con path.join

const filepath = path.join('/contents', 'subfolder', 'test.txt')
console.log(filepath);

const base = path.base('/tmp/secret/archive.txt')
console.log(base);

