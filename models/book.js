const mongoose = require('mongoose');


const booksSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    }
    /*genre: String,
    options: 
      { seller: Number, stock: Number, prize: Number, review: Number }*/
})

booksSchema.methods.cleanup = function(){
    return {
        id: this.id,
        title: this.title
    }
}

const Book = mongoose.model('Book', booksSchema);

module.exports = Book;