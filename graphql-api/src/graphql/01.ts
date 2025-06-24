import { buildSchema } from 'graphql';

const schema = buildSchema(/* GraphQL */ `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  input UserInput {
    name: String!
    email: String!
  }

  type Query {
    getUsers: [User]!
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(input: UserInput!): User!
    updateUser(id: ID!, input: UserInput!): User!
    deleteUser(id: ID!): String!
  }
`);

import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction): void {
  console.log(`[📥 ${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

export default schema;
