var express = require('express');
var router = express.Router();

var books =[
  {"id": 1, 
  "title" :"Pride and Prejudice", 
  "author":"Jane Austen", 
  "year":"1813", 
  "genre":"romance",
  "options":[{"seller": 1, "stock":100, "prize":9.9 },
  {"seller": 2, "stock":120, "prize":12.10 } 
]
},
  {"id": 2, 
  "title" :"Harry Potter and the philosopher's stone", 
  "author":"J.K.Rowling", 
  "year":"1997", 
  "genre":"fantasy", 
  "options":[{"seller": 2, "stock":110, "prize":9.9 },
  {"seller": 2, "stock":120, "prize":12.10 } 
]
},
  {"id": 3, 
  "title":"Harry Potter and the chamber of secrets", 
  "author":"J.K.Rowling", 
  "year":"1998", 
  "genre":"fantasy", 
  "options":[{"seller": 3, "stock":102, "prize":9.9 },
  {"seller": 2, "stock":120, "prize":12.10 } 
]
},
  {
    "id": 4,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "year": "1960",
    "genre": "fiction",
    "options": [
      {"seller": 1, "stock": 90, "prize": 10.5},
      {"seller": 3, "stock": 80, "prize": 11.75}
    ]
  },
  {
    "id": 5,
    "title": "1984",
    "author": "George Orwell",
    "year": "1949",
    "genre": "dystopian",
    "options": [
      {"seller": 2, "stock": 95, "prize": 12.99},
      {"seller": 3, "stock": 110, "prize": 14.25}
    ]
  },
  {
    "id": 6,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": "1925",
    "genre": "fiction",
    "options": [
      {"seller": 1, "stock": 120, "prize": 11.2},
      {"seller": 3, "stock": 100, "prize": 13.45}
    ]
  },
  {
    "id": 7,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "year": "1951",
    "genre": "fiction",
    "options": [
      {"seller": 2, "stock": 85, "prize": 10.75},
      {"seller": 1, "stock": 95, "prize": 12.0}
    ]
  },
  {
    "id": 8,
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "year": "1954",
    "genre": "fantasy",
    "options": [
      {"seller": 3, "stock": 110, "prize": 14.5},
      {"seller": 1, "stock": 105, "prize": 16.0}
    ]
  },
  {
    "id": 9,
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "year": "1932",
    "genre": "dystopian",
    "options": [
      {"seller": 1, "stock": 100, "prize": 13.0},
      {"seller": 2, "stock": 115, "prize": 15.25}
    ]
  },
  {
    "id": 10,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "year": "1937",
    "genre": "fantasy",
    "options": [
      {"seller": 2, "stock": 95, "prize": 11.9},
      {"seller": 3, "stock": 90, "prize": 13.15}
    ]
  },
  {
    "id": 11,
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "year": "1953",
    "genre": "dystopian",
    "options": [
      {"seller": 1, "stock": 105, "prize": 12.8},
      {"seller": 3, "stock": 88, "prize": 14.0}
    ]
  },
  {
    "id": 12,
    "title": "The Chronicles of Narnia",
    "author": "C.S. Lewis",
    "year": "1950",
    "genre": "fantasy",
    "options": [
      {"seller": 2, "stock": 98, "prize": 11.5},
      {"seller": 1, "stock": 92, "prize": 13.75}
    ]
  },
  {
    "id": 13,
    "title": "The Grapes of Wrath",
    "author": "John Steinbeck",
    "year": "1939",
    "genre": "fiction",
    "options": [
      {"seller": 3, "stock": 115, "prize": 10.99},
      {"seller": 1, "stock": 100, "prize": 12.25}
    ]
  }
]
/* GET books listing. */
router.get('/', function(req, res, next) {
  res.send(books);
});

/*GET book/id OPTION 1
router.get('/:id', function(res, req, next){
  var id = req.params.id;
  var result = books.find(c =>{return c.id == id;});
  if (result){
    res.send(result);
  } else {
    res.sendStatus(404);
  }
});*/

/*GET book/id OPTION 2*/
router.get('/', function(req, res, next) {
  const libroId = parseInt(req.params.id);
  const libroEncontrado = books.find(libro => libro.id === libroId);
  if (!libroEncontrado) {
    return res.status(404).send("Libro no encontrado");
  }
  res.status(201).send(libroEncontrado);
});

/*GET books/id/seller*/
router.get('/sellers/:sellerId', function(req, res, next) {
  const sellerId = parseInt(req.params.sellerId);
  const seller = sellers.find(seller => seller.id === sellerId);
  if (!seller) {
    return res.status(404).send("Vendedor no encontrado");
  }
  res.status(200).send(seller);
});

/*GET books/id/seller/:idSeller/prize*/
router.get('/sellers/:sellerId/price', function(req, res, next) {
  const requestedPrice = parseFloat(req.params.price);
  const bookWithPrice = books.find(book => book.price === requestedPrice);
  if (!bookWithPrice) {
    return res.status(404).send("Libro con ese precio no encontrado");
  }
  res.status(200).send(bookWithPrice);
})

/*POST book */
router.post('/', function(req, res, next){
  var book = req.body;
  books.push(book);
  res.sendStatus(201);
});

/*POST book/id/seller */
router.post('/sellers', function(req, res, next){
  const libroId = parseInt(req.params.id);
  const newSeller = req.body;

  const libroEncontrado = books.find(libro => libro.id === libroId);
  if (!libroEncontrado) {
    return res.status(404).send("Libro no encontrado");
  }

  if (!libroEncontrado.sellers) {
    libroEncontrado.sellers = []; // Si el libro no tiene vendedores, se inicializa el array
  }

  libroEncontrado.sellers.push(newSeller);
  res.status(201).send("Vendedor añadido al libro exitosamente");
});
/*PUT book*/
router.put('/', function(req, res, next) {
  const libroId = req.params.id;
  const libroActualizado = req.body;

  // Buscar el índice del libro en el array 'books' usando su ID
  const indiceLibro = books.findIndex(libro => libro.id === libroId);

  // Verificar si el libro con el ID proporcionado existe
  if (indiceLibro === -1) {
    // Si no se encuentra el libro, devolver un mensaje de error
    return res.status(404).send("Libro no encontrado");
  }

  // Actualizar los detalles del libro en el array 'books'
  books[indiceLibro] = {
    id: libroId,
    title: libroActualizado.title,
    author: libroActualizado.author,
    year: libroActualizado.year,
    genre: libroActualizado.genre,
    options: {seller: libroActualizado.seller, stock: libroActualizado.year, prize: libroActualizado.prize    }
  };

  // Devolver la respuesta con el nuevo estado de los libros
  res.status(201).send("Libro actualizado exitosamente");
});

/*PUT books/id/seller/:idSeller/prize*/

/*PUT books/id/seller/:idSeller/stock*/

/*DELETE book*/
router.delete('/', function(req, res, next) {
  const libroId = parseInt(req.params.id);
  const indiceLibro = books.findIndex(libro => libro.id === libroId);
  if (indiceLibro === -1) {
    return res.status(404).send("Libro no encontrado");
  }
  books.splice(indiceLibro, 1);
  res.status(201).send("Libro eliminado exitosamente");
});

/*DELETE book/id/seller */

module.exports = router;
