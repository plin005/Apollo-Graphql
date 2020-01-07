module.exports = {
  Query: {
    books: () => books
  },
};

//data set
const books = [
  {
    "title": "Harry Potter and the Chamber of Secrets",
    "author": {
      "name": "J.K. Rowling",
      "age": 30
    }
  },
  {
    "title": "Jurassic Park",
    "author": {
      "name": "Michael Crichton",
      "age": 45
    }
  }
];