# PracticaGraphQL

1. Creación del servidor GraphQL (usando express y express-graphql):

```bash
npm install express express-graphql graphql
```

2. Consumo de la API GraphQL en el lado del cliente (usando apollo-client y
   graphql):

```bash
npm install apollo-boost @apollo/client graphql
```


En este ejemplo, el servidor GraphQL tiene una única consulta (`hello`) que devuelve una cadena. El cliente React utiliza Apollo Client para conectarse al servidor GraphQL y mostrar el resultado de la consulta en un componente funcional simple.

Asegúrate de ejecutar `node server.js` para iniciar el servidor GraphQL y utiliza este servidor en tu aplicación de cliente React para ver cómo se realiza la creación y el consumo de una API GraphQL simple.