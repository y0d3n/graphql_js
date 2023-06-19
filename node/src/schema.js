const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    followers: [User]
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): [User]
    getUser_sqli(id: ID!): [User]
  }
`);

module.exports = schema;