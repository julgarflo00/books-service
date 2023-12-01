var express = require('express');
var router = express.Router();

var books =[
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
router.get('/:id', function(req, res, next) {
  const libroId = parseInt(req.params.id);
  const libroEncontrado = books.find(libro => libro.id === libroId);
  if (!libroEncontrado) {
    return res.status(404).send("Libro no encontrado");
  }
  res.status(201).send(libroEncontrado);
});

/*POST book */
router.post('/', function(req, res, next){
  var book = req.body;
  books.push(book);
  res.sendStatus(201);
});


/*PUT book*/
router.put('/:id', function(req, res, next) {
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

/*DELETE book*/
router.delete('/:id', function(req, res, next) {
  const libroId = parseInt(req.params.id);
  const indiceLibro = books.findIndex(libro => libro.id === libroId);
  if (indiceLibro === -1) {
    return res.status(404).send("Libro no encontrado");
  }
  books.splice(indiceLibro, 1);
  res.status(201).send("Libro eliminado exitosamente");
});

/*PUT prize */

/*PUT seller*/

/*PUT  reseñas*/

module.exports = router;
