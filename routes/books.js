var express = require('express');
var router = express.Router();
var Book = require('../models/book');
var debug = require('debug')('bokks-2:server');

/*var books =[
  {
    "id": 1,
    "title": "Harry Potter y la piedra filosofal",
    "author": "J.K.Rowling",
    "year": "1997",
    "genre": "fantasía",
    "options": [
      { "seller": 2, "stock": 110, "prize": 9.9 },
      { "seller": 2, "stock": 120, "prize": 12.10 }
    ]
  },
  {
    "id": 2,
    "title": "Harry Potter y la cámara secreta",
    "author": "J.K.Rowling",
    "year": "1998",
    "genre": "fantasía",
    "options": [
      { "seller": 3, "stock": 105, "prize": 10.5 },
      { "seller": 2, "stock": 115, "prize": 13.20 }
    ]
  },
  {
    "id": 3,
    "title": "Harry Potter y el prisionero de Azkaban",
    "author": "J.K.Rowling",
    "year": "1999",
    "genre": "fantasía",
    "options": [
      { "seller": 4, "stock": 100, "prize": 11.0 },
      { "seller": 3, "stock": 110, "prize": 14.50 }
    ]
  },
  {
    "id": 4,
    "title": "Harry Potter y el cáliz de fuego",
    "author": "J.K.Rowling",
    "year": "2000",
    "genre": "fantasía",
    "options": [
      { "seller": 1, "stock": 95, "prize": 11.5 },
      { "seller": 4, "stock": 105, "prize": 15.0 }
    ]
  },
  {
    "id": 5,
    "title": "Harry Potter y la Orden del Fénix",
    "author": "J.K.Rowling",
    "year": "2003",
    "genre": "fantasía",
    "options": [
      { "seller": 2, "stock": 90, "prize": 12.0 },
      { "seller": 1, "stock": 100, "prize": 16.0 }
    ]
  },
  {
    "id": 6,
    "title": "Harry Potter y el misterio del príncipe",
    "author": "J.K.Rowling",
    "year": "2005",
    "genre": "fantasía",
    "options": [
      { "seller": 3, "stock": 85, "prize": 12.5 },
      { "seller": 4, "stock": 95, "prize": 17.0 }
    ]
  },
  {
    "id": 7,
    "title": "Harry Potter y las Reliquias de la Muerte",
    "author": "J.K.Rowling",
    "year": "2007",
    "genre": "fantasía",
    "options": [
      { "seller": 1, "stock": 80, "prize": 13.0 },
      { "seller": 2, "stock": 90, "prize": 18.0 }
    ]
  },
  {
    "id": 1,
    "title": "Orgullo y prejuicio",
    "author": "Jane Austen",
    "year": "1813",
    "genre": "romance",
    "options": [
      { "seller": 1, "stock": 100, "prize": 9.9 },
      { "seller": 2, "stock": 120, "prize": 12.10 }
    ]
  },
  {
    "id": 2,
    "title": "Amor en los tiempos del cólera",
    "author": "Gabriel García Márquez",
    "year": "1985",
    "genre": "romance",
    "options": [
      { "seller": 3, "stock": 95, "prize": 10.5 },
      { "seller": 4, "stock": 110, "prize": 14.0 }
    ]
  },
  {
    "id": 3,
    "title": "Romeo y Julieta",
    "author": "William Shakespeare",
    "year": "1597",
    "genre": "romance",
    "options": [
      { "seller": 2, "stock": 80, "prize": 11.0 },
      { "seller": 1, "stock": 90, "prize": 13.0 }
    ]
  },
  {
    "id": 4,
    "title": "Cumbres borrascosas",
    "author": "Emily Brontë",
    "year": "1847",
    "genre": "romance",
    "options": [
      { "seller": 4, "stock": 85, "prize": 12.5 },
      { "seller": 3, "stock": 95, "prize": 17.0 }
    ]
  },
  {
    "id": 5,
    "title": "Diario de una pasión",
    "author": "Nicholas Sparks",
    "year": "1996",
    "genre": "romance",
    "options": [
      { "seller": 1, "stock": 70, "prize": 14.0 },
      { "seller": 2, "stock": 80, "prize": 18.0 }
    ]
  },
  {
    "id": 1,
    "title": "El código Da Vinci",
    "author": "Dan Brown",
    "year": "2003",
    "genre": "thriller",
    "options": [
      { "seller": 1, "stock": 90, "prize": 11.5 },
      { "seller": 2, "stock": 100, "prize": 15.0 }
    ]
  },
  {
    "id": 2,
    "title": "El silencio de los corderos",
    "author": "Thomas Harris",
    "year": "1988",
    "genre": "thriller",
    "options": [
      { "seller": 3, "stock": 80, "prize": 12.0 },
      { "seller": 4, "stock": 90, "prize": 16.0 }
    ]
  },
  {
    "id": 3,
    "title": "Perdida",
    "author": "Gillian Flynn",
    "year": "2012",
    "genre": "thriller",
    "options": [
      { "seller": 2, "stock": 75, "prize": 13.0 },
      { "seller": 1, "stock": 85, "prize": 17.0 }
    ]
  },
  {
    "id": 4,
    "title": "El psicoanalista",
    "author": "John Katzenbach",
    "year": "2002",
    "genre": "thriller",
    "options": [
      { "seller": 4, "stock": 70, "prize": 14.5 },
      { "seller": 3, "stock": 80, "prize": 19.0 }
    ]
  },
  {
    "id": 5,
    "title": "La chica del tren",
    "author": "Paula Hawkins",
    "year": "2015",
    "genre": "thriller",
    "options": [
      { "seller": 1, "stock": 65, "prize": 15.0 },
      { "seller": 2, "stock": 75, "prize": 20.0 }
    ]
  }
]
*/
/*JhLNxzLZjHALSZ28
mongodb+srv://julgarflo:JhLNxzLZjHALSZ28@books-service.scqhdi0.mongodb.net/?retryWrites=true&w=majority */
/* GET books listing: */
router.get('/', async function(req, res, next) {
  try{
    const result = await Book.find();
    res.send(result.map((c)=>c.cleanup()));
  } catch (e){
    debug("DB problem", e);
    res.sendStatus(500);
  }
  });

/*GET book/id OPTION 2*/
router.get('/:id', function(req, res, next) {
  const bookId = parseInt(req.params.id);
  const findBook = books.find(book => {return book.id === bookId});
  if (findBook) {
    res.status(201).send(findBook);
  }else{
    res.status(404).send("Libro no encontrado");
  }
});

/*GET books/id/seller
router.get('/:id/:sellerId', function(req, res, next) {
  var sellerId = req.body;
  var findSeller = books.find(book => {return book.seller === sellerId});
  if (!findSeller) {
    return res.status(404).send("Vendedor no encontrado");
  }
  res.status(200).send(findSeller);
});*/

router.get('/:id/:sellerId', function(req, res, next) {
  const bookId = parseInt(req.params.id); 
  const sellerId = parseInt(req.params.sellerId);
  const findBook = books.find(book => book.id === bookId);
  if (!findBook) {
    return res.status(404).send("Libro no encontrado");
  }
  const findSeller = findBook.options.find(option => option.seller === sellerId);
  if (!findSeller) {
    return res.status(404).send("Vendedor no encontrado para este libro");
  }
  res.status(200).send(findSeller);
});

/*GET books/:id/:sellerId/prize
router.get('/:id/:sellerId/prize', function(req, res, next) {
  var requestedPrice = parseInt(req.body);
  var bookId = parseInt(req.params.id);
  var findBook = books.find(book => {return book => book.id === bookId});
  var bookWithPrice = findBook.options.find(s=> {return s.prize === requestedPrice});
  if (!bookWithPrice) {
    return res.status(404).send("Libro con ese precio no encontrado");
  }
  res.status(200).send(bookWithPrice);
})*/

/*GET books/id/idSeller/options?options=stock */
router.get('/:id/:idSeller/options', function(req, res, next) {
  const bookId = parseInt(req.params.id);
  const sellerId = parseInt(req.params.idSeller);
  const findBook = books.find(book => book.id === bookId);
  if (!findBook) {
    return res.status(404).send("Libro no encontrado");
  }
  const findOption = findBook.options.find(option => option.seller === sellerId);
  if (!findOption) {
    return res.status(404).send("Opción de vendedor no encontrada para este libro");
  }
  const options = req.query.options;
  if (options === 'stock') {
    return res.status(200).send({ stock: findOption.stock });
  } else if (options === 'price') {
    return res.status(200).send({ price: findOption.prize });
  } else {
    return res.status(400).send("Parámetro 'options' no válido");
  }
});

/*POST book */
router.post('/', async function(req, res, next){
  const {id, title} = req.body;

  const book = Book ({
    id,
    title});

  try {
    await book.save();
    return res.status(201).send("Libro actualizado");
  }catch (e) {
    if(e.errors){
      debug("Validation problem when saving");
    res.status(400).send({error: e.message});
    }else{
      debug("DB problem", e);
      res.sendStatus(500);
    }
  }
});

/*POST book/:id/:sellerId */
router.post('/:id/:sellerId', function(req, res, next){
  var bookId = parseInt(req.params.id);
  var newSeller = parseInt(req.body);
  var findBook = books.find(book => {return book.id === bookId});
  var findSeller = findBook.options.find(s => {return s.seller === newSeller});

  if (!findBook) { 
    return res.status(404).send("Libro no encontrado");
  }
  else if (!findSeller) {
    findSeller = []; // Si el libro no tiene vendedores, se inicializa el array
  }
  findSeller.push(newSeller);
  res.status(201).send("Vendedor añadido al libro exitosamente");
});

/*PUT book*/
router.put('/:id', function(req, res, next) {
  var bookId = parseInt(req.params.id);
  var newBook = parseInt(req.body);

  var findBook = books.findIndex(libro => {return libro.id === bookId});
  if (!findBook) {
    return res.status(404).send("Libro no encontrado");
  }
  
  books[findBook] = {
    id: bookId,
    title: newBook.title,
    author: newBook.author,
    year: newBook.year,
    genre: newBook.genre,
    options: {seller: newBook.seller, stock: newBook.year, prize: newBook.prize    }
  };
  res.status(201).send("Libro actualizado exitosamente");
});

/*PUT books/id/seller/:idSeller/prize*/

/*PUT books/id/seller/:idSeller/stock*/

/*DELETE book*/
router.delete('/', function(req, res, next) {
  var bookId = parseInt(req.body);
  var findBook = books.find(book => {return book.id === bookId});
  if (!findBook) {
    return res.status(404).send("Libro no encontrado");
  }
  books.splice(findBook, 1);
  res.status(201).send("Libro eliminado exitosamente");
});

/*DELETE book/id/seller */

module.exports = router;
