const express = require('express');
const app = express();

const userRoutes = require('./src/routes/userRoutes');

app.use(express.json());

app.use('/users', userRoutes);

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
});