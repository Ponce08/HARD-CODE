import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  // console.log(`[${new Date().toString()}] ${req.method}-${req.url}`);
  console.log('❌Error:', err.message);

  res.status(500).json({ message: err.message || 'Error interno del servidor' });
};

export default errorHandler;
