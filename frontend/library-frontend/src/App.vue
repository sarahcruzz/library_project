<template>
  <div id="app">
    <!-- Formulário para adicionar ou editar um livro -->
    <BookForm :bookToEdit="bookToEdit" @book-added="fetchBooks" @book-updated="fetchBooks" />
    <!-- Lista de livros -->
     <BookList @edit-book="setBookToEdit" ref="bookList" />
  </div>
</template>

<script>
import BookForm from './components/BookForm.vue';
import BookList from './components/BookList.vue';

export default {
  data(){
    return{
      bookToEdit: null // Inicializa o estado do livro a ser editado
    }
  },
  components: {
    BookList,
    BookForm
  },
  methods: {
    // Função para definir o livro que será editado
    setBookToEdit(book){
      this.bookToEdit = book
    },
    // Função para atualizar a lista de livros após adicionar ou editar
    fetchBooks(){
      this.$refs.bookList.fetchBooks()
      this.bookToEdit = null // Limpa o formulário após a ação
    }
  }
}


</script>

