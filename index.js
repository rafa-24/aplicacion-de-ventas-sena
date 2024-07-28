const express = require('express');
const app = express();

// Definir un puerto (escucha peticiones)
const port = 8000;

// definir una ruta de prueba (endpoint)
app.get('/',(req, res) => {
    res.send('Hello World');
});

app.post('/nuevo-cliente', () => {
    res.send('creando nuevo cliente');
});

app.put('/nuevo-cliente', () => {
    res.send('editando cliente');
});

app.put('/lista-clientes', () => {
    res.send('lista de clientes');
});

// Servidor escucha peticones en nuestro puerto(8000)
app.listen(port,() => {
    console.log(`Servidor corriendo en el puerto ${port}`)
});