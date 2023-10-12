const express = require('express');
const { createTablesIfNotExists } = require('./db/dbUtils');

const autorRoutes = require('./routes/autorRoutes');
const livroRoutes = require('./routes/livroRoutes');

const app = express();
app.use(express.json());
// criando tabelas caso não existam
createTablesIfNotExists();

app.use('/autores', autorRoutes);
app.use('/livros', livroRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});