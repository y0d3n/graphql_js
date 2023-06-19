const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUsers: [User]
    searchUsers(id: ID!): [User]
    searchUsers_sqli(id: ID!): [User]
  }
`);

module.exports = schema;