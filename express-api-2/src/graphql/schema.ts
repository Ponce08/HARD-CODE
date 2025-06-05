import { buildSchema } from 'graphql';

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: 'Yonathan' },
  { id: 2, name: 'Leydy' },
  { id: 3, name: 'Santiago' },
  { id: 4, name: 'Julieta' },
  { id: 5, name: 'Isabela' }
];

const schema = buildSchema(/* GraphQL */ `
  type User {
    id: Int
    name: string
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    createUser(name: String): User
  }
`);

const rootValue = ()=>{
  
}