const { gql } = require('apollo-server')

module.exports = gql`
  type Book {
    id: ID
    title: String
    author: Author
  }

  type Author {
    name: String
    age: Int
  }

  type Query {
    books: [Book]
  }
`