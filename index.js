import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log(`Servidor rodando em http://localhost:${PORT}`) });

app.get('/', (request, response) => {
    response.send('<h1>Hello CapRover!</h1>');
});