import { Request, Response, NextFunction } from 'express';

interface User {
  id: number;
  name: string;
}

let users: User[] = [
  { id: 1, name: 'Yonathan' },
  { id: 2, name: 'Leydy' },
  { id: 3, name: 'Santiago' },
  { id: 4, name: 'Julieta' },
  { id: 5, name: 'Isabela' }
];

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json(users);
};

export const createUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    const newUser: User = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json({ message: 'Usuario creado correctamente', newUser });
  } catch (error) {
    next(error);
  }
};

export const updateUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const ID = parseInt(req.params.id);
    const { name } = req.body;

    const user = users.find((u) => u.id === ID);
    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    user.name = name;
    res.status(201).json({ message: 'Usuario Actualizado correctamente', user });
  } catch (error) {
    next(error);
  }
};

export const patchUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const ID = parseInt(req.params.id);
    const { name } = req.body;

    const user = users.find((u) => u.id === ID);
    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    if (name) user.name = name;
    res.status(201).json({ message: 'Usuario Modificado parcialmente', user });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const ID = parseInt(req.params.id);
    const user = users.find((u) => u.id === ID);
    if (!user) res.status(404).json({ message: 'Usuario no encontrado' });

    users = users.filter((u) => u.id !== ID);

    res.status(201).json({ message: `Usuario con ID:${ID} eliminado correctamente` });
  } catch (error) {
    next(error);
  }
};
