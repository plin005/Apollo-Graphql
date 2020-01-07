const { ApolloServer } = require('apollo-server');

//schema
const typeDefs = require('./src/types')
const resolvers = require('./src/resolvers')

//Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

