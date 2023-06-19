const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { Pool } = require('pg');
const schema = require('./schema');
const root = require('./root');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});


const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root(pool),
  graphiql: true
}));

app.listen(3000, () => {
  console.log('GraphQL server is running on http://localhost:3000/graphql');
});