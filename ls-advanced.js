const fs = require('node:fs/promises')
const path = require('node:path')


const folder = process.argv[2] ?? '.'

async function ls(folder) {
    let files

    try {
        files = await fs.readdir(folder)
    } catch {
        console.error(`No se ha podido leer el directorio: , ${folder}`)
        process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats

        try {
           stats = await fs.stat(filePath) // Status - Informacion del archivo
        } catch {
            console.error(`No se ha podido leer el directorio: , ${folder}`)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`

    })

    const filesInfo = await Promise.all(filesPromises)

    filesInfo.forEach(fileInfo => {
        console.log(fileInfo);
    });

    
}




ls(folder)
    
