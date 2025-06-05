import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toString()}] ${req.method}-${req.url}`);
  next();
};

export default logger;
