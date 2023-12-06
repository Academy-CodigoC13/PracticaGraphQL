// client.js
import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql,
} from "@apollo/client";

// Configurar el cliente Apollo
const client = new ApolloClient({
  uri: "http://localhost:3000/graphql", // Cambia la URL según donde esté alojado tu servidor GraphQL
  cache: new InMemoryCache(),
});

// Definir una consulta GraphQL
const GET_HELLO = gql`
  {
    hello
  }
`;

// Componente funcional para consumir la API GraphQL
function App() {
  const { loading, error, data } = useQuery(GET_HELLO);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>{data.hello}</p>;
}

// Envolver la aplicación con el proveedor de Apollo
export default () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
