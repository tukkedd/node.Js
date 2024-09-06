const path = require('node:path');

//barra separadora de carpeta segun el sistema operativo (SO)
console.log(path.sep);

// unir rutas con path.join

// te crea la ruta
const filepath = path.join('contents', 'subfolder', 'test.txt')
console.log(filepath);

// busca el archivo
const base = path.basename('/tmp/secret/archive.txt')
console.log(base);

//remueve la extension
const filename = path.basename('/tmp/secret/archive.txt', 'txt')
console.log(filename);


//te da la extension
const extension = path.extname('image.jpg')
console.log(extension);

