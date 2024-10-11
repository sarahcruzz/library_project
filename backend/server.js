const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Inicialização do App
const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB (sem as opções descontinuadas)
mongoose.connect('mongodb+srv://sarahcruz0492:root@library.9csy9.mongodb.net/?retryWrites=true&w=majority&appName=Library')
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.error('Erro ao conectar ao MongoDB: ', err));

// Importação das rotas
const bookRoutes = require('./routes/books');
app.use('/api/books', bookRoutes);

// Definição da porta do servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
