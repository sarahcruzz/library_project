<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="book.title" placeholder="Título" required>
        <input v-model="book.author" placeholder="Autor" required>
        <input v-model="book.year" placeholder="Ano" required>
        <button type="submit">{{ book._id  ? 'Atualizar' : 'Adicionar' }}</button>
    </form>

</template>

<script>
    import api from '../services/api'

    export default {
        props: ['bookToEdit'],
        data() {
            return {
                book: this.bookToEdit || { title: '', author: '', year: null},
            }
        },
        methods: {
            handleSubmit(){
                if (this.book._id) {
                    api.updateBook(this.book._id, this.book).then(() => {
                        this.$emit('book-updated')
                    })
                } else {
                    api.addBook(this.book).then(() => {
                        this.$emit('book-added')
                    })
                }
            }
        }
    }

</script>