import { User, UserInput } from '../types/User';
import { users, currentId } from '../data/users';

let idCounter = currentId;

const resolvers = {
  getUsers: (): User[] => users,

  getUser: ({ id }: { id: string }): User | undefined => {
    const user = users.find((u) => u.id === id);
    if (!user) throw new Error(`Usuario con ID: ${id} no encontrado`);
    return user;
  },

  createUser: ({ input }: { input: UserInput }): User => {
    const newUser: User = { id: String(idCounter++), ...input };
    users.push(newUser);
    return newUser;
  },

  updateUser: ({ id, input }: { id: string; input: UserInput }): User => {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) throw new Error(`Usuario con ID: ${id} no encontrado`);
    users[index] = { id, ...input };
    return users[index];
  },

  deleteUser: ({ id }: { id: string }): string => {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) throw new Error(`Usuario con ${id} no encontrado`);
    users.splice(index, 1);
    return `Usuario con ID: ${id} eliminado`;
  }
};

export default resolvers;
