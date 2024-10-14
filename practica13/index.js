const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static('public')); // To serve static files (like HTML, CSS, and JS)

// Route to get the directory structure
app.get('/directory', (req, res) => {
    fs.readdir('./', { withFileTypes: true }, (err, files) => {
        if (err) {
            return res.status(500).send('Error reading directory');
        }

        // Map through files and directories to identify type
        const fileList = files.map(file => ({
            name: file.name,
            type: file.isDirectory() ? 'directory' : 'file'
        }));

        res.json(fileList); // Send the list as JSON
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


/*
//File system
const fs = require('fs');
//console.log(fs);
//https://nodejs.org/dist/latest-v14.x/docs/api/fs.html


//Leer un archivo
const leerArchivo = (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data.toString());
}

fs.readFile('./archivo.txt', leerArchivo);


//Escribir un archivo
const escribirArchivo = (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Archivo creado');
}

fs.writeFile('./nuevoArchivo.txt', 'Hola mundo', escribirArchivo);

//Eliminar un archivo
const eliminarArchivo = (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Archivo eliminado');
}

fs.unlink('./nuevoArchivo.txt', eliminarArchivo);
//fs.unlink('./nuevoArchivo2.txt', eliminarArchivo);

//Crear un directorio
const crearDirectorio = (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Directorio creado');
}

fs.mkdir('./nuevoDirectorio', crearDirectorio);

//Eliminar un directorio
const eliminarDirectorio = (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Directorio eliminado');
}

fs.rmdir('./nuevoDirectorio', eliminarDirectorio);

//Leer un directorio
const leerDirectorio = (err, files) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(files);
}

fs.readdir('./', leerDirectorio);

//Copiar un archivo
const copiarArchivo = (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Archivo copiado');
}

fs.copyFile('./archivo.txt', './copiaArchivo.txt', copiarArchivo);

//Mover un archivo
const moverArchivo = (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Archivo movido');
}

fs.rename('./copiaArchivo.txt', './copiaArchivo2.txt', moverArchivo);
*/