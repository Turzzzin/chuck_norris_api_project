const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
const PORT = 8080;

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});