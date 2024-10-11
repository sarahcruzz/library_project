const express = require('express')  // Importamos o Express 
const Book = require('../models/Book')  // Importamos o modelo Book 
const router = express.Router() // Criamos o roteador  

// ** CRIAÇÃO (POST) ** 

router.post('/', async (req, res) => { 
    const { title, author, year } = req.body;   // Extraímos os dados da requisição 
    try { 
        const newBook = ({ title, author, year })  // Criamos e salvamos o livro 
        await newBook.save(); 
        res.status(201).json(newBook);  // Retornamos o livro criado 
    } catch (error) { 
        res.status(500).json({ message: 'Erro ao criar livro'}) 
    } 
}) 

// ** LEITURA (PUT) ** 

router.get('/', async (req, res) => { 
    try{ 
        const books = await Book.find() // Buscamos todos os livros 
        res.status(200).json(books) 
    } catch (error) { 
        res.status(500).json({ message: 'Erro ao buscar livros', error })   // Retornamos erro, se houver 
    } 
}) 

// *** ATUALIZAÇÃO (PUT) *** 

router.put('/:id', async (req, res) => { 
    const { title, author, year} = req.body // Extraímos os novos dados 
    try { 
        const updatedBook = await Book.findByIdAndUpdate(req.parans.id, { title, author, year}, (new true))    // Atualizamos o livro pelo ID 
        res.status(500).json(updatedBook)   // Retornamos o livro atualizado 
    } catch (error) { 
        res.status(500).json({ message: 'Erro ao atualizar livro'}) 
    } 
}) 

// *** EXLUSÃO (DELETE) ***  

router.delete('/:id', async (req, res) => { 
    try { 
        await Book.findByIdAndUpdate 
        res.status(200).json({ message: 'Livro deletado com sucesso' });    // Retornamosmensagem de sucesso 
    } catch (error) { 
        res.status(500).json({ message: 'Erro ao deletar livro', error });  // Retornamos erro, se houver 
    } 
}); 
 
// Exportamos o roteador para ser usado no server.js 
module.exports = router; 