import { Request, Response } from 'express';

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

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json(users);
};

export const createUser = (req: Request, res: Response) => {
  const { name } = req.body;
  const newUser: User = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json({ message: 'Usuario creado correctamente', newUser });
};
