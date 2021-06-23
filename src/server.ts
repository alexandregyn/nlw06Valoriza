import express from 'express';

const app = express();

app.get("/teste", (request, response) => {
    return response.send('Olá Mundo');
});

app.post("/teste2", (request, response) => {
    return response.send('metódo Post');
});

app.listen(3000, () => { console.log('Servidor Iniciado')});