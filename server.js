// server.js
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Definir el esquema GraphQL
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Implementar resolutores
const root = {
  hello: () => "Hola, ¡esto es GraphQL!",
};

// Configurar Express y GraphQL
const app = express();
app.use("/graphql", graphqlHTTP({ schema, rootValue: root, graphiql: true }));

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor GraphQL iniciado en http://localhost:${PORT}/graphql`);
});
