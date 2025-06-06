import { User } from '../types/User';

export let users: User[] = [
  { id: '1', name: 'Juan', email: 'juan@example.com' },
  { id: '2', name: 'Laura', email: 'laura@example.com' }
];

export let currentId = users.length + 1;
