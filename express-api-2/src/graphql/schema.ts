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
    name: String
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    createUser(name: String): User
  }
`);

const rootValue = {
  getUsers: () => users,
  createUser: ({ name }: { name: string }) => {
    const newUser: User = { id: users.length + 1, name };
    users.push(newUser);
    return newUser;
  }
};

export default { schema, rootValue };
