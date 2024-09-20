const express = require('express') // importação do express
const Book = require('../models/Book') // importação do modelo Book
const router = express.Router() // criação do roteador

// Post
router.post('/', async (req, res) => {
    const {title, author, year} = req.body // Extraímos os dados da requisição
    try {
        const newBook = new Book({ title, author, year}) // criando e salvando o livro
        await newBook.save()
        res.status(201).json(newBook) // Retornamos o livro criado
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar livro", error})
    }
})